import { QAStatus, RobotStatus } from '@/utils/constants';
import { getBridge } from '@/data/bridge';
import { NameSpaces } from './index';

export default {
  namespaced: true,
  
  state: {
    currentCustomer: {
      qas: []
    },
    waitingCustomers: []
  },

  actions: {
    getInitData() {

    },
    serveManully({ commit }, { waiter }) {
      console.log(`TODO: start serve ${waiter.name} manually`);
      commit(`${NameSpaces.GLOBAL}/toggleRobotStatus`, { status: RobotStatus.CLOSED }, { root: true });
    }
  },

  mutations: {
    answerQuestion(state, { qa }) {
      const bridge = getBridge();
      bridge.sendMessage();
    }
  },

  getters: {
    currentCustomer(state) { return state.currentCustomer },

    waitingCustomers(state) { return state.waitingCustomers }
  }
}