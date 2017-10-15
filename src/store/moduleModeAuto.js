import { QAStatus, RobotStatus } from '@/utils/constants';
import { NameSpaces } from './index';

export default {
  namespaced: true,
  
  state: {
    currentCustomer: {
      name: 'zjc0264',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507973495652&di=65f99e3a7357760cabe2454f74dc8c92&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1956787344%2C320898192%26fm%3D214%26gp%3D0.jpg',
      qas: [{
        question: '这是出的新品么？',
        answer: '你好，我们店里最近新推出超柔成长裤拉拉裤XL码54片:'
      }, {
        question: '超薄国庆的时候有啥活动？',
        status: QAStatus.UNANSWER
      }, {
        question: '拉拉裤M码没有了？',
        answer: '亲亲，咱家有很多不同的系列呢。您想要的是哪个系列呢？是超薄，还是超柔的呢？是乐动还是至爱呢？'
      }, {
        question: '17斤',
        answer: '亲亲，那给你推荐乐动的M号拉拉裤，点击链接前往查看。'
      }]
    },
    waitingCustomers: [
      {
        name: '恍如初晴',
        waitingTime: 300
      },
      {
        name: '阿毛',
        waitingTime: 60
      },
      {
        name: 'Bob',
        waitingTime: 50
      }
    ]
  },

  actions: {
    serveManully({ commit }, { waiter }) {
      console.log(`TODO: start serve ${waiter.name} manually`);
      commit(`${NameSpaces.GLOBAL}/toggleRobotStatus`, { status: RobotStatus.CLOSED }, { root: true });
    }
  },

  mutations: {
    answerQuestion(state, { qa }) {
      console.log(`TODO: start anwser => ${qa.question}`);
    }
  },

  getters: {
    currentCustomer(state) { return state.currentCustomer },

    waitingCustomers(state) { return state.waitingCustomers }
  }
}