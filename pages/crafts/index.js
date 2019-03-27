// pages/crafts/index.js
const PURCHASE_DATA = require('./datas/purchase.js');

const DataHandler = require('./datahandler/datahandler.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: PURCHASE_DATA,
    sortType: '',
    sortKey: ''
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

  },

  sortHandler: function (e) {
    const id = e.target.id;
    const d = DataHandler.getSortedData(id, 'asc', this.data.data);
    this.setData({
      data: d
    });
  }
})