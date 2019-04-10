<template>
  <div>
    <div style="text-align:center;">第{{this.$store.state.trainingIndex}}组</div>
    <mt-cell title="仅输入成绩">
      <mt-switch v-model="inputType"></mt-switch>
    </mt-cell>
    <div v-if="inputType">
      <mt-field label="总成绩" placeholder="请输入总成绩" v-model="total1" type="number"></mt-field>
    </div>
    <div v-else>
      <div>
        <div class="row-score">
          <mt-button class="btn btn-yellow" @click="addScore(11)">10*</mt-button>
          <mt-button class="btn btn-yellow" @click="addScore(10)">10</mt-button>
          <mt-button class="btn btn-yellow" @click="addScore(9)">9</mt-button>
          <mt-button class="btn btn-red" @click="addScore(8)">8</mt-button>
          <mt-button class="btn btn-red" @click="addScore(7)">7</mt-button>
        </div>
        <div class="row-score">
          <mt-button class="btn btn-blue" @click="addScore(6)">6</mt-button>
          <mt-button class="btn btn-blue" @click="addScore(5)">5</mt-button>
          <mt-button class="btn btn-black" @click="addScore(4)">4</mt-button>
          <mt-button class="btn btn-black" @click="addScore(3)">3</mt-button>
          <mt-button class="btn btn-white" @click="addScore(2)">2</mt-button>
        </div>
        <div class="row-score">
          <mt-button class="btn btn-white" @click="addScore(1)">1</mt-button>
          <mt-button class="btn btn-white" @click="addScore(0)">M</mt-button>
        </div>
      </div>
      <hr>
      <div class="score-result">
        <div class="row-result">
          <mt-button class="btn btn-yellow" @click="minusScore(11)">10*</mt-button>
          <mt-badge size="small">{{valuesArr[11]}}</mt-badge>
          <mt-button class="btn btn-yellow" @click="minusScore(10)">10</mt-button>
          <mt-badge size="small">{{valuesArr[10]}}</mt-badge>
          <mt-button class="btn btn-yellow" @click="minusScore(9)">9</mt-button>
          <mt-badge size="small">{{valuesArr[9]}}</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-red" @click="minusScore(8)">8</mt-button>
          <mt-badge size="small">{{valuesArr[8]}}</mt-badge>
          <mt-button class="btn btn-red" @click="minusScore(7)">7</mt-button>
          <mt-badge size="small">{{valuesArr[7]}}</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-blue" @click="minusScore(6)">6</mt-button>
          <mt-badge size="small">{{valuesArr[6]}}</mt-badge>
          <mt-button class="btn btn-blue" @click="minusScore(5)">5</mt-button>
          <mt-badge size="small">{{valuesArr[5]}}</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-black" @click="minusScore(4)">4</mt-button>
          <mt-badge size="small">{{valuesArr[4]}}</mt-badge>
          <mt-button class="btn btn-black" @click="minusScore(3)">3</mt-button>
          <mt-badge size="small">{{valuesArr[3]}}</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-white" @click="minusScore(2)">2</mt-button>
          <mt-badge size="small">{{valuesArr[2]}}</mt-badge>
          <mt-button class="btn btn-white" @click="minusScore(1)">1</mt-button>
          <mt-badge size="small">{{valuesArr[1]}}</mt-badge>
          <mt-button class="btn btn-white" @click="minusScore(0)">M</mt-button>
          <mt-badge size="small">{{valuesArr[0]}}</mt-badge>
        </div>
        <mt-cell title="总成绩" :value="total2" style="margin-top:40px;"></mt-cell>
      </div>
    </div>
    <div class="row-btn">
      <mt-button class="btn-center" type="primary" @click="registScore()">提交并进入下一组练习</mt-button>
    </div>
    <div class="row-btn">
      <mt-button class="btn-center" type="danger" @click="overAndSubmit()">提交并结束练习</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as common from "../common/common";

export default {
  name: "Regist",
  computed: {
    total2() {
      let res = 0;
      for (let i = 0; i < this.valuesArr.length; i++) {
        if (i != 11) {
          res += this.valuesArr[i] * i;
        } else {
          res += this.valuesArr[i] * 10;
        }
      }
      return res;
    }
  },
  created() {},
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      inputType: true,
      total1: "",
      //total2: 0,
      valuesArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  methods: {
    addScore(val) {
      //this.value11 = this.value11 + 1
      //this.valuesArr[val] = this.valuesArr[val] + 1
      Vue.set(this.valuesArr, val, this.valuesArr[val] + 1);
    },
    minusScore(val) {
      if (this.valuesArr[val] > 0) {
        Vue.set(this.valuesArr, val, this.valuesArr[val] - 1);
      }
    },
    registScore() {
      if (common.isEmpty(this.total1)) {
        Vue.$messagebox("提示", "请输入总成绩！");
      } else {
        this.$store.dispatch("registScoreDataAction", this.total1);
        this.total1 = "";
        Vue.$messagebox("提示", "输入成功！开始下一组练习。");
      }
    },
    overAndSubmit() {
      //this.$store.commit("overTraining");
      this.$store.dispatch("overTrainingAction");

      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
.row-score {
  margin: 20px 0 0 0;
  text-align: center;
}

.btn {
  border: 1px solid black;
  color: #000000;
  margin: 0 4px;
  width: 44px;
}

.btn-yellow {
  background-color: yellow;
}

.btn-red {
  background-color: red;
}

.btn-blue {
  background-color: blue;
}

.btn-black {
  background-color: black;
  color: white;
}

.btn-white {
  background-color: white;
}

.score-result {
  margin: 20px 0 0 0;
}

.row-result {
  margin: 20px 0 0 0;
}

.row-btn {
  margin: 20px 0 0 0;
  text-align: center;
}
</style>
