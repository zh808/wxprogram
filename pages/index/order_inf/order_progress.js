// pages/index/order_inf/picking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
avatar
    :
    "http://img4.imgtn.bdimg.com/it/u=105283187,2954621639&fm=27&gp=0.jpg",
begin_time
    :
    "2018-01-16 14:49:53",
carrier
    :
    "151583295083959452",
carrier_avatar
    :
    "http://img4.imgtn.bdimg.com/it/u=105283187,2954621639&fm=27&gp=0.jpg",
carrier_license_plate
    :
    "京A88888",
carrier_name
    :
    "张三-open",
carrier_phone
    :
    18888888888,
count
    :
    4,
description
    :
    "描述。。18",
get_type
    :
    "take",
line_id
    :
    "201700100003",
origin
    :
    "湖北省武汉市江岸区五福路82号5楼1号",
pay_status
    :
    "2",
pay_way
    :
    "2",
real_money
    :
    80,
receive_time
    :
    "2018-01-26 21:15:36",
receiver_name
    :
    "王浩",
receiver_phone
    :
    15551350991,
shipper_name
    :
    "查婷婷",
shipper_phone
    :
    "18855162760",
terminus
    :
    "安徽省凤阳县红心镇乌罗村罗东队26号",
truck_desc
    :
    "拖拉机型",
volume
    :
    "小件",
waybill_id
    :
    "151583386203782593"}
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