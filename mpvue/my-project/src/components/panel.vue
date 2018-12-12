<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <a
        :key="index"
        v-for="(n,index) in news"
        href="/pages/logs/main"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="n.mblog.bmiddle_pic" alt>
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{n.mblog.created_at}}</h4>
          <p class="weui-media-box__desc">{{n.mblog.text}}</p>
        </div>
      </a>
    </div>
    <div class="weui-panel__ft">
      <a @click="loadMore" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      news: []
    };
  },
  methods: {
    loadMore() {
      store.commit("toggleLoading", true);
      var that = this;
      console.log(1111);
      wx.request({
        url: "http://localhost:3000/", // 仅为示例，并非真实的接口地址
        data: {
          x: "",
          y: ""
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        success(res) {
          store.commit("toggleLoading", false);
          console.log(res.data);
          that.news = that.news.concat(res.data.data.cards);
        }
      });
    }
  },
  created() {
    console.log(store);
    this.loadMore();
  }
};
</script>

