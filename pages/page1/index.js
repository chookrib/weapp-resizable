// pages/page1/index.js
Page({

    onLoad() {
    },

    gotoPage2() {
        wx.navigateTo({
            url: '/pages/page2/index',
        })
    },

    onResize(result) {
        console.log('Page onResize result', result);
        console.log('Page onResize getWindowInfo', wx.getWindowInfo());
    }
})
