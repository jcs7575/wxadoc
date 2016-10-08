//image.js
Page({
  data:{
    src:"../../resources/DSC_2583_s.jpg",
    current:"../../resources/DSC_2583_s.jpg",
    imageList:["../../resources/DSC_2583_s.jpg","../../resources/DSC_3510.jpg","../../resources/DSC_5702_s.jpg","../../resources/DSC_6408.jpg","../../resources/DSC_6466-2_s.jpg","../../resources/DSC_6602_s.jpg","../../resources/DSC_6812_s.jpg"]
  },
  imageError: function(e) {
    console.log('image error', e.detail.errMsg)
  },
  chooseImage: function(e){
      var that = this;
      saveFile = function(){
        wx.saveFile({
            tempFilePath: that.data.src,
            success: function(res) {
                var savedFilePath = res.savedFilePath;
                that.setData({
                    src:savedFilePath
                });
                console.log(savedFilePath);
            }
        })
      };
      
      wx.chooseImage({
          count:1,
          sizeType: ['original'],
          sourceType: ['album', 'camera'],
          success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var tempFilePaths = res.tempFilePaths;
            that.setData({
                src: tempFilePaths[0]
            });
            console.log(that.data.src);
            //saveFile();
          }
      });
  },
  previewImage: function(e){
    // 这个 api 很奇葩，不起作用
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  }

})