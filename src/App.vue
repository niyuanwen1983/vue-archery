<template>
  <div>
    <mt-header fixed :title="showTitle"></mt-header>
    <router-view style="margin-top:40px;"></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="training" :class="{ tab_selected: selected === 'training' }">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        习射
      </mt-tab-item>
      <mt-tab-item id="score" :style="{color: selected === 'score' ? 'red !important':'black !important' }">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        成绩
      </mt-tab-item>
      <mt-tab-item id="aboutme" :style="{color: selected === 'aboutme' ? 'red !important':'black !important' }">
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
        showTitle: '练习设定',
        selected: 'training'
      }
    },
    methods: {},
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        console.log(val)

        this.selected = val

        if (val === 'training') {
          this.showTitle = '练习设定'
        } else if (val === 'score') {
          this.showTitle = '成绩图表'
        } else {
          this.showTitle = '我的'
        }

        this.$router.push({path: '/' + val})
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
</style>
