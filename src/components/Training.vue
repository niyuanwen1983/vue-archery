<template>
  <div>
    距离
    <mt-picker :slots="slots" value-key="name" @change="onValuesChange"></mt-picker>靶纸
    <mt-picker :slots="slots2" @change="onValuesChange2"></mt-picker>场地
    <mt-picker :slots="slots3" @change="onValuesChange3"></mt-picker>
    <mt-button
      class="btn-center"
      type="primary"
      @click="gotoRegist"
      v-if="!this.$store.state.isTraining"
    >设定完毕，开始练习</mt-button>
    <mt-button class="btn-center" type="danger" @click="doRegist" v-else>登录成绩</mt-button>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";

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
          //values: ["18米", "20米", "30米"],
          values: [
            {
              index: 0,
              code: "0",
              name: "18米"
            },
            {
              index: 1,
              code: "1",
              name: "20米"
            },
            {
              index: 2,
              code: "2",
              name: "30米"
            }
          ],
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
    ...mapActions(["doTrainingAction", "initCurrentDataAction"]),
    onValuesChange(picker, values) {
      this.distance = values[0].name;
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
      //this.$store.dispatch("doTrainingAction");
      this.doTrainingAction();

      Vue.prototype.$indexDB.openDB(Vue.prototype.$myDB, () => {
        let l_id = Math.round(Math.random() * 10000);
        let l_datetime = new Date();
        let l_distance = this.distance;
        let l_goalrange = this.goalRange;
        let l_inout = this.inOut;

        let tempData = {
          id: l_id,
          datetime: l_datetime,
          distance: l_distance,
          goalrange: l_goalrange,
          inout: l_inout,
          scores: []
        };

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

        //写入vuex
        //this.$store.dispatch("initCurrentDataAction", tempData);
        this.initCurrentDataAction(tempData);

        //写入indexeddb数据库
        Vue.prototype.$indexDB.addData(
          Vue.prototype.$myDB.db,
          Vue.prototype.$myDB.ojstore.name,
          trainingData
        );
      });

      this.$router.push({ path: "/Regist" });
    },
    doRegist() {
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
