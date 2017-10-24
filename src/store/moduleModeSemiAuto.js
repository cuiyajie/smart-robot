import { sendMessage, receiveMessage } from '@/data/bridge'
import * as _ from 'lodash';
import Vue from 'vue'

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
        setInitData(state, { customerId, name, avatar }) {
            state.currentCustomer = {
                ...state.currentCustomer,
                customerId: customerId,
                name: name,
                avatar: avatar
            };

            state.currentCustomerId = customerId;
            state.customerMap = {
                ...state.customerMap,
                [customerId]: [
                    ...(state.customerMap[customerId] || []),
                    {}
                ]
            }
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

            Vue.nextTick(function() {
                //document.getElementsByClassName('qa-block').length
                //alert(document.getElementsByClassName('qa-block').length);
            })
        },

        focusQuestion(state, { rqa }) {
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