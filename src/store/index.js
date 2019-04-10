import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        trainingIndex: 1,
        isTraining: false,//是否正在练习中
        currentData: null
    },
    mutations: {
        doTraining() {
            this.state.isTraining = true
            console.log('do=' + this.state.isTraining)
        },
        overTraining() {
            this.state.isTraining = false
            //this.state.currentData = null
            console.log('over=' + this.state.isTraining)
        },
        initCurrentData(state, payload) {
            this.state.currentData = payload
        },
        registScoreData(state, payload) {
            this.state.trainingIndex++
            this.state.currentData.scores.push(payload)
        }
    },
    actions: {
        doTrainingAction(context) {
            context.commit('doTraining')
        },
        registScoreDataAction(context, score) {
            context.commit('registScoreData', score)
        },
        overTrainingAction(context) {
            context.commit('overTraining')
        },
        initCurrentDataAction(context, val) {
            context.commit('initCurrentData', val)
        }
    }
})

export default store