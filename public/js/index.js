/**
 * Created by 吴琼 on 2017/9/19.
 */
var krpano;

window.onload = function () {
    //获取krpano DOM节点
    krpano = document.getElementById('krpanoSWFObject');

    //开始自动旋转之前，最后一次交互之后的等待时间（默认时间为1.5s）
    //krpano.set('autorotate.waittime', '0');

    //开启自动旋转, 默认值为false不开启
    //krpano.set('autorotate.enabled', true);

    //旋转一圈调用的时间
    krpano.set('events.onautorotateoneround', function () {
        //console.log(1)
    });

    //停止旋转后调用的时间
    krpano.set('events.onautorotatestop', function () {
        //alert('旋转停止');
        console.log('旋转停止')
    });

    krpano.set('events.onviewchanged', function () {
        var fpsDom = document.getElementById('fps');
        fpsDom.innerHTML = krpano.get('display.currentfps').toFixed(1);
    });

    //定义停止旋转的事件，默认有'userviewchange|layers|keyboard'， 设置''则不允许通过点击等事件停止旋转
    krpano.set('autorotate.interruptionevents', '');

    //开始旋转时触发的时间
    krpano.set('events.onautorotatestart', function() {
        console.log('开始旋转')
    })
    //旋转停止时触发的时间
    krpano.set('events.onautorotatestop', function() {
        console.log('旋转停止')
    })


    showDebugger();
};

//debugger
function showDebugger() {
    krpano.call("showlog()")
}

//全屏
function fullScreen() {
   // krpano.set('fullscreen', true);
}

//开始旋转
function startRotate() {
    krpano.call('autorotate.start()');

    //开启旋转后的加速度，默认为1s，加速至最大速度
    krpano.set('autorotate.accel', '1.5');

    //设置旋转的最大速度（负值为顺时针旋转）
    krpano.set('autorotate.speed', '-10');

    //开启旋转后先位于给定的值，然后在旋转，如果给定的为off或非数字的值，则会禁用它
    krpano.set('autorotate.horizon', '0.0');

    //缩放到给定的视野后再旋转
    //krpano.set('autorotate.tofov', '0');

    //减慢相对于当前缩放/视场的自动转速，以便在所有变焦距离处获得相同的视觉速度。默认值为true
    krpano.set('autorotate.zoomslowdown', false);
}

//停止旋转
function stopRotate() {
    krpano.call('autorotate.stop()')
}

//判断当前是否旋转，只读属性
function showVrState() {
    krpano.get('autorotate.isrotating') ? console.log('当前正在旋转') : console.log('当前没有旋转');
    //console.log(krpano.get('autorotate.ispaused'));
}

//停止旋转waittime 秒后再启动旋转
function timeOut() {
    //停止旋转后根据设置waittime时间后再次启动旋转
    krpano.call('autorotate.interrupt')
}

//暂停旋转
function pauseRotate() {
    krpano.call('autorotate.pause()')
}

//恢复自动旋转
function restoreRotate() {
    krpano.call('autorotate.resume()')
}