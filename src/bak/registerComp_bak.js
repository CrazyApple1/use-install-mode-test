import Vue from 'vue';
import HUI from 'hui';
import 'hui/lib/hui.css';

import '@hui/svg-icon/lib/svg-icon.css'
import icons from '@hui/svg-icon'
for (const icon of icons) {
  Vue.component(icon.name, icon)
}
import himapvue from 'hi-map-vue';
import 'hi-map-vue/lib/style.css';
Vue.use(HUI);
Vue.use(himapvue);