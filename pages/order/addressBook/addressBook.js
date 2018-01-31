// pages/order/sender/sender.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  choose_item: function (e) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    var current_addr = this.data.list[e.currentTarget.dataset.index];
    var addr_inf = { name: current_addr.receiver_name, tel: current_addr.receiver_phone, addr: current_addr.receiver_addr}
    if (this.data.type == 'shipper') {
      prevPage.setData({ shipper_inf: addr_inf })
      wx.navigateBack({})
    }
    if (this.data.type == 'receiver') {
      prevPage.setData({ receiver_inf: addr_inf })
      wx.navigateBack({})
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ type: options.type })
    var that = this
    wx.request({
      url: getApp().globalData.root_url +'/admin-ssm/shipperWaybill/getAddrList.do',
      data: { user_id:getApp().globalData.user_id},
      method: 'GET',
      success: res=> { that.setData({ list: res.data }) },
      fail: res=> {
        console.log('err_connection')
        that.setData({ list: [{ receiver_name: 'err', receiver_addr: 'err' }] })
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