import { RobotStatus } from '@/utils/constants';

export default {
  namespaced: true,

  state: {
    robotStatus: RobotStatus.OPEN
  },

  mutations: {
    toggleRobotStatus(state, { status }) {
      state.robotStatus = status;
    }
  },

  getters: {
    robotStatus(state) { return state.robotStatus }
  }
}