import { RobotStatus } from '@/utils/constants';

export default {
  namespaced: true,

  state: {
    robotStatus: RobotStatus.OPEN,
    timeSetting: {
      start: 18,
      end: 5
    }
  },

  mutations: {
    toggleRobotStatus(state, { status }) {
      state.robotStatus = status;
    },
    saveTimeSetting(state, { start, end }) {
      state.timeSetting = { start, end };
      console.log('TODO: save time setting');
    }
  },

  getters: {
    robotStatus(state) { return state.robotStatus },

    timeSetting(state) { return state.timeSetting }
  }
}