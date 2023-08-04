<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      below is a remote vue comp emitted by hel-micro
      <a href="https://tnfe.github.io/hel/" target="_blank" rel="noopener"
        >learn hel-micro</a
      >.
    </p>
    <RemoteCompAsync name="loaded in codesandbox" />
  </div>
</template>

<script>
// https://github.com/hel-eco/hel-tpl-remote-vue-comp
import { preFetchLib } from "hel-micro";

export default {
  name: "HelloWorld",
  components: {
    RemoteCompAsync: async () => {
      // const mod = await preFetchLib("remote-selection-point", "0.0.1-alpha.3");
      // const mod = await preFetchLib("hel-tpl-remote-vue-comps");
      // const mod = await preFetchLib(
      //   "hel-tpl-remote-vue3-comps-by-vite",
      //   "1.0.4"
      // );
      // console.log("mod", mod);
      // return mod.App;
      const mod = await preFetchLib('remote-selection-point', { async getSubAppAndItsVersionFn() {
      // 自定义元数据获取请求
      const res = await fetch('http://10.20.84.13:8090/remoteLib/remote-selection-point/hel-meta.json');
      const meta = await res.json();
        return meta;
      },}) // 默认tomcat服务器
      console.log("mod:", mod)
      return mod
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
