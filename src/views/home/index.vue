<template>

  <div v-for="item in classList" :key="item" :class="`content section wow animate__animated ${item}`"
                  data-wow-duration="2s" data-wow-offset="1" data-wow-iteration="1">
    <img v-lazy="src" />
  </div>

</template>
<script lang='ts' setup>
import src from '@/assets/1659087098571.jpg';
import { onMounted, reactive } from 'vue';
import WOW from "wow.js";
const classList = reactive([
  'animate__fadeInLeft',
  'animate__fadeInRight',
  'animate__backInLeft',
  'animate__backInRight',
  'animate__backInUp',
  'animate__fadeInUpBig',
  'animate__flipInY ',
  'animate__rotateInDownLeft',
  'animate__rotateInDownRight',
  'animate__rotateInUpRight',
  'animate__zoomInDown',
])
onMounted(() => {
  let wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {
      console.log(box);
    },
    scrollContainer: null,
    resetAnimation: true,
  })
  wow.init()
})

</script>
<style scoped lang="less">
.content {
  width: 800px;
  height: 500px;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style> 