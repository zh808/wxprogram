// pages/Q&A/Q&A.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    warning_text: true,
    swith_area: 0,
    question_type_select: -1,
    question_type_list: ['整车', '拼车', '同城', '快递', '海运', '空运', '跑腿', '综合'],
    list: [
      { question_type: '拼车', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type1.png', question_time: '12-22 10:20' },
      { question_type: '整车', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type2.png', question_time: '12-22 10:20' },
      { question_type: '海运', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type3.png', question_time: '12-22 10:20' },
      { question_type: '同城', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type4.png', question_time: '12-22 10:20' },
      { question_type: '空运', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type5.png', question_time: '12-22 10:20' },
      { question_type: '快递', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type6.png', question_time: '12-22 10:20' },
      { question_type: '综合', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type7.png', question_time: '12-22 10:20' },
      { question_type: '跑腿', question_desc: '问题问题问题问题......', images: '../../images/icons/question_type8.png', question_time: '12-22 10:20' }
    ]
  },

  swith_tab: function (e) { this.setData({ swith_area: e.currentTarget.dataset.index }) },

  question_type_select: function (e) {
    this.setData({ question_type_select: e.currentTarget.dataset.question_type_index })
  },
  chooseImageTap: function (e) {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#28b6ff",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) { _this.chooseWxImage('album', e.currentTarget.dataset.index) }
          else if (res.tapIndex == 1) { _this.chooseWxImage('camera', e.currentTarget.dataset.index) }
        }
      }
    })
  },
  chooseWxImage: function (type, pic_index) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        if (pic_index == 0) { _this.setData({ pic0: res.tempFilePaths[0] }) }
        if (pic_index == 1) { _this.setData({ pic1: res.tempFilePaths[0] }) }
        if (pic_index == 2) { _this.setData({ pic2: res.tempFilePaths[0] }) }
      }
    })
  },
  formSubmit: function (e) {
    var that = this; var pic0 = null; var pic1 = null; var pic2 = null
    if (this.data.question_type_select !== -1) {
      this.setData({ warning_text: true })
      if (this.data.pic0) { util.uplode_file(this.data.pic0).then(res => { pic0 = res.data }) }
      if (this.data.pic1) { util.uplode_file(this.data.pic1).then(res => { pic1 = res.data }) }
      if (this.data.pic2) { util.uplode_file(this.data.pic2).then(res => { pic2 = res.data }) }
      else {
        wx.showLoading({
          title: '正在提交问题',
          success: res => {
            var images = []
            images.push(pic0)
            console.log(images)
            var dt = {
              question_type: this.data.question_type_list[this.data.question_type_select],
              question_desc: e.detail.value.write_question,
              images: images,
              user_id: getApp().globalData.user_id
            }
            console.log(dt)
            util.httpUrl('/admin-ssm/shipperMain/addQuestion.do', dt).then(res => {
              console.log('提交问题成功:',res)
              wx.hideLoading()
              that.setData({ swith_area: 1 })
            })
          }
        })
      }
    }
    else { this.setData({ warning_text: false }) }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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