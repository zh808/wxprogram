//index.js
//获取应用实例
const app = getApp()
const Gdata = app.globalData
Page({
  data: {
    order_list: [
      { order_status: 'waiting', img: '../../../images/icons/waiting.png', text_: '待接单' },
      { order_status: 'picking', img: '../../../images/icons/picking.png', text_: '待接货' },
      { order_status: 'transporting', img: '../../../images/icons/transporting.png', text_: '运输中' }
    ]
  },

  onLoad: function () {
    var that = this
    setTimeout(function () {
      that.data.order_list[1].number_ = 'Gdata.waitingL'
      console.log(that.data.order_list)
    }, 5000)

  },
  onPullDownRefresh: function () {
    wx.request({
      url: getApp().globalData.root_url + '/admin-ssm/shipperMain/getWaybill.do',
      method: "GET",
      data: { shipper: getApp().globalData.user_id },
      success: res => {
        wx.stopPullDownRefresh()
        console.log('全部订单：', res)
        Gdata.waiting = res.data.wait
        Gdata.waitingL = res.data.wait.length
        Gdata.picking = res.data.receive
        Gdata.pickingL = res.data.receive.length
        Gdata.transporting = res.data.get1
        Gdata.transportingL = res.data.get1.length
      }
    })
  },
  onShow: function () {

  }
})