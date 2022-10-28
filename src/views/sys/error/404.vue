<script lang="ts" setup>
import router from '@/router/index';
import { ref } from 'vue';

const countdown = ref(3);

const countdownInterval = setInterval(() => {
  countdown.value -= 1;
  if (countdown.value === 0) {
    router.push('/');
    clearInterval(countdownInterval);
  }
}, 1000);
</script>

<template>
  <div>
    <h1>404</h1>
    <p>{{ countdown }} seconds after the jump...</p>
  </div>
</template>
