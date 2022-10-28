<template>
  <main class="main">
    <section class="home">
      <div class="home__container container">
        <div class="home__data">
          <h1 class="home__title">页面丢失</h1>
          <p class="home__description">
            您要寻找的页面不存在<br> 请尝试重新搜索
          </p>
          <p class="home__description">{{ countdown }} 秒后返回首页...</p>
        </div>

        <div class="home__img">
          <img :src="errImg" alt="">
          <div class="home__shadow"></div>
        </div>
      </div>

    </section>
  </main>
</template>

<script lang="ts" setup>
import errImg from '@/assets/ghost-img.png';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const countdown = ref(3);

const countdownInterval = setInterval(() => {
  countdown.value -= 1;
  if (countdown.value === 0) {
    router.push('/');
    clearInterval(countdownInterval);
  }
}, 1000);
</script>

<style scoped lang="less">
.main {
  overflow: hidden;
}

.home {
  background-color: var(--c-bg-body);
  padding: 144px 0 32px;
  height: 100vh;
  display: grid;
}

.home__container {
  display: flex;
  align-content: center;
  justify-content: space-around;
}

.home__data {
  text-align: center;
}

.home__title {
  color: var(--c-text-primary);
  font-size: 80px;
  margin: 12px 0;
}

.home__description {
  font-size: 20px;
  font-weight: 500;
}

.home__img {
  justify-content: center;

  img {
    max-width: 600px;
    height: auto;
    animation: floaty 1.8s infinite alternate;
  }
}

.home__shadow {
  width: 130px;
  height: 24px;
  background-color: var(--c-text-primary);
  margin: 0 auto;
  border-radius: 50%;
  filter: blur(7px);
  animation: shadow 1.8s infinite alternate;
}

/* Animate ghost */
@keyframes floaty {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(15px);
  }
}

@keyframes shadow {
  0% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(.85, .85);
  }
}
</style>