import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Training from '@/components/Training'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Training',
      name: 'Training',
      component: Training
    },
    {
      path: '/Score',
      name: 'Score',
      component: Score
    }
  ]
})
