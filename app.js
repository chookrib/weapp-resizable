// app.js
App({

    onLaunch(){
        console.log('App onLaunch getWindowInfo', wx.getWindowInfo());
        console.log('App onLaunch getSystemInfoSync', wx.getSystemInfoSync());


        // wx.onWindowResize((result) => {
        //     console.log('App onLaunch onWindowResize result', result);
        // });

        // console.log(wx.onWindowResize);
    },

    onShow(){
        console.log('App onShow getWindowInfo', wx.getWindowInfo());
        console.log('App onShow getSystemInfoSync', wx.getSystemInfoSync());

        
        // wx.onWindowResize((result) => {
        //     console.log('App onShow onWindowResize result', result);
        // });

        // console.log(wx.onWindowResize);
    }
})
