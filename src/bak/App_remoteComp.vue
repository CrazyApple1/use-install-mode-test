<template>
  <div id="app">
    <div>
        <h2>name: remote-vue-componet这是加载远程组件的测试页面</h2>
        <h2>....测页面頁面已经加載成功!!!</h2>
        <div class="remote-box">
          <RemoteCompAsync name="loaded in codesandbox" />
           <selection-point-pro  :visible="true"></selection-point-pro>
        </div>
    </div>
  </div>
</template>

<script>
import { preFetchLib } from "hel-micro";
import Vue from 'vue'
export default {
  name: "App",
  components: {
    RemoteCompAsync: async () => {
       const mod = await preFetchLib('remote-selection-point', { async getSubAppAndItsVersionFn() {
      // 自定义元数据获取请求
      // const res = await fetch('http://localhost:13685/imap-server/selection/remote-selection-point-hmap/hel-meta.json'); 
      const res = await fetch('/imap-server/selection/remote-selection-point-hmap/hel-meta.json'); 
      // eslint-disable-next-line no-debugger
      debugger
      const meta = await res.json();
        return meta;
      },}) // 默认tomcat服务器
      console.log("mod:", mod)
      Vue.use(mod)
      return mod
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.remote-box{
  margin: 16px;
  padding: 8px;
  border: 1px solid red;
}
</style>