// pages/center/redact/redact.js
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
    var receiver_name = e.detail.value._name
    var receiver_phone = e.detail.value._tel
    var receiver_addr = e.detail.value._addr
    if (receiver_name !== '' && receiver_phone !== '' && receiver_addr !== '') {
      if (receiver_phone[10]) {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];
        var addr_inf = { name: receiver_name, tel: receiver_phone, addr: receiver_addr }
        if (this.data.save == true) {
          wx.request({
            url: getApp().globalData.root_url + '/admin-ssm/shipperWaybill/addAddr.do',
            method: "GET",
            data: {
              user_id: '151583386374954925',
              default: 'no',
              receiver_name: receiver_name,
              receiver_phone: receiver_phone,
              receiver_addr: receiver_addr
            },
            success: function () { console.log('保存地址信息成功！') }
          })
        }
        if (this.data.type == 'sender') {
          prevPage.setData({ sender_inf: addr_inf })
          wx.navigateBack({})
        }
        if (this.data.type == 'receiver') {
          prevPage.setData({ receiver_inf: addr_inf })
          wx.navigateBack({})
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
    this.setData({ type: options.type })
  }
})