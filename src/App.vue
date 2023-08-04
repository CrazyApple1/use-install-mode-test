<template>
  <div id="app">
    <div>
        <h2>name: remote-vue-componet这是加载远程组件的测试页面</h2>
        <h2>....测页面頁面已经加載成功!!!</h2>
        <div class="remote-box">
            <!-- <remote-comp :name="測試"></remote-comp> -->
              <selection-point-pro  :visible="true" :cTgt="tgt" :mapConfig="mapConfig"></selection-point-pro>
        </div>
    </div>
  </div>
</template>

<script>
// https://github.com/hel-eco/hel-tpl-remote-vue-comp
// import Vue from 'vue'
// import comps from "remote-selection-point";
// console.log("comps：", comps)
// Vue.use(comps)
// import comps from "hel-tpl-remote-vue-comps";
export default {
  name: "App",
  components: {
    // RemoteComp: comps.App, // hi, remote component
  },
  data(){
    return {
      tgt: 'TGT-831-1-C7F6DD2D51C943FD91A670082F96A24D-kQZcQn5C0vG3Rsh0c0ENWtFnoDrLBksfFGpvxygtbNCkUJGMn1-cas',
      mapConfig:{
        hmapServerUrl: 'http://10.19.133.194/hmap-server/conf/hmap/hmap-core.js',
        hmapServer2dUrl: 'http://10.19.133.194/hmap-server/conf/hmap/hmap-core.js', 
      }
    }
  },
  mounted(){
    console.log("hello world!")
  }
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