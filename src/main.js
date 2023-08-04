import { preFetchLib, bindVueRuntime } from "hel-micro";
import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
console.log("use-install-mode:", Vue.prototype);
bindVueRuntime({ Vue });
// (async function () {
//   const mod = await preFetchLib('remote-selection-point', { async getSubAppAndItsVersionFn() {
//     // 自定义元数据获取请求
//     const res = await fetch('/imap-server/selection/remote-selection-point/hel-meta.json');
//     const meta = await res.json();
//     return meta;
//   },  skip404Sniff: true }) // 默认tomcat服务器
//   Vue.use(mod)
//   import('./loadApp');
// }()).catch(err => {
//   import('./loadApp');
//   console.error('loadApp err: ', err);
// });
(async function () {
  const mod = await preFetchLib("remote-selection-point", {
    // async getSubAppAndItsVersionFn() {
    //   // 自定义元数据获取请求
    //   const res = await fetch(
    //     "/imap-server/selection/remote-selection-point/hel-meta.json"
    //   );
    //   const meta = await res.json();
    //   return meta;
    // },
    custom: {
      host: "http://localhost:7001",
      enable: true,
    },
    skip404Sniff: true,
  }); // 默认tomcat服务器
  Vue.use(mod);
  import("./loadApp");
})().catch((err) => {
  import("./loadApp");
  console.error("loadApp err: ", err);
});
