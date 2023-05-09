import { createApp } from 'vue';
import App from './App.vue';
import 'vant/lib/index.css';
import 'lib-flexible/flexible';
import store from '@/store';


createApp(App).use(store).mount('#app')
