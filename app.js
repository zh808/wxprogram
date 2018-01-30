//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          var d = this.globalData;//这里存储了appid、secret
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
          wx.request({
            url: l,
            method: 'GET',
            success: res => {
              this.globalData.openid = res.data.openid
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
                        this.globalData.userInfo = res.userInfo
                        wx.request({
                          url: this.globalData.root_url + '/admin-ssm/carrierLogin/getUserId.do',
                          method: 'POST',
                          header: { "Content-Type": "application/x-www-form-urlencoded" },
                          data: { open_id },
                          success: res => {
                            if (res.data.code == '0') { 
                              this.globalData.user_id = res.data.data.user_id
                              wx.request({
                                url: this.globalData.root_url + '/admin-ssm/shipperMain/getWaybill.do',
                                method: "GET",
                                data: { shipper: this.globalData.user_id },
                                success: res => {
                                  console.log('全部订单：',res)
                                  this.globalData.waiting = res.data.wait
                                  this.globalData.waitingL= res.data.wait.length
                                  this.globalData.picking = res.data.receive
                                  this.globalData.pickingL = res.data.receive.length
                                  this.globalData.transporting = res.data.get1
                                  this.globalData.transportingL = res.data.get1.length
                                }
                              })}
                            else if (res.data.code == '1') {
                              wx.request({
                                url: this.globalData.root_url + '/admin-ssm/wx/userLogin.do',
                                method: 'POST',
                                header: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: {
                                  user_name: userInfo.nickName,
                                  gender: userInfo.gender + '',
                                  open_id: open_id,
                                  avatar: userInfo.avatarUrl,
                                  app_type: 'shipper'
                                },
                                success: res => { this.globalData.user_id = res.data.data.user_id }
                              })
                            }
                            
                            
                          }
                        })
                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        if (this.userInfoReadyCallback) {
                          this.userInfoReadyCallback(res)
                        }
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
  globalData: {
    userInfo: null,
    root_url: 'http://120.78.83.191',
    appid: 'wxf5201d310eaa1f64',
    secret: '689472891e055248873095ad377794cc',
    openid: null,
    shipper: "00151597927708513079",
    user_id:null
  }
})