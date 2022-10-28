<template>
<div>
  <div style='width: 100px;height: 80px; background-color: #fffccc; font-size: 16px;color: #000;'>223</div>
  <div style='width: 200px;height: 80px; background-color: #eeeeee; font-size: 16px;color: #000;'>223</div>
  <div style='width: 300px;height: 80px; background-color: #42b983; font-size: 16px;color: #000;'>223</div>
  <div style='width: 400px;height: 80px; background-color: #2c3e50; font-size: 16px;color: #000;'>223</div>
  <div style='width: 500px;height: 80px; background-color: #42b983; font-size: 16px;color: #000;'>223</div>
  <IButton :content="isOpen ? '退出全屏' : '全屏'" @click="handleOpen"></IButton>
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