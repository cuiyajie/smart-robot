import { sendMessage, receiveMessage } from '@/data/bridge'
import * as _ from 'lodash';

export default {
    namespaced: true,

    state: {
        currentCustomer: {},
        customerMap: {},
        currentCustomerId: ''
    },

    actions: {
        getInitData() {
            // TODO: sendMessage
        }
    },

    mutations: {
        setInitData(state, { customer }) {
            state.currentCustomer = customer;
        },

        setData(state, { customerId, robotQA }) {
            state.currentCustomerId = customerId;
            state.customerMap = {
                ...state.customerMap,
                [customerId]: [
                    ...(state.customerMap[customerId] || []),
                    robotQA
                ]
            }
        },

        focusQuestion(state, { rqa }) {
            console.log(rqa)
            sendMessage({ "operObj": "answerItem", "oper": "click", "content": rqa.answer });
        },

        selectAnswer(state, { answer, rqa }) {
            sendMessage({ "operObj": "answerItem", "oper": "dbclick", "content": answer.answer });
            // console.log(`TODO: user ${answer.content} as answer of question ${rqa.question}. used ${answer.count} times`);
        }
    },

    getters: {
        currentRobotQAs(state) { return state.customerMap[state.currentCustomerId]; },

        currentCustomer(state) { return state.currentCustomer; }
    }
}