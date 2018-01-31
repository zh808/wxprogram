// pages/order/makeAddress/makeAddress.js
const Gdata = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    save: true,
    warning_text: true,
    warning_tel: true
  },

  save: function (e) {
    this.setData({
      save: !this.data.save
    })
  },

  writeAddress: function (e) {
    this.setData({ warning_text: true })
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    var _name = e.detail.value._name
    var _phone = e.detail.value._tel
    var _addr = e.detail.value._addr
    if (_name !== '' && _phone !== '' && _addr !== '') {
      if (_phone[10]) {
        if (this.data.shipper_Y) {
          if (this.data.save == true) {
            var _addr_A = this.data.line_inf.begin_province + this.data.line_inf.begin_city + this.data.line_inf.begin_district + _addr
            var addr_inf = { name: _name, tel: _phone, addr: _addr_A }
            prevPage.setData({ shipper_inf: addr_inf })
            wx.navigateBack({})
            wx.request({
              url: Gdata.root_url + '/admin-ssm/shipperWaybill/addAddr.do',
              method: "GET",
              data: {
                user_id: Gdata.user_id + '',
                default: 'no',
                receiver_name: _name,
                receiver_phone: _phone,
                receiver_addr: _addr_A
              },
              success: function () { console.log('保存地址信息成功！') }
            })
          }
        }
        if (this.data.receiver_Y) {
          if (this.data.save == true) {
            var _addr_A = this.data.line_inf.end_province + this.data.line_inf.end_city + this.data.line_inf.end_district + _addr
            var addr_inf = { name: _name, tel: _phone, addr: _addr_A }
            prevPage.setData({ receiver_inf: addr_inf })
            wx.navigateBack({})
            wx.request({
              url: Gdata.root_url + '/admin-ssm/shipperWaybill/addAddr.do',
              method: "GET",
              data: {
                user_id: Gdata.user_id + '',
                default: 'no',
                receiver_name: _name,
                receiver_phone: _phone,
                receiver_addr: _addr_A
              },
              success: function () { console.log('保存地址信息成功！') }
            })
          }
        }
      }
      else { this.setData({ warning_text: true, warning_tel: false }) }
    }
    else { this.setData({ warning_text: false, warning_tel: true }) }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type == 'shipper') { this.setData({ shipper_Y: true }) }
    if (options.type == 'receiver') { this.setData({ receiver_Y: true }) }
    this.setData({ line_inf: Gdata.lines[options.line] })
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