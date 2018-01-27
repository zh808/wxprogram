// pages/waybilldetail_begin/waybilldetail_begin.js
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.order_status == 0) { this.setData({ status_waiting:true})}
    console.log(getCurrentPages()[getCurrentPages().length - 2].data.list[options.order_index])
    this.setData({ 
      status:options.order_status,
      detail: getCurrentPages()[getCurrentPages().length - 2].data.list[options.order_index] 
      })
  },
})