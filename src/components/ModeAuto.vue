<template>
  <div class="content-inner">
    <status-header :customer="currentCustomer" />
    <div class="qa-block container" v-for="qa in currentCustomer.qas">
      <div class="qa-q">
        <div class="qa-avatar"><img :src="currentCustomer.avatar" :alt="currentCustomer.name"></div>
        <div class="qa-text">
          {{ qa.question }}
          <span class="status-label warning" v-if="unAnswerQuestionsCount > 0 && qa.status === QAStatus.UNANSWER">{{ unAnswerQuestionsCount }}条未回复</span>
        </div>
      </div>
      <div class="qa-q reverse" v-if="!qa.status">
        <div class="qa-avatar"><i class="iconfont icon-robot"></i></div>
        <div class="qa-text">{{ qa.answer }}</div>
      </div>
      <div style="text-align: right;" v-if="qa.status">
        <a v-if="qa.status === QAStatus.UNANSWER" class="btn-link" href="javascript: void(0)" @click="answer(qa)">回复</a>
        <span v-if="qa.status !== QAStatus.UNANSWER">已回复</span>
      </div>
    </div>
    <div class="warning-bar container" v-if="waitingCustomers.length > 0">
      <i class="iconfont icon-warning"></i>当前有{{ waitingCustomers.length }}位顾客需要人工接待！<i @click="showWaitingList" class="iconfont icon-double-up btn-slideup"></i>
    </div>
    <div class="waiting-container container" v-show="waitingVisible">
      <i class="iconfont icon-bold_close btn-close" @click="hideWaitingList"></i>
      <ul class="waiting-list">
        <li v-for="waiter in waitingCustomers" @click="serveManully(waiter)">{{ waiter.name }}<span :class="['status-label', { 'warning': waiter.waitingTime > 60 }]">等待{{waiter.waitingTime}}秒</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash';
import { mapGetters } from 'vuex';
import { NameSpaces } from '@/store';
import { QAStatus } from '@/utils/constants';
import StatusHeader from './StatusHeader';

export default {
  name: 'ModeAuto',
  data() {
    return { 
      QAStatus,
      waitingVisible: false
    }
  },
  components: {
    StatusHeader
  },
  computed: {
    ...mapGetters(NameSpaces.AUTO, {
      currentCustomer: 'currentCustomer',
      waitingCustomers: 'waitingCustomers'
    }),
    unAnswerQuestionsCount() {
      return _.filter(this.currentCustomer.qas, qa => qa.status && qa.status === QAStatus.UNANSWER).length;
    }
  },
  methods: {
    answer(qa) {
      this.$store.commit(`${NameSpaces.AUTO}/answerQuestion`, { qa })
    },
    showWaitingList() {
      this.waitingVisible = true;
    },
    hideWaitingList() {
      this.waitingVisible = false;
    },
    serveManully(waiter) {
      this.waitingVisible = false;
      this.$store.dispatch(`${NameSpaces.AUTO}/serveManully`, { waiter });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../styles/variable.less';

.warning-bar {
  background-color: @default-red;
  color: #FFF;
  font-size: 14px;
  height: 48px;
  line-height: 48px;
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;

  i.btn-slideup {
    float: right;
    cursor: pointer;
  }
}

.waiting-container {
  position: fixed;
  bottom: 108px;
  left: 0;
  right: 0;
  height: ~"calc(100% - 250px)";
  background-color: #FFF;
  z-index: 20;
  padding-top: 40px;

  i.btn-close {
    font-size: 12px;
    color: @default-blue;
  }

  ul.waiting-list {
    font-size: 12px;
    
    .status-label {
      margin-top: 8px;
      float: right;
    }

    li {
      height: 36px;
      line-height: 36px;
      border-bottom: 1px solid #D8D8D8;
      cursor: pointer;
    }
  }
}
</style>
