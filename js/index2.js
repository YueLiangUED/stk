(function(global){
	function remChange(){
		document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
	}
	remChange();
	global.addEventListener('resize',remChange,false);
})(window);

$(document).ready(function(){
	//筛选爱情靓号
	$('.aqlh-icon').click(function(){
		$('.srlh-notice').text('');
		});
	//筛选生日靓号
	$('.srlh-icon').click(function(){
		$('.srlh-notice').text('在这里搜索自己的生日数字吧，如1013(10月13日)');
		});
	//筛选入学靓号
	$('.rxlh-icon').click(function(){
		$('.srlh-notice').text('');
		});
	//筛选吉祥靓号
	$('.jxlh-icon').click(function(){
		$('.srlh-notice').text('');
		});
	//选号激活状态
	$('.xh-zone>li').click(function(){
		$('.xh-zone>li').removeClass('active');
		$(this).addClass('active');
		//跳转立即购买页				
		$('.buynow-button').bind('click',function(){
			window.location.href = "page3.html"; //查看详情按钮,跳转到详情页
			});
		});
	//跳转我的订单页
	$('.dd-button').click(function(){
        window.location.href="page6.html";//查看订单按钮跳转地址,跳转到订单页
		});
	$('.header-back').click(function(){
        history.go(-1);//返回上一页不刷新页面
		});
		
	});
