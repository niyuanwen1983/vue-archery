<template>
  <div class="container">
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
import * as common from "../common/common.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      xArr: [],
      yArr: []
    };
  },
  mounted() {
    //if (common.isEmpty(this.$store.state.currentData)) {
    if (this.$store.state.currentData != null) {
      this.$store.state.currentData.scores.forEach((element, index) => {
        this.xArr.push(index + 1);
        this.yArr.push(element);
      });
      this.drawLine();
    }
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "实时成绩" },
        tooltip: {},
        xAxis: {
          data: this.xArr
        },
        yAxis: {},
        series: [
          {
            name: "成绩",
            type: "line",
            data: this.yArr
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
