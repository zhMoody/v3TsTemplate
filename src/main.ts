import loadGif from '@/assets/load.gif';
import '@/router/permission';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import lazyPlugin from 'vue3-lazy';
import App from './App.vue';
import { components, plugins } from './components';
import router from './router';
import store from './stores';
import {createPinia} from 'pinia'
const pinia = createPinia()
// css
import 'animate.css';
import './styles/reset.less';

const app = createApp(App);
app.use(store);
app.use(pinia);
app.use(router);
app.use(lazyPlugin, {
  loading: loadGif,
  error: loadGif
})
// @ts-ignore
app.mount('#app');

// 加载全局组件
components.forEach((component) => {
  app.component(component.name, component);
});

// 加载全局插件
plugins.forEach((plugin) => {
  app.use(plugin);
});
