import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import MyLogin from './Components/MyLogin.vue';
 
createApp({})
  .component('MyLogin', MyLogin)
  .mount('#app')