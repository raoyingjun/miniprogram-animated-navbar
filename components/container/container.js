// components/container/container.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
    },

    /**
     * 组件的初始数据
     */
    data: {
        contentAreaHeight: 0
    },
    lifetimes: {
        attached() {
            wx.getSystemInfo({
              success: ({screenHeight, statusBarHeight})=> {
                  this.setData({
                    contentAreaHeight: screenHeight - (statusBarHeight + 44) - 50
                  })
                  console.log('zzz', screenHeight - (statusBarHeight + 44) - 50);
              },
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
