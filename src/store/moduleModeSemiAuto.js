export default {
  namespaced: true,
  
  state: {
    currentCustomer: {
      name: 'zjc0264',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507973495652&di=65f99e3a7357760cabe2454f74dc8c92&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1956787344%2C320898192%26fm%3D214%26gp%3D0.jpg',
      robotQAs: [{
        question: '这是出的新品么？',
        answers: [{
          content: '您好，我们店里最近新推出超柔成长库拉拉裤',
          count: 43
        }, {
          content: '您好，我们店里最近新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤',
          count: 24
        }, {
          content: '您好，我们店里最近新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤',
          count: 67
        }]
      }, {
        question: '这是出的新品么？',
        answers: [{
          content: '您好，我们店里最近新推出超柔成长库拉拉裤',
          count: 43
        }, {
          content: '您好，我们店里最近新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤',
          count: 24
        }, {
          content: '您好，我们店里最近新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤新推出超柔成长库拉拉裤',
          count: 67
        }]
      }]
    }
  },

  actions: {

  },

  mutations: {
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