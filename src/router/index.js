import Vue from 'vue'
import Router from 'vue-router'
import { Routes } from '@/utils/constants'
import ModeAuto from '@/components/ModeAuto'
import ModeSemiAuto from '@/components/ModeSemiAuto'
import ModeClosed from '@/components/ModeClosed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: `/${Routes.AUTO}`,
      name: Routes.AUTO,
      component: ModeAuto
    },
    {
      path: `/${Routes.SEMI_AUTO}`,
      name: Routes.SEMI_AUTO,
      component: ModeSemiAuto
    },
    {
      path: `/${Routes.CLOSED}`,
      name: Routes.CLOSED,
      component: ModeClosed
    }
  ]
})
