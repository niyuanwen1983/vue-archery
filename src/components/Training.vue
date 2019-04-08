<template>
  <div>
    距离
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>靶纸
    <mt-picker :slots="slots2" @change="onValuesChange2"></mt-picker>场地
    <mt-picker :slots="slots3" @change="onValuesChange3"></mt-picker>
    <mt-button class="btn-center" type="primary" @click="gotoRegist">设定完毕，开始练习</mt-button>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Training",
  data() {
    return {
      distance: "18米",
      goalRange: "60靶半环",
      inOut: true, //true:室内;false:室外
      slots: [
        {
          flex: 1,
          values: ["18米", "20米", "30米"],
          className: "slot1",
          textAlign: "center",
          defaultIndex: 1
        }
      ],
      slots2: [
        {
          flex: 1,
          values: ["60靶", "80靶"],
          className: "slot2",
          textAlign: "center",
          defaultIndex: 0
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: ["半环", "全环"],
          className: "slot2",
          textAlign: "center"
        }
      ],
      slots3: [
        {
          flex: 1,
          values: ["室内", "室外"],
          className: "slot3",
          textAlign: "center",
          defaultIndex: 0
        }
      ]
    };
  },
  methods: {
    //https://blog.csdn.net/chenzlyan/article/details/83306603
    onValuesChange(picker, values) {
      this.distance = values;
    },
    onValuesChange2(picker, values) {
      this.goalrange = values[0] + values[1];
    },
    onValuesChange3(picker, values) {
      if (values[0] === "室内") {
        this.inOut = true;
      } else {
        this.inOut = false;
      }
    },
    gotoRegist() {
      Vue.prototype.$indexDB.openDB(Vue.prototype.$myDB, () => {
        console.log("success!");

        let l_id = Math.round(Math.random() * 10000);
        let l_datetime = new Date();
        let l_distance = this.distance;
        let l_goalrange = this.goalRange;
        let l_inout = this.inOut;

        let trainingData = [
          {
            id: l_id,
            datetime: l_datetime,
            distance: l_distance,
            goalrange: l_goalrange,
            inout: l_inout,
            scores: []
          }
        ];
        Vue.prototype.$indexDB.addData(
          Vue.prototype.$myDB.db,
          Vue.prototype.$myDB.ojstore.name,
          trainingData
        );
      });

      this.$router.push({ path: "/Regist" });
    }
  }
};
</script>

<style scoped>
.btn-center {
  display: block;
  margin: 40px auto 0 auto;
  width: 80%;
}
</style>
