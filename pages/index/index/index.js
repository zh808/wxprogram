//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  order_list:[
    { order_status: 'waiting', img:'../../../images/icons/waiting.png',text_:'待接单'},
    { order_status: 'picking', img:'../../../images/icons/picking.png',text_:'待接货'},
    { order_status: 'transporting', img:'../../../images/icons/transporting.png',text_:'进行中'}
  ]
  },

  onLoad: function () {
    var that =this
   
  }
})
