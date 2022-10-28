<template>
  <div>
    <div style='width: 100px;height: 80px; background-color: #fffccc; font-size: 16px;color: #000;'>223</div>
    <div style='width: 200px;height: 80px; background-color: #eeeeee; font-size: 16px;color: #000;'>223</div>
    <div style='width: 300px;height: 80px; background-color: #42b983; font-size: 16px;color: #000;'>223</div>
    <div style='width: 400px;height: 80px; background-color: #2c3e50; font-size: 16px;color: #000;'>223</div>
    <div style='width: 500px;height: 80px; background-color: #42b983; font-size: 16px;color: #000;'>223</div>
    <IButton :content="isOpen ? '退出全屏' : '全屏'" @click="handleOpen"></IButton>
    <StaticFile src="http://m704.music.126.net/20221029022607/28ddf0f4594595d03bf502eb2c0ff029/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096422441/b511/294f/355f/a306c5df86456394ff9d9fb1f7d3e802.m4a?authSecret=000001841fc138e515430aaba050ed19.m4a"
                    type="music" controls></StaticFile>
  </div>
</template>
<script lang='ts' setup>

import useFullscreen from '@/hooks/useFullscreen';
import { ref } from 'vue';

const openFullscreen = useFullscreen()
const isOpen = ref<boolean>(false)

const handleOpen = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    openFullscreen.openScreenfull()
  } else {
    openFullscreen.closeScreenfull()
  }
}
</script>
<style scoped lang="less">
button {
  height: 30px;
  border: 1px double #000;
  padding: 0 10px;
  font-size: 16px;
}
</style>