<template>
  <div>
    <mt-header fixed :title="showTitle">
      <router-link to="/" slot="left" v-if="isShowBack">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view style="margin:40px 0;"></router-view>
    <mt-tabbar class="mint-tabbar" v-model="selected">
      <mt-tab-item id="Training" :class="{ tab_selected: selected === 'Training' }">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        习射
      </mt-tab-item>
      <mt-tab-item id="score" :style="{color: selected === 'Score' ? 'red !important':'black !important' }">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        成绩
      </mt-tab-item>
      <mt-tab-item id="aboutme" :style="{color: selected === 'Aboutme' ? 'red !important':'black !important' }">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: ['练习设定', '成绩图表', '我的'],
        showTitle: '',
        selected: 'Training',
        isShowBack: false
      }
    },
    methods: {},
    mounted() {
      if (this.$route.path === '/Regist') {
        this.isShowBack = true
        this.showTitle = '成绩登录'
      } else if (this.$route.path === '/') {
        this.showTitle = '练习设定'
      } else if (this.$route.path === '/Aboutme') {
        this.showTitle = '我的'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        console.log(val)

        this.selected = val

        /*if (val === 'training') {
          this.showTitle = '练习设定'
        } else if (val === 'score') {
          this.showTitle = '成绩图表'
        } else {
          this.showTitle = '我的'
        }*/

        if (val === 'Training') {
          this.$router.push({path: '/'})
        } else {
          this.$router.push({path: '/' + val})
        }
      },
      $route: {
        handler: function (val, oldVal) {
          this.isShowBack = false
          if (val.path === '/') {
            this.showTitle = '练习设定'
          } else if (val.path === '/Regist') {
            this.showTitle = '成绩登录'
            this.isShowBack = true
          } else if (val.path === '/score') {
            this.showTitle = '成绩图表'
          } else {
            this.showTitle = '我的'
          }
        },
        // 深度观察监听
        deep: true
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #000000;
    font-size: 14px;
  }

  .tab_selected {
    color: red !important;
  }

  .mint-tabbar {
    position: fixed;
  }
</style>
