//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {
    var that =this
    wx.request({
      url: getApp().globalData.root_url + '/admin-ssm/shipperMain/getWaybill.do?shipper=00151597927708513079',
      method: "GET",
      success: function (res) {
        that.setData({
          list: {
            waiting: res.data.wait,
            picking: res.data.receive,
            transporting: res.data.get1
            }
        })
      }
    })
  }
})
