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
// 取消订单
function cancel_order(waybill_id) {
  console.log(waybill_id)
  wx.request({
    url: getApp().globalData.root_url + '/admin-ssm/shipperMain/updatePayStatus.do',
    data: { waybill_id },
    method: 'POST',
    header: { "Content-Type": "application/x-www-form-urlencoded" },
    success: res => { console.log('取消订单返回值', res) }
  })
}
// 上传图片
function uplode_file(pic) {
  wx.uploadFile({
    url: getApp().globalData.root_url + '/admin-ssm/wx/upload.do',
    filePath: pic,     //图片路径，如tempFilePaths[0]
    name: 'image',
    header: {"Content-Type": "multipart/form-data"},
    success: function (res) { console.log(res);    },
    fail: function (res) {      console.log(res);    },
    complete: function (res) {    }
  })
}

module.exports = {
  formatTime: formatTime,
  cancel_order: cancel_order,
  uplode_file: uplode_file
}
