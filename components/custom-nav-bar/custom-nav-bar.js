// components/custom-nav-bar.js
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
        statusBarHeight: 0
    },
    lifetimes: {
        attached() {
            wx.getSystemInfo({
                success: ({ statusBarHeight }) => {
                    this.setData({ statusBarHeight })
                }
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
