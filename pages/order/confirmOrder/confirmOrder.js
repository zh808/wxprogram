// pages/order/confirmOrder/confirmOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  confirm_order: function () {
    wx.showLoading({ title: '正在发布订单...' })
    wx.request({
      url: getApp().globalData.root_url + '/admin-ssm/shipperWaybill/addWaybill.do',
      method: 'GET',
      data: this.data.order_inf,
      success: function () {
        wx.hideLoading()
        wx.showToast({
          title: '下单成功！',
          icon: 'success',
          duration: 1000,
          success: function () {
            setTimeout(function () { wx.switchTab({ url: '/pages/order/order/order', }) }, 1000);
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ order_inf: JSON.parse(options.order_inf) })
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