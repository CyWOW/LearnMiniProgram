// pages/mycomeara/mycomeara.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n1:0,
    n2:0,
    result:"两个数值相等"
  },

  compare:function() {
    var res="两个数值相等"
    if (this.data.n1>this.data.n2) res="第一个数值大"
    else if(this.data.n1<this.data.n2) res="第一个数值小"
    this.setData({result:res})
  },  

  numin:function(e){
    if(e.currentTarget.id=="n1") 
        this.data.n1=Number(e.detail.value)
    else this.data.n2=Number(e.detail.value)
  },

  clear:function(){
    this.setData({n1:0,n2:0,result:"两个数值相等"})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //this.setData({})
 },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})