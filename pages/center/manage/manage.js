// pages/manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Patientia: true,
    warning_text: true,
    warning_tel:true
  },
  Patientia: function (e) {
    this.setData({
      Patientia: !this.data.Patientia
    })
   },
  data: {
    Patientia: false,
    warning_text: false,
    warning_tel: true
  },
  Patientia: function (e) {
    this.setData({
      Patientia: !this.data.Patientia
    })
  },
  toast: function () {
    wx.navigateTo({
      url: '../redact/redact'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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