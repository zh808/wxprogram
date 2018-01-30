// pages/makeOrder/makeOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sender_inf: { addr: '您当前的位置', name: '点击', tel: '编辑寄件人信息' },
    receiver_inf: { addr: '您想送到哪里？', name: '请选', tel: '择您的送货地址' },
    packageWay_select: [
      { name: '门店发货', sign:'shop',pic: '../../../images/icons/store.png', intro: '16点前发货' },
      { name: '上门取货', sign:'take',pic: '../../../images/icons/user.png', intro: '取件费需与司机协商' }
    ],
    current_size: 0,
    size_select: [
      { size: '小件', price: 5, img_size: '../../../images/icons/sizeS.png', img_size_s: '../../../images/icons/sizeS_s.png' },
      { size: '中件', price: 10, img_size: '../../../images/icons/sizeM.png', img_size_s: '../../../images/icons/sizeM_s.png' },
      { size: '大件', price: 15, img_size: '../../../images/icons/sizeL.png', img_size_s: '../../../images/icons/sizeL_s.png' },
      { size: '加大', price: 20, img_size: '../../../images/icons/sizeXL.png', img_size_s: '../../../images/icons/sizeXL_s.png' },
    ],
    number_index: 0,
    number_select: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
    ]
  },

  select_packageWay: function (e) {
    this.setData({ current_packageWay: e.currentTarget.dataset.index })
  },

  select_size: function (e) {
    this.setData({ current_size: e.currentTarget.dataset.index })
  },

  number_select: function (e) {
    this.setData({ number_index: e.detail.value })
  },

  formSubmit: function (e) {
    if (this.data.current_packageWay == null) {
      console.log('请填写发货方式')
    } else {
      var order_inf= {
        line_id: this.data.line_id,
        origin: this.data.sender_inf.addr,
        terminus: this.data.receiver_inf.addr,
        shipper_name: this.data.sender_inf.name,
        shipper_phone: this.data.sender_inf.tel,
        shipper:getApp().globalData.user_id,
        receiver_name: this.data.receiver_inf.name,
        receiver_phone: this.data.receiver_inf.tel,
        type: this.data.packageWay_select[this.data.current_packageWay].sign,
        count: this.data.number_select[this.data.number_index],
        volume: this.data.size_select[this.data.current_size].size,
        unit_price: this.data.number_select[this.data.number_index],
        total_price: this.data.size_select[this.data.current_size].price * this.data.number_select[this.data.number_index],
        cut_money:'0',
        real_money: this.data.size_select[this.data.current_size].price * this.data.number_select[this.data.number_index],
        description: e.detail.value.remark
      }
      wx.navigateTo({
        url: '../confirmOrder/confirmOrder?order_inf=' + JSON.stringify(order_inf),
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ line_id: options.line_id})
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