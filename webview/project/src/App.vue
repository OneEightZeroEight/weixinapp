<template>
  <div id="app">
    <!-- <Xheader /> -->
    <!-- <Xcard/>
    <Xfooter/>-->
    <p>
      <a href="#" @click="photo" class="button button-round">Round Button 1</a>
    </p>
    <p>
      <a href="#" @click="record" class="button button-round">Round Button 1</a>
    </p>
    <!-- <button @click="photo">photo</button> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Xfooter from "./components/Xfooter.vue";
import Xheader from "./components/Xheader.vue";
import Xcard from "./components/Xcard.vue";

export default {
  name: "app",
  components: {
    Xfooter,
    // Xheader,
    Xcard
  },
  methods: {
    photo() {
      alert("photo");
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success(res) {
          alert(res);
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths;
        }
      });
    },
    record() {
      wx.startRecord({
        success(res) {
          const tempFilePath = res.tempFilePath;
        }
      });
      setTimeout(function() {
        wx.stopRecord(); // 结束录音
      }, 10000);
    }
  },
  mounted() {
    // web-view下的页面内
    function ready() {}
    if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
      document.addEventListener("WeixinJSBridgeReady", ready, false);
    } else {
      ready();
    }

    // 或者
    wx.miniProgram.getEnv(function(res) {
      console.log(res);
      alert(res.miniprogram);
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
