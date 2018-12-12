let bus = require("../../utils/bus.js")
Page({
  data: {
  },
  onPullDownRefresh: function () {
    console.log("下路刷新")
    bus.$emit('onPullDownRefresh', 'hi')
  },
  onReachBottom: function () {
    console.log("到底了")
    bus.$emit('onReachBottom', 'hi')
  },
})
