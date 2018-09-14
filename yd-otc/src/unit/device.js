/**
    使用方法：
    import device from './unit/device.js';
    const deviceApp = new device();
    // app 外使用
    deviceApp.init({
        "type": "15",
        "url":"http://www.baidu.com",
        "title":"免费七彩云南双人游"
    });

    // app 内使用
    deviceApp.webView({
        "type": "15",
        "url":"http://www.baidu.com",
        "title":"免费七彩云南双人游"
    });
    // 判断设备
    deviceApp.userAgent();

    window.outFn = function(){
        console.log(1)
    }
**/

class AppDevice {
    constructor(){
        this.ua = navigator.userAgent;
        this.toUrl = {
            'ios':'//itunes.apple.com/cn/app/yue-dan/id1067234732?mt=8',
            'wx':'//a.app.qq.com/o/simple.jsp?pkgname=com.yuedan',
            'android':'//wx.iyuedan.com/wx/download/downandroid'
        }
        // 分享
        this.shareContent = {};
    }
    // 初始化下载
    init(obj){
        if(this.is_wx()){
            // 如果是微信，则直接打开应用宝
            window.location.href = this.toUrl.wx;
        }else if(this.is_wbo()){
            // 如果是微博，刚打开弹窗提示
            let cloudTips = document.createElement('div');
            cloudTips.id = 'cloudTips';
            cloudTips.style.cssText = `width: 100%;height: 100%;background:url(//fe.iyuedan.com/lib/img/cloudtips.png) no-repeat 0 0;background-size: 100% 100%;position: fixed;top: 0;right: 0;z-index: 1000`;
            document.body.appendChild(cloudTips);
            document.getElementById('cloudTips').onclick = function(){
                document.body.removeChild(this);
            }
        }else {
            // 不是微信也不是
            if(this.userAgent()){
                // ios
                this.isIos(obj);
            }else {
                // 安卓
                this.isAndroid(obj);
            }
        }
    }
    // 判断设备
    userAgent(){
        if (/(iPhone|iPad|iPod|iOS)/i.test(this.ua)) {
            return true;
        } else if (/(Android)/i.test(this.ua)) {
            return false;
        } else {
            return false;
        }
    }
    //在微信打开
    is_wx(){
        if(this.ua.match(/MicroMessenger/i)=="MicroMessenger") {
            return true;
        } else {
            return false;
        }
    }
    //在微博打开
    is_wbo(){
        if(this.ua.match(/WeiBo/i)== "WeiBo") {
            return true;
        } else {
            return false;
        }
    }
    // 在QQ 中打开
    is_qq(){
        if (this.ua.match(/QQ/i) == "QQ") {
            return true;
        }else{
            return false;
        }
    }
    // webview浏览器跳转APP
    webView(obj){
        let str = JSON.stringify(obj);
        if(this.userAgent()){
            window.location = "yuedanh5://iyuedan.com?"+str;
        }else {
            window.myjs.startFunction(str);
        }
    }
    // 分享
    /**
        二维码不包含在这里，单独在外处问题
        // 微信 微博 朋友圈 新浪 短信
    */
    appShare(type,cfg){
        this.shareContent = cfg;
        // console.log(shareContent);
        this.shareContent.shareType = type;
        let str =  JSON.stringify(this.shareContent);
        if(this.userAgent()){
            // isiOS
            document.location = "yuedanh5://iyuedan.com?"+str;
        }else{
            // isAndroid
            window.myjs.doAction('share',str);
        }
    }
    // 判断是ios
    isIos(obj){
        let str = JSON.stringify(obj);
        let loadDateTime = new Date();
	    window.setTimeout(()=>{
	    	let timeOutDateTime = new Date();
	    	if (timeOutDateTime - loadDateTime < 5000) {
	    		window.location = this.toUrl.ios;//ios下载地址
	    	} else {
	            window.close();
	    	}
	    },2000);
	    window.location = "aiyuedan://iyuedan.com?"+str;
    }
    //判断是android
    isAndroid(obj){
        let str = JSON.stringify(obj);
        let tUrl= "yuedan://app.iyuedan.com?json=";
        window.location = tUrl+str;
        setTimeout(()=>{
            window.location= this.toUrl.android; //android下载地址
        },500);
    }

}
export default AppDevice;
