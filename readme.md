#### krpano功能需求

* 手机陀螺仪
```xml
    //在pano.xml文件中加入这段代码，并将gyro2.js文件放入对应位置
    <plugin name="gyro" devices="html5"
            url="%SWFPATH%/xml/gyro2.js"
            enabled="true"
    />
```


* 小行星开场
* 场景切换
* 自动旋转
* 添加热点
* 事件
```javascript
events = {
    onenterfullscreen,  //全屏事件
    onexitfullscreen,   //退出全屏
    onxmlcomplete,      //xml文件或场景加载完成时的事件
    onpreviewcomplete， // 预览图片加载完成时触发的事件
}
```
