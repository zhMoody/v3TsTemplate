<template>
  <div class='basic-layout'>
    <basic-header />
    <div>
      <router-view v-slot='{ Component, route }'>
        <keep-alive>
          <transition :enter-active-class='`animate__animated ${route.meta.transition}`'>
            <component :is='Component' v-if='route.meta.keepAlive'></component>
          </transition>
        </keep-alive>
        <transition :enter-active-class='`animate__animated ${route.meta.transition}`'>
          <component :is='Component' v-if='!route.meta.keepAlive'></component>
        </transition>
      </router-view>
      <basic-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
// import BasicHeader from './components/BasicHeader.vue';
// import BasicFooter from './components/BasicFooter.vue';
import { defineAsyncComponent } from 'vue';

const BasicHeader = defineAsyncComponent(() => import('./components/BasicHeader.vue'));
const BasicFooter = defineAsyncComponent(() => import('./components/BasicFooter.vue'));

// export default defineComponent({
//   name: 'BasicLayout',
//   components: { BasicHeader, BasicFooter },
// });
</script>

<style>
.basic-layout {
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
