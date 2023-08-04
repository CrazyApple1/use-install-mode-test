import { preFetchLib, bindVueRuntime} from 'hel-micro';
import Vue from 'vue'
bindVueRuntime({Vue});
(async function () {
  console.log("Vue:", Vue)
  const mod = await preFetchLib('remote-selection-point', { async getSubAppAndItsVersionFn() {
    // 自定义元数据获取请求
    const res = await fetch('/imap-server/selection/remote-selection-point/hel-meta.json');
    const meta = await res.json();
    return meta;
  },  skip404Sniff: true }) // 默认tomcat服务器
  console.log("mod:", mod)
  Vue.use(mod)
  // await preFetchLib('hel-tpl-remote-vue-comps');
  // await preFetchLib('remote-selection-point', { apiPrefix: 'http://unpkg.dev.hikhub.net'}) // 自定义私有服务地址
  // await preFetchLib('remote-selection-point'); // 公有服务地址
  

  // 自定义前缀
  // await preFetchLib('hel-tpl-remote-vue-comps', { apiPrefix: 'https://xxx.yyy' });


  // 调试本地开发中的远程组件
  // const enableCustom = !!window.location.port;
  // await preFetchLib('hel-tpl-remote-vue-comps', {
  //   custom: {
  //     host: 'http://localhost:7001', // 基于 web-dev-server 开发中生成产物联调
  //     // host: 'http://localhost:9001', // 基于 http-server 已构建好的产物联调
  //     enable: enableCustom,
  //   },
  // });

  import('./loadApp');
}()).catch(err => {
  import('./loadApp');
  console.error('loadApp err: ', err);
});
