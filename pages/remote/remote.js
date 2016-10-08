//remote.js
var ghRes = "";
Page({
  data:{
    githubRes:ghRes
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  getData: function(e){
      var that = this;
      executeData = function(res){
        for(rs in res.data){
          ghRes = ghRes + "\n" +rs + ":" + res.data[rs];
        }
        console.log(ghRes);
        that.setData({
          githubRes:ghRes
        });
      };
      wx.request({
        url: 'https://api.github.com/users/jcs7575',
        data: {
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res){
            console.log("succ");
            executeData(res);
        },
        fail: function(res){
          console.log(res.statusCode);
        }
      });
  }
})