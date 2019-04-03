import Vue from 'vue'
import Router from 'vue-router'
import Training from '@/components/Training'
import Score from '@/components/Score'
import Regist from '@/components/Regist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Training',
      component: Training
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/Score',
      name: 'Score',
      component: Score
    }
  ]
})
