const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// HTTP请求
function httpUrl(url, data) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://120.78.83.191'+url,
      data: data,
      method: "POST",
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      success: res => { resolve(res) },
      fail: res => { reject(res) }
    })
  })
}

// 取消订单
function cancel_order(waybill_id) {
  wx.request({
    url: getApp().globalData.root_url + '/admin-ssm/shipperMain/updatePayStatus.do',
    data: { waybill_id },
    method: 'POST',
    header: { "Content-Type": "application/x-www-form-urlencoded" },
    success: res => {
      console.log('取消订单返回值：', res)
      wx.showToast({
        title: '取消订单成功',
        icon: 'success',
        duration: 2000,
        success: function () {
          setTimeout(function () { wx.switchTab({ url: '/pages/index/index/index', }) }, 2000);
        }
      })

    }
  })
}
// 上传图片
function uplode_file(pic) {
  return new Promise(function (resolve, reject) {
    wx.uploadFile({
      url: getApp().globalData.root_url + '/admin-ssm/wx/upload.do',
      filePath: pic,     //图片路径，如tempFilePaths[0]
      name: 'image',
      header: { "Content-Type": "multipart/form-data" },
      success: res => { resolve(res) },
      fail: res => { reject(res) }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  cancel_order: cancel_order,
  uplode_file: uplode_file,
  httpUrl: httpUrl
}
