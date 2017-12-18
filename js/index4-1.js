(function(global){
	function remChange(){
		document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
	}
	remChange();
	global.addEventListener('resize',remChange,false);
})(window);

$(document).ready(function(){

	//页面初始化
	$('.time-limit-overload').hide();	
	$('.trans-style-self').hide();
	$('.trans-style-home').hide();
	$('.trans-style-school').show();
	$('.time-limit-windo').show();	
	showMask();	
	//城市选择
	$('.address').click(function(){
		showMaskTWO();	
		$(document).css('overflow','hidden');
		$('.city-list').animate({bottom:'0'});
		});
	$('.city-list-title>p:nth-child(1)').click(function(){
		$('.city-list').animate({bottom:'-24.25rem'});
		hideMaskTWO();
		$(document).css('overflow','auto');
		});
	$('.city-list-title>p:nth-child(2)').click(function(){
		$('.city-list').animate({bottom:'-24.25rem'});
		hideMaskTWO();
		$(document).css('overflow','auto');
		$('.address>input').val($('.swiper-slide-active>p').text());
		});
	$('.mask.two').click(function(){
		$('.city-list').animate({bottom:'-24.25rem'});
  	      $(".mask.two").hide();  
		$(document).css('overflow','auto');
		    
		});
		
//	$('.swiper-slide-active').click(function(){
//		$('.city-list').animate({bottom:'-24.25rem'});
//		hideMaskTWO();
//		$(document).css('overflow','auto');
//		$('.address>input').val($('.swiper-slide-active>p').text());
//		});
			
	//获取姓名默认值
	var userName = $(".user-info>.info-block:nth-child(2)>input").attr('placeholder');
	$('.trans-style-school>.trans-info-block:nth-child(1)>input').attr('placeholder',userName);
	$('.trans-style-home>.trans-info-block:nth-child(1)>input').attr('placeholder',userName);
	$(".user-info>.info-block:nth-child(2)>input").change(function(){
		userName = $(".user-info>.info-block:nth-child(2)>input").val();
		$('.trans-style-school>.trans-info-block:nth-child(1)>input').attr('placeholder',userName);
		$('.trans-style-home>.trans-info-block:nth-child(1)>input').attr('placeholder',userName);
	});	


	//配送方式三选一
	$('.trans-sytle-button>p').click(function(){
		$('.trans-sytle-button>p').removeClass('active');
		$(this).addClass('active');
		//对应功能页切换
				$('.trans-style-school').hide();
				$('.trans-style-self').hide();
				$('.trans-style-home').hide();
		for (var x = 1;x < 4; x++){
			if(eval($('.trans-sytle-button>p:nth-child('+ x +').active')).attr('class')){
				if( x == 1){
					$('.trans-style-school').show();
					$('.wxts>p').text('温馨提示：签收时请务必本人签收并准备好身份证');
				}else if(x == 2){
					$('.trans-style-self').show();
					$('.wxts>p').text('温馨提示：请您携带身份证、录取通知书到指定地点领取号卡');					
				}else if(x == 3){$('.trans-style-home').show();
					$('.trans-style-home').show();
					$('.wxts>p').text('温馨提示：签收时请务必本人签收并准备好身份证');
				}
			}
		}
		});	
		//倒计时功能
		var myTimeLimitMin = 14;
		var myTimeLimitSec = 60;		
		function timedCount()
		{
		$('.time>p').text('请在' + myTimeLimitMin + '分' + myTimeLimitSec + '秒内填写完成，超时号码自动释放');
		if(myTimeLimitMin > 0){
			myTimeLimitSec -= 1;
			if(myTimeLimitSec == 0){
				myTimeLimitMin -=1;
				myTimeLimitSec =60;
				}
			}else if(myTimeLimitMin == 0){
				myTimeLimitSec = 0;
				clearTimeout(t);
				showMask();	
				$('.time-limit-overload').show();	
				}
		var t = setTimeout(function(){
			timedCount()},1000);
		}
		
		timedCount();
		
		
	//弹窗功能
    function showMask(){     
        $("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());     
        $("#mask").show();     
    }  
    //隐藏遮罩层  
    function hideMask(){     
        $("#mask").hide();     
    }  
	
    function showMaskTWO(){     
        $(".mask.two").css("height",$(document).height());     
        $(".mask.two").css("width",$(document).width());     
        $(".mask.two").show();     
    }  
    //隐藏遮罩层  
    function hideMaskTWO(){     
        $(".mask.two").hide();    
    }  
	$('.time-limit-windo>p:nth-child(2)').click(function(){
		$('.time-limit-windo').hide();
        $("#mask").hide();     
		});
	$('.time-limit-overload>p:nth-child(3)').click(function(){
			window.location.href = "page2.html"; //查看详情按钮,跳转到详情页
		});
	//提交按钮跳转
	$('.tj-btn').click(function(){
			window.location.href = "page4.html"; //查看详情按钮,跳转到详情页
		});
	$('.header-back').click(function(){
        history.go(-1);//返回上一页不刷新页面
		});
	
	$('.date-time').click(function () {

	})
	//时间遮罩层打开
	$('.date-time>input').click(function () {
		showMask();
	})
});

