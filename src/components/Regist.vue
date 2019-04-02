<template>
  <div>
    <mt-cell title="仅输入成绩">
      <mt-switch v-model="inputType"></mt-switch>
    </mt-cell>
    <div v-if="inputType">
      <mt-field label="总成绩" placeholder="请输入总成绩" v-model="total"></mt-field>
    </div>
    <div v-else>
      <div>
        <div class="row-score">
          <mt-button class="btn btn-yellow">10*</mt-button>
          <mt-button class="btn btn-yellow">10</mt-button>
          <mt-button class="btn btn-yellow">9</mt-button>
          <mt-button class="btn btn-red">8</mt-button>
          <mt-button class="btn btn-red">7</mt-button>
        </div>
        <div class="row-score">
          <mt-button class="btn btn-blue">6</mt-button>
          <mt-button class="btn btn-blue">5</mt-button>
          <mt-button class="btn btn-black">4</mt-button>
          <mt-button class="btn btn-black">3</mt-button>
          <mt-button class="btn btn-white">2</mt-button>
        </div>
        <div class="row-score">
          <mt-button class="btn btn-white">1</mt-button>
          <mt-button class="btn btn-white">M</mt-button>
        </div>
      </div>
      <hr>
      <div class="score-result">
        <div class="row-result">
          <mt-button class="btn btn-yellow">10*</mt-button>
          <mt-badge size="small">0</mt-badge>
          <mt-button class="btn btn-yellow">10</mt-button>
          <mt-badge size="small">0</mt-badge>
          <mt-button class="btn btn-yellow">9</mt-button>
          <mt-badge size="small">0</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-red">8</mt-button>
          <mt-badge size="small">0</mt-badge>
          <mt-button class="btn btn-red">7</mt-button>
          <mt-badge size="small">0</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-blue">6</mt-button>
          <mt-badge size="small">0</mt-badge>
          <mt-button class="btn btn-blue">5</mt-button>
          <mt-badge size="small">0</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-black">4</mt-button>
          <mt-badge size="small">0</mt-badge>
          <mt-button class="btn btn-black">3</mt-button>
          <mt-badge size="small">0</mt-badge>
        </div>
        <div class="row-result">
          <mt-button class="btn btn-white">2</mt-button>
          <mt-badge size="small">0</mt-badge>
          <mt-button class="btn btn-white">1</mt-button>
          <mt-badge size="small">0</mt-badge>
          <mt-button class="btn btn-white">M</mt-button>
          <mt-badge size="small">0</mt-badge>
        </div>
        <mt-cell title="总成绩" :value="total2" style="margin-top:40px;"></mt-cell>
      </div>
    </div>
    <div class="row-btn">
      <mt-button class="btn-center" type="primary">提交并进入下一组练习</mt-button>
    </div>
    <div class="row-btn">
      <mt-button class="btn-center" type="danger">提交并结束练习</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Regist',
    created() {

    },
    mounted() {
      window.scrollTo(0, 0)
    },
    data() {
      return {
        inputType: true,
        total1: 0,
        total2: 0,
        value10: 0,
        value9: 0,
        value8: 0,
        value7: 0,
        value6: 0,
        value5: 0,
        value4: 0,
        value3: 0,
        value2: 0,
        value1: 0,
        value0: 0
      }
    },
    methods: {}
  }
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
