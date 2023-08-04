import Vue from 'vue';
// import HUI from 'hui';
import 'hui/lib/hui.css';

import '@hui/svg-icon/lib/svg-icon.css'
import icons from '@hui/svg-icon'
for (const icon of icons) {
  Vue.component(icon.name, icon)
}
import himapvue from 'hi-map-vue';
import 'hi-map-vue/lib/style.css';
// import 'remote-selection-point/lib/selection-point-pro.css'
// import remoteSelectionPoint from 'remote-selection-point/lib/selection-point-pro.umd.min.js'
// Vue.use(HUI);
Vue.use(himapvue);
// Vue.use(remoteSelectionPoint);
import syncTree from '@hui-pro/sync-tree';
import '@hui-pro/sync-tree/theme/index.scss';
import Page from '@hui-pro/page'
import Layout from '@hui-pro/layout'
import Empty from '@hui-pro/empty'
Vue.use(syncTree);
Vue.use(Page)
Vue.use(Layout)
Vue.use(Empty)