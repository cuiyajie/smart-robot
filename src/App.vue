<template>
  <div id="app">
    <div class="header">
      <div class="page-header">
        <div class="container">智小点</div>
        <i class="iconfont icon-close btn-close"></i>
      </div>
      <div class="page-nav">
        <div class="container radiogroup">
          <div class="radio"><label><input type="radio" name="router" :checked="$route.name === Routes.AUTO" @change="routeTo(Routes.AUTO)">全自动模式</label></div>
          <div class="radio"><label><input type="radio" name="router" :checked="$route.name === Routes.SEMI_AUTO" @change="routeTo(Routes.SEMI_AUTO)">半自动模式</label></div>
          <div class="radio"><label><input type="radio" name="router" :checked="$route.name === Routes.CLOSED" @change="routeTo(Routes.CLOSED)">关闭机器人</label></div>
        </div>
      </div> 
    </div>
    <div class="content"><router-view/></div>
    <div class="footer">
      <div class="container clearfix">
        <div class="flt-l"><label @click="showSettingModal"><i class="iconfont icon-setting"></i>设置</label></div>
        <div class="flt-r"><i class="iconfont icon-chat"></i>智小点客服</div>
      </div>
      <div class="popup container" v-show="settingVisible">
        <span style="margin-right: 15px;">夜间模式：</span><time-setting ref="start" :hour="9"></time-setting>
        <span class="seperator">至</span>
        <time-setting ref="end" :hour="18"></time-setting>
        <i @click="hideSettingModal" class="iconfont icon-close btn-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Routes } from '@/utils/constants'

Vue.component('TimeSetting', {
  
  props: {
    hour: {
      type: Number,
      default: 1
    }
  },

  template: `<select ref="select"> 
    <option v-for="(v, index) in Array(24)" :key="index" :selected="(index + 1) === hour" :value="index">{{ index + 1 }}点</option>
  </select>`,

  methods: {
    getValue() {
      return this.$refs.select.value;
    }
  }
})

export default {
  data() {
    return {
      Routes,
      settingVisible: false
    }
  },

  methods: {
    routeTo(route) {
      this.$router.push(route);
    },

    showSettingModal() {
      this.settingVisible = true;
    },

    hideSettingModal() {
      console.log(this.$refs.start.getValue());
      console.log(this.$refs.end.getValue());
      this.settingVisible = false;
    }
  }
}
</script>

<style lang="less">
@import "./styles/variable.less";

#app {
  position: relative;

  label {
    cursor: pointer;
  }


  i.icon-close.btn-close {
    position: absolute;
    line-height: 100%;
    font-size: 18px;
    top: 16px;
    right: 20px;
    cursor: pointer;
  }
}

.page-header {
  position: relative;
  color: #FFF;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  background-color: @default-blue;
}

.page-nav {
  position: relative;
  color: #FFF;
  background-color: @default-blue;
  height: 60px;
  line-height: 60px;
  box-shadow: 0 -1px 3px -3px #e692eb, 0 -1px 0px 1px #4298f5, 0 -1px 2px 1px #589bfa;

  .radiogroup {
    display: flex;
  }

  .radio {
    font-size: 14px;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 5px;
    
    input {
      vertical-align: middle;
      margin-right: 10px;
      margin-top: -1px;
    }
  }
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.content {
  padding-top: 120px;
  padding-bottom: 60px;
  height: 100%;
  overflow: auto;

  .content-inner {
    position: relative;
    padding-top: 36px;
  }
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  line-height: 60px;
  color: #FFF;
  font-size: 14px;
  background-color: @default-blue;

  .popup {
    position: absolute;
    color: #333;
    bottom: 100%;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #FFF;
    box-shadow: 0 0 0 1px @default-blue inset;
    display: flex;
    align-items: center;

    .seperator {
      margin: 2px 10px 0; 
    }

    i { color: @default-blue; }
  }
}
</style>
