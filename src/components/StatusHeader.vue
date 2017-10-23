<template>
  <div class="content-header container">
    {{ customer.name }}
    <span :class="['status-label', { 'stopped': robotStatus === RobotStatus.CLOSED }]"
      @click="openRobot">
      {{ robotStatus === RobotStatus.CLOSED ? '开启机器人' : '机器人开启中' }}
    </span>
  </div>
</template>

<script>
import { RobotStatus } from '@/utils/constants';
import { mapGetters } from 'vuex';
import { NameSpaces } from '@/store';

export default {
  name: 'StatusHeader',
  data () {
    return {
      RobotStatus
    }
  },
  computed: {
    ...mapGetters(NameSpaces.GLOBAL, {
      robotStatus: 'robotStatus'
    })
  },
  props: ['customer'],
  methods: {
    openRobot() {
      if (this.robotStatus === RobotStatus.CLOSED) {
        this.$store.commit(`${NameSpaces.GLOBAL}/toggleRobotStatus`, { status: RobotStatus.OPEN })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../styles/variable.less';

.content-header {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: @bg-lightgrey;
  font-size: 14px;
  height: 36px;
  line-height: 36px;

  .status-label {
    float: right;
    margin-top: 8px;
  }
}

.status-label {
  font-size: 12px;
  background-color: @default-green;
  color: #FFF;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  border-radius: 10px;

  &.stopped {
    background-color: @default-red;
    cursor: pointer;
  }

  &.warning {
    background-color: @default-orange;
  }
}
</style>
