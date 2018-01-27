// pages/index/order_inf/waiting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    operating_area:[
      { progress_time: '下单时间', operating_btn:'删除订单'},
      { progress_time: '接单时间', operating_btn: '查看进度' },
      { progress_time: '发车时间', operating_btn: '确认送达' }
    ]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var order_status = options.order_status
    this.setData({ order_status })
    if (order_status == 0) {
      this.setData({ list: getApp().globalData.waiting })
    }
    if (order_status == 1) {
      this.setData({ list: getApp().globalData.picking })
    }
    if (order_status == 2) {
      this.setData({ list: getApp().globalData.transporting })
    }

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