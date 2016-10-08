// api.js
//var input = [];
Page({
  // 不支持获取页面控件，需要预定义变量来存储页面控件的内容
  data:{
    input: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("onLoad")
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  add: function(){
      console.log(this.data.input);
      wx.setStorage({
        key: "testbutton",
        data: this.data.input
      });
  },
  del: function(){
      console.log("del");
      wx.clearStorage();
  },
  search: function(){
    var value = wx.getStorageSync("testbutton");
    console.log(value);
  },
  inputListener: function(e){
    this.data.input = e.detail.value;
  }
})
