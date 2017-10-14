import Vue from 'vue';
import Vuex from 'vuex';
import ModuleGlobal from './moduleGlobal';
import ModuleModeAuto from './ModuleModeAuto';
import ModuleModeSemiAuto from './ModuleModeSemiAuto';
import ModuleModeClosed from './ModuleModeClosed';

export const NameSpaces = {
  GLOBAL: 'Global',
  AUTO: 'ModeAuto',
  SEMI_AUTO: 'ModeSemiAuto',
  CLOSED: 'ModeClosed'
} 

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [NameSpaces.GLOBAL]: ModuleGlobal,

    [NameSpaces.AUTO]: ModuleModeAuto,

    [NameSpaces.SEMI_AUTO]: ModuleModeSemiAuto,

    [NameSpaces.CLOSED]: ModuleModeClosed
  }
})

