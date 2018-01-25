// pages/Q&A/Q&A.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swith_area: 0,
    question_type_select:-1,
    list:[
      { question_type: '拼车', question_desc: '问题问题问题问题......', images: '../../images/icons/拼@2x.png', question_time:'12-22 10:20'},
      { question_type: '整车', question_desc: '问题问题问题问题......', images: '../../images/icons/整@2x.png', question_time: '12-22 10:20' },
      { question_type: '海运', question_desc: '问题问题问题问题......', images: '../../images/icons/海@2x.png', question_time: '12-22 10:20' },
      { question_type: '同城', question_desc: '问题问题问题问题......', images: '../../images/icons/同@2x.png', question_time: '12-22 10:20' },
      { question_type: '空运', question_desc: '问题问题问题问题......', images: '../../images/icons/空@2x.png', question_time: '12-22 10:20' },
      { question_type: '快递', question_desc: '问题问题问题问题......', images: '../../images/icons/快@2x.png', question_time: '12-22 10:20' },
      { question_type: '综合', question_desc: '问题问题问题问题......', images: '../../images/icons/综@2x.png', question_time: '12-22 10:20' },
      { question_type: '跑腿', question_desc: '问题问题问题问题......', images: '../../images/icons/跑@2x.png', question_time: '12-22 10:20' }
      ]
  },

  swith_tab: function (e) { this.setData({ swith_area: e.currentTarget.dataset.index }) },

  question_type_select: function (e) { 
    this.setData({ question_type_select: e.currentTarget.dataset.question_type_index})
    },

  formSubmit:function(e){
    if (this.data.question_type_select!==-1){
      this.setData({ swith_area:1})
    }
    else{console.log("选择type")}
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