<template>
  <div>
    距离
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    靶纸
    <mt-picker :slots="slots2" @change="onValuesChange2"></mt-picker>
    <mt-button class="btn-center" type="primary" @click="gotoRegist">设定完毕，开始练习</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'Training',
    data() {
      return {
        slots: [
          {
            flex: 1,
            values: ['18米', '20米', '30米'],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex: 1
          }
        ],
        slots2: [
          {
            flex: 1,
            values: ['60靶半环', '60靶全环', '80靶半环', '80靶全环'],
            className: 'slot2',
            textAlign: 'center',
            defaultIndex: 0
          }
        ]
      }
    },
    methods: {
      onValuesChange(picker, values) {
        /*if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }*/
      },
      onValuesChange2(picker, values) {

      },
      gotoRegist() {
        this.$router.push({path: '/Regist'})
      }
    }
  }
</script>

<style scoped>
  .btn-center {
    display: block;
    margin: 40px auto 0 auto;
    width: 80%;
  }
</style>
