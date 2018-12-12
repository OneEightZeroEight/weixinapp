//index.js
//获取应用实例
let bus = require("../../utils/bus.js")
Page({
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下路刷新")
    bus.$emit('onPullDownRefresh', 'hi')
  },
  onReachBottom: function () {
    console.log("到底了")
    bus.$emit('onReachBottom', 'hi')
  },
})
