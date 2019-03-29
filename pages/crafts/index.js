// pages/crafts/index.js
const PURCHASE_DATA = require('./datas/purchase.js');
const RENT_DATA = require('./datas/rent.js');
const DataHandler = require('./datahandler/datahandler.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    sortType: '',
    sortKey: '',
    showFilter: false,
    showing: {
      type: true,
      className: false,
      capacityAndPayload: true,
      range: true,
      fuelEfficient: false,
      speed: false,
      price: true,
      introDate: true,
      endDate: false
    }
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
    let d;
    if (this.options.data === 'rent') {
      d = RENT_DATA;
    } else {
      d = PURCHASE_DATA;
    }
    this.originData = d;
    this.setData({
      data: d
    });
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
    const id = e.currentTarget.id;
    const {
      sortKey,
      sortType
    } = this.data;
    let type, key;
    if (sortKey === id) {
      if (sortType === 'asc') {
        type = 'desc';
      } else {
        type = 'asc';
      }
    } else {
      type = 'asc';
    }
    const d = DataHandler.getSortedData(id, type, this.originData);
    this.setData({
      data: d,
      sortKey: id,
      sortType: type
    });
  },
  tapFilterHandler: function () {
    this.setData({
      showFilter: true
    });
  },
  tapMaskHandler: function () {
    this.setData({
      showFilter: false
    })
  },
  changeSwitchHandler: function (e) {
    const val = e.detail.value;
    const id = e.currentTarget.id;
    const newShowing = {...this.data.showing};
    newShowing[id] = val;
    this.setData({
      showing: newShowing
    });
  }
})