<template>
  <div v-for="item in classList" :key="item" :class="`content section wow animate__animated ${item}`"
                  data-wow-duration="2s" data-wow-offset="1" data-wow-iteration="1">
    <img v-lazy="src" />
  </div>
  <div ref="el" :style="style" class="box">
    拖动我试试 x:{{ x }}, y:{{ y }}
  </div>
</template>
<script lang='ts' setup>
import src from '@/assets/1659087098571.jpg';
import { useDraggable } from '@vueuse/core';
import { onMounted, reactive, ref } from 'vue';
import WOW from "wow.js";

const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})

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

.box {
  position: fixed;
  background-color: pink;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  border-radius: 20px;
  user-select: none;
}
</style> 