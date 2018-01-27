// pages/index/order_inf/picking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

call:function(e){
  console.log(e)
wx.makePhoneCall({
  phoneNumber:String(e.currentTarget.dataset.carrier_phone),
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getCurrentPages()[getCurrentPages().length - 2].data.list[options.order_index])
    this.setData({
      status: options.order_status,
      detail: getCurrentPages()[getCurrentPages().length - 2].data.list[options.order_index]
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