//app.js
App({
  onLaunch: function () {
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("获取用户信息:")
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          console.log('aaa')
          wx.authorize({
          scope: 'scope.userInfo',
          success:()=>{console.log('ssss')},
           fail: () => { console.log('ffff') }
        })}
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
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
  },
  globalData: {
    userInfo: null,
    root_url: 'http://120.78.83.191',
    appid: 'wxf5201d310eaa1f64',
    secret: '689472891e055248873095ad377794cc',
    openid: null,
    shipper: "00151597927708513079",
    user_id: null
  }
})