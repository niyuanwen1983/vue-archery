<template>
  <div>
    10环
    <mt-range
      v-model="value10"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    9环
    <mt-range
      v-model="value9"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    8环
    <mt-range
      v-model="value8"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    7环
    <mt-range
      v-model="value7"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    6环
    <mt-range
      v-model="value6"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    5环
    <mt-range
      v-model="value5"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    4环
    <mt-range
      v-model="value4"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    3环
    <mt-range
      v-model="value3"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    2环
    <mt-range
      v-model="value2"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    1环
    <mt-range
      v-model="value1"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    脱靶
    <mt-range
      v-model="value0"
      :min="0"
      :max="10"
      :step="1">
      <div slot="start">0</div>
      <div slot="end">10</div>
    </mt-range>
    <mt-cell title="总成绩" value="44" style="margin-top:40px;"></mt-cell>
  </div>
</template>

<script>
  export default {
    name: 'Regist',
    data() {
      return {
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
</style>
