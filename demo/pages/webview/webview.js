Page({
  data: {
    show: false
  },
  onClose() {
    this.setData({ show: false });
  },
  toggle(){
    this.setData({ show: !this.data.show });
  }
});