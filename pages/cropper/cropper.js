// pages/test/test.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    cropperOpt: {
      imgUrl: '',
      cutRatio: 0
    }
  },
  getImg() {
    this.cropper.getImg()
  },
  getImgOk(data) {
    app.globalData.cutedImg = data.detail
    wx.navigateBack({
      delta: 1
    })
  },
  cutCancel() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.warn(app)
    if (options.ratio) {
      this.setData({
        'cropperOpt.cutRatio': options.ratio
      })
    }
    console.warn('onLoad', decodeURIComponent(options.url))
    this.setData({
      'cropperOpt.imgUrl': `${decodeURIComponent(options.url)}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.cropper = this.selectComponent('.test-cropper')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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