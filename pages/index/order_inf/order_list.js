// pages/index/order_inf/waiting.js
var util = require('../../../utils/util.js')
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

  cancel_order: function (e) {
    var that = this
    wx.showModal({
      title: '提示',
      content: '正在寻找司机，您确定取消该订单？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          util.cancel_order(e.currentTarget.dataset.waybill_id)
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var order_status = options.order_status
    this.setData({ order_status })
    if (order_status == 0) {
      wx.setNavigationBarTitle({title: '待接单'})
      this.setData({ list: getApp().globalData.waiting })
    }
    if (order_status == 1) {
      wx.setNavigationBarTitle({ title: '待接货' })
      this.setData({ list: getApp().globalData.picking })
    }
    if (order_status == 2) {
      wx.setNavigationBarTitle({ title: '运输中' })
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
          wx.request({
            url: getApp().globalData.root_url + '/admin-ssm/shipperMain/getWaybill.do',
            method: "GET",
            data: { shipper: getApp().globalData.user_id },
            success: res => {
              wx.stopPullDownRefresh()
              console.log('全部订单：', res)
              getApp().globalData.waiting = res.data.wait
              getApp().globalData.picking = res.data.receive
              getApp().globalData.transporting = res.data.get1
            }
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