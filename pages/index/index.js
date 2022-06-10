// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    currentNav: 'nav-0',
    scrollLeft: 0,
    curScrollLeft: 0,
    left: 10
  },
  setScroll(e) {
    this.setData({
      scrollLeft: e.detail.scrollLeft
    })
  },
  // 事件处理函数
  scrollToNav(e) {
    const { offsetLeft, id } = e.currentTarget
    const query = wx.createSelectorQuery()
    query
      .select('#scroll-view')
      .boundingClientRect()
      .exec(([{ width }]) => {
        console.log(width / 2 + this.data.scrollLeft, offsetLeft);
        // diff > 0 代表被点击的item，在scroll-view中间（width / 2）的右边，否则反之
        const diff = offsetLeft - (width / 2 + this.data.scrollLeft)

        console.log(this.data.scrollLeft, diff);
        this.setData({
          // diff > 0 那么滚动条需要往左移，否则反之。
          curScrollLeft: this.data.scrollLeft + diff,
        })
      })
    console.log(e);
    this.setData({
      currentNav: e.currentTarget.dataset.id,
      left: offsetLeft
    })
    console.log('left', offsetLeft,this.data.scrollLeft);
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
})
