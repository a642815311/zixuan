//跨浏览器增加事件
function addListener(element, eventName, handler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
    }
    else if (element.attachEvent) {
        element.attachEvent('on' + eventName, handler);
    }
    else {
        element['on' + eventName] = handler;
    }
}
//跨浏览器删除事件
function removeListener(element, eventName, handler) {
    if (element.addEventListener) {
        element.removeEventListener(eventName, handler, false);
    }
    else if (element.detachEvent) {
        element.detachEvent('on' + eventName, handler);
    }
    else {
        element['on' + eventName] = null;
    }
}

window.onload=function () {
    var hStyle=document.getElementById("HomePage")
    var h=document.documentElement.clientHeight;
    hStyle.style.height=h+"px"

    $(document).ready(function () {
        var tis1 = $("#tis");
        var card1 = $(".card1");
        var loaded = false;

        tis1.on("mouseover", function () {
            if (!loaded) {
                card1.load("框架.html");
                loaded = true;
            }
            card1.slidedown();

        })
        tis2.on("mouseout",function(){
           card1.slideup();
               })
        tis2.on("mouseover", function () {
            if (!loaded) {
                card2.load("进阶之路.html");
                loaded = true;
            }
            card1.slidedown();

        });
        tis2.on("mouseout",function(){
           card2.slideup();
               });
    })
}


