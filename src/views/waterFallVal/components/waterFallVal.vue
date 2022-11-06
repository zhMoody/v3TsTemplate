<template>
  <div class="wraps"  :style="{'margin-left':`${(xWidth - width * column) / 2 + 10}px`}" >
    <div :style="{height:item.height+'px',background:item.background,left:item.left+'px',top:item.top+'px'}"
         v-for="item in waterList" :key="item" class="items">
      <img class="itemImg" :src="item.url || 'https://img.jbzj.com/file_images/article/202201/202212592306065.jpg?202202592324'" alt="">
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, onUnmounted, reactive, ref} from 'vue';
import {useFooterStore} from "@/stores/footer";

const props = defineProps<{
  list: any[]
}>()
const waterList = reactive<any[]>([])
const heightList = reactive<number[]>([])
const xWidth = ref<number>(document.body.clientWidth)
const width = ref<number>(320)
const column = ref<number>(Math.floor(xWidth.value / width.value))
console.log()
const store = useFooterStore()
const init = () => {
  store.setIsShow(false)
  for (let i = 0; i < props.list.length; i++) {
    if (i < column.value) {
      props.list[i].left = i * width.value
      props.list[i].top = 20
      waterList.push(props.list[i])
      heightList.push(props.list[i].height)
    } else {
      let current = heightList[0]
      let index = 0
      heightList.forEach((h, i) => {
        if (current > h) {
          current = h
          index = i
        }
      })
      props.list[i].top = current + 40
      props.list[i].left = index * width.value
      heightList[index] = heightList[index] + props.list[i].height + 20
      waterList.push(props.list[i])
    }
  }

}
const handleResize = () => {
  xWidth.value = document.body.clientWidth
  column.value = Math.floor(xWidth.value / width.value)
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
  init()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  store.setIsShow(true)
})
</script>
<style scoped lang="less">
.wraps {
  position: relative;

  .items {
    position: absolute;
    width: 300px;
    .itemImg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
