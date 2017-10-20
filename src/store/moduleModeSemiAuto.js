import { sendMessage, receiveMessage } from '@/data/bridge'

export default {
    namespaced: true,

    state: {
        currentCustomer: {
            robotQAs: []
        }
    },

    actions: {
        getInitData() {
            // TODO: sendMessage
            //receiveMessage();
        }
    },

    mutations: {
        setInitData(state, { customer }) {
            alert('mutated customer!')
            state.currentCustomer = customer;
        },

        focusQuestion(state, { rqa }) {
            console.log(`TODO: prepare answer ${rqa.question}`);
        },

        selectAnswer(state, { answer, rqa }) {
            console.log(`TODO: user ${answer.content} as answer of question ${rqa.question}. used ${answer.count} times`);
        }
    },

    getters: {
        currentCustomer(state) { return state.currentCustomer; }
    }
}