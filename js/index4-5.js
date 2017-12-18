(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
/*顶部后退按钮跳转*/
$(function () {
    $("#backward").click(function () {
        history.go(-1);//左上角后退按钮,返回上一页,不刷新页面,如需刷新改为history.back()
    });
    $(".look").click(function () {
        window.location.href="page5.html";//查看订单按钮跳转地址,跳转到订单页
    });
    $(".returnHome").click(function () {
        window.location.href="page0.html";//返回首页按钮跳转地址,跳转到首页
    });
});