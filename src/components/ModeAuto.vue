<template>
  <div class="content-inner">
    <status-header :customer="currentCustomer" />
    <div class="qa-block container" v-for="qa in currentCustomer.qas">
      <div class="qa-q">
        <div class="qa-avatar"><img :src="currentCustomer.avatar" :alt="currentCustomer.name"></div>
        <div class="qa-text">
          {{ qa.question }}
          <span class="status-label warning" v-if="unAnswerQuestionsCount > 0 && qa.status === QAStatus.UNANSWER">{{ unAnswerQuestionsCount }}条未回复</span>
          <div style="text-align: right;"><a class="btn-link" href="javascript: void(0)" v-if="qa.status">回复</a></div>
        </div>
      </div>
      <div class="qa-q reverse" v-if="!qa.status">
        <div class="qa-avatar"><img :src="currentCustomer.avatar" :alt="currentCustomer.name"></div>
        <div class="qa-text">{{ qa.answer }}</div>
      </div>
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
    return { QAStatus }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../styles/variable.less';

.qa-block {
  margin-top: 5px;
  background-color: #FFF;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size:14px;

  .qa-avatar {
    width: 42px;
    height: 42px;
    line-height: 42px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .qa-q {
    display: flex;
    flex-direction: row;
    min-height: 42px;
    margin: 10px;

    .no-answer {
      margin-bottom: 0;
    }

    .qa-avatar {
      align-self: start;
      flex-basis: 42px;
    }

    .qa-text {
      align-self: center;
      flex-basis: ~"calc(100% - 42px)";
      padding-left: 10px;
      padding-right: 0;
    }

    &.reverse {
      flex-direction: row-reverse;

      .qa-text {
        padding-left: 0;
        padding-right: 10px;
      }
    }
  }
}

.btn-link {
  
}
</style>
