// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: getApp().globalData.root_url + '/admin-ssm/shipperWaybill/getLineAll.do',
      method: 'POST',
      success: function (res) {
         that.setData({ list: res.data }) },
      fail: function () {
        console.log('error_connection')
        that.setData({ list: [{ shipper_addr: 'error', receiver_addr: 'error' }] })
      }
    })
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
    var that=this
    wx.request({
      url: getApp().globalData.root_url + '/admin-ssm/shipperWaybill/getLineAll.do',
      method: 'POST',
      success:res=> {
        that.setData({ list: res.data })
      },
      fail: res => {
        console.log('error_connection')
        that.setData({ list: [{ shipper_addr: 'error', receiver_addr: 'error' }] })
      },
      complete: res =>{wx.stopPullDownRefresh()}
    })
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