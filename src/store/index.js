import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isTraining: false//是否正在练习中
    },
    mutations: {
        doTraining() {
            this.state.isTraining = true
            console.log('do=' + this.state.isTraining)
        },
        overTraining() {
            this.state.isTraining = false
            console.log('over=' + this.state.isTraining)
        }
    },
    actions: {
        doTrainingAction(context) {
            context.commit('doTraining')
        },
        overTrainingAction(context) {
            context.commit('overTraining')
        }
    }
})

export default store