import { sendMessage, receiveMessage } from '@/data/bridge'

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
                    robotQA,
                    ...(state.customerMap[customerId] || [])
                ]
            }
        },

        focusQuestion(state, { rqa }) {
            sendMessage({ content: rqa, type: 1 });
        },

        selectAnswer(state, { answer, rqa }) {
            console.log(`TODO: user ${answer.content} as answer of question ${rqa.question}. used ${answer.count} times`);
        }
    },

    getters: {
        currentRobotQAs(state) { return state.customerMap[state.currentCustomerId]; },

        currentCustomer(state) { return state.currentCustomer; }
    }
}