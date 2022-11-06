<template>
  <div>
    <div style='width: 100px;height: 80px; background-color: #fffccc; font-size: 16px;color: #000;'>223</div>
    <div style='width: 200px;height: 80px; background-color: #eeeeee; font-size: 16px;color: #000;'>223</div>
    <div style='width: 300px;height: 80px; background-color: #42b983; font-size: 16px;color: #000;'>223</div>
    <div style='width: 400px;height: 80px; background-color: #2c3e50; font-size: 16px;color: #000;'>223</div>
    <div style='width: 500px;height: 80px; background-color: #42b983; font-size: 16px;color: #000;'>223</div>
    <IButton :text="isOpen ? '退出全屏' : '全屏'" @click="handleOpen"></IButton>
    <div ref="el" :style="style" class="box">
      <video ref="video" muted autoplay controls class="video"></video>
      <IButton :text="enabled ? '结束共享屏幕' : '开始共享屏幕'" @click="enabled = !enabled"></IButton>
    </div>
  </div>
</template>
<script lang='ts' setup>

import useFullscreen from '@/hooks/useFullscreen';
import { useDisplayMedia, useDraggable } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

const { stream, enabled } = useDisplayMedia()
const video = ref<HTMLMediaElement | null>(null)
const el = ref<HTMLElement | null>(null)

const openFullscreen = useFullscreen()
const isOpen = ref<boolean>(false)

watchEffect(() => {
  if (video.value) {
    video.value.srcObject = stream.value!
  }
})

const { style } = useDraggable(el, {
  initialValue: { x: 500, y: 100 },
})

const handleOpen = () => {
  isOpen.value = !isOpen.value
  isOpen.value ? openFullscreen.openScreenfull() : openFullscreen.closeScreenfull()
}

</script>
<style scoped lang="less">
.video {
  width: 800px;
}

.box {
  position: fixed;
}
</style>
