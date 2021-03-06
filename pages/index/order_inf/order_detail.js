// pages/waybilldetail_begin/waybilldetail_begin.js
var util =require('../../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    status_waiting:false,
    waybill_id: '',
    volume: "71",
    shipper: 151597927708513079,
    origin: "安徽省亳州市蕉城区沙土镇于里行政村于里村309",
    count: 4,
    receiver_name: "李志华",
    description: "描述。。24",
    shipper_phone: 18888888888,
    receiver_phone: 18256028770,
    type: "shop",
    shipper_name: "张三"
  },
  
  cancel_order:function(){
var that = this
    wx.showModal({
      title: '提示',
      content: '正在寻找司机，您确定取消该订单？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定') 
          util.cancel_order(that.data.detail.waybill_id)
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
    if (options.order_status == 0) { this.setData({ status_waiting:true})}
    this.setData({ 
      status:options.order_status,
      detail: getCurrentPages()[getCurrentPages().length - 2].data.list[options.order_index]
      })
  },
})