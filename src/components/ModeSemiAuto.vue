<template>
  <div class="content-inner">
    <status-header :customer="currentCustomer" />
    <div class="qa-block" v-for="rqa in currentRobotQAs">
      <div class="qa-q container">
        <div class="qa-avatar"><img :src="currentCustomer.avatar" :alt="currentCustomer.name"></div>
        <div class="qa-text">{{ rqa.question }}</div>
      </div>
      <div class="qa-q container" v-for="(answer, index) in rqa.answerList" @click="selectAnswer(answer, rqa)" @dblclick="sendAnswer(answer, rqa)">
        <div class="qa-avatar"><i class="iconfont icon-robot"></i></div>
        <div class="qa-text">{{ answer.answer }}</div>
        <!-- <div class="qa-count"><span :class="['count-label', { 'most-selected': index === 0 }]">{{ index + 1 }}</span></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { NameSpaces } from '@/store';
import StatusHeader from './StatusHeader';

export default {
  name: 'ModeSemiAuto',
  components: { StatusHeader },
  computed: {
    ...mapGetters(NameSpaces.SEMI_AUTO, {
      currentCustomer: 'currentCustomer',
      currentRobotQAs: 'currentRobotQAs'
    })
  },
  methods: {
    selectAnswer(rqa) {
      this.$store.commit(`${NameSpaces.SEMI_AUTO}/focusQuestion`, { rqa })
    },
    sendAnswer(answer, rqa) {
      this.$store.commit(`${NameSpaces.SEMI_AUTO}/selectAnswer`, { answer, rqa })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../styles/variable.less';
.qa-block {
  .qa-q.triple {
    min-height: 42px;

    &:hover {
      background-color: #F5F5F5;
      cursor: pointer;
    }

    .qa-avatar {
      margin-top: 7px;
    }

    .qa-text {
      flex-basis: ~"calc(100% - 70px)";
      padding-right: 10px !important;
      word-break: break-all;
    }

    .qa-count {
      flex-basis: 42px;
    }

    .count-label {
      display: inline-block;
      text-align: center;
      width: 42px;
      height: 42px;
      border-radius: 6px;
      background-color: #66cbff;
      color: #FFF;
      font-size: 10px;
      padding: 6px;
      line-height: 30px;
      font-weight: bold;
      font-size: 18px;

      &.most-selected {
        background-color: #ff986f;
      }
    }
  }
}
</style>
