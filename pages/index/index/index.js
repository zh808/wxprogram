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
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + Gdata.appid + '&secret=' + Gdata.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
          wx.request({
            url: l,
            method: 'GET',
            success: res => {
              Gdata.openid = res.data.openid
              console.log('openid', res.data.openid)
              var open_id = res.data.openid
              // 获取用户信息
              wx.getSetting({
                success: res => {
                  if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                      success: res => {
                        // 可以将 res 发送给后台解码出 unionId
                        var userInfo = res.userInfo
                        Gdata.userInfo = res.userInfo
                        wx.request({
                          url: Gdata.root_url + '/admin-ssm/carrierLogin/getUserId.do',
                          method: 'POST',
                          header: { "Content-Type": "application/x-www-form-urlencoded" },
                          data: { open_id },
                          success: res => {
                            if (res.data.code == '0') {
                              console.log('已注册，use_id:', res.data.data.user_id)
                              Gdata.user_id = res.data.data.user_id
                              wx.request({
                                url: Gdata.root_url + '/admin-ssm/shipperMain/getWaybill.do',
                                method: "GET",
                                data: { shipper: Gdata.user_id },
                                success: res => {
                                  console.log('登陆完成')
                                  var LIST = this.data.order_list
                                  console.log('全部订单：', res)
                                  Gdata.waiting = res.data.wait
                                  Gdata.waitingL = res.data.wait.length
                                  LIST[0].number_ = Gdata.waitingL
                                  Gdata.picking = res.data.receive
                                  Gdata.pickingL = res.data.receive.length
                                  LIST[1].number_ = Gdata.pickingL
                                  Gdata.transporting = res.data.get1
                                  Gdata.transportingL = res.data.get1.length
                                  LIST[2].number_ = Gdata.transportingL
                                  this.setData({ order_list: LIST })
                                }
                              })
                            }
                            else if (res.data.code == '1') {
                              console.log('注册中')
                              wx.request({
                                url: Gdata.root_url + '/admin-ssm/wx/userLogin.do',
                                method: 'POST',
                                header: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: {
                                  user_name: userInfo.nickName,
                                  gender: userInfo.gender + '',
                                  open_id: open_id,
                                  avatar: userInfo.avatarUrl,
                                  app_type: 'shipper'
                                },
                                success: res => { console.log('注册成功，use_id:', res.data.data.user_id),Gdata.user_id = res.data.data.user_id }
                              })
                            }
                          }
                        })
                      }
                    })
                  }
                }
              })

            }
          })
        }
      }
    })

  },
  onPullDownRefresh: function () {
    wx.request({
      url: Gdata.root_url + '/admin-ssm/shipperMain/getWaybill.do',
      method: "GET",
      data: { shipper: Gdata.user_id },
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
  onShow:function(){
    wx.request({
      url: Gdata.root_url + '/admin-ssm/shipperMain/getWaybill.do',
      method: "GET",
      data: { shipper: Gdata.user_id },
      success: res => {
        var LIST = this.data.order_list
        console.log('onShow全部订单：', res)
        Gdata.waiting = res.data.wait
        Gdata.waitingL = res.data.wait.length
        LIST[0].number_ = Gdata.waitingL
        Gdata.picking = res.data.receive
        Gdata.pickingL = res.data.receive.length
        LIST[1].number_ = Gdata.pickingL
        Gdata.transporting = res.data.get1
        Gdata.transportingL = res.data.get1.length
        LIST[2].number_ = Gdata.transportingL
        this.setData({ order_list: LIST })
      }
    })
  }
})