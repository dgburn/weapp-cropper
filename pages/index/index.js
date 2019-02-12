const app = getApp()

// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    cropperOpt: {
      imgUrl: ''
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onShow() {
    console.warn('app.globalData.cutedImg', app.globalData.cutedImg)
    this.setData({
      src: app.globalData.cutedImg
    }, () => {
      // app.globalData.cutedImg = ''
    })
  },
  cutImgUrl() {
    wx.navigateTo({
      url: `/pages/cropper/cropper?url=${encodeURIComponent('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549964140814&di=564c1289869d1dfc3325c15285b91b20&imgtype=0&src=http%3A%2F%2Fp1.so.qhmsg.com%2Ft01b233ba201511ff86.jpg')}`
    })
  },
  cutImgLocal() {
    wx.navigateTo({
      url: `/pages/cropper/cropper?url=${encodeURIComponent('/images/test.jpeg')}`
    })
  },
  cutImgChoose(e) {
    console.warn(e)
    const ratio = e.currentTarget.dataset.mode
    wx.chooseImage({
      count: 1,
      success(res) {
        console.warn(res)
        wx.navigateTo({
          url: `/pages/cropper/cropper?url=${encodeURIComponent(res.tempFilePaths[0])}&ratio=${ratio}`
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})