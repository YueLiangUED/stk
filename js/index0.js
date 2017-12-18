		(function(global){
			function remChange(){
				document.documentElement.style.fontSize=20*document.documentElement.clientWidth/720+'px';
			}
			remChange();
			global.addEventListener('resize',remChange,false);
		})(window);
		//初始化
		$(document).ready(function(){
			$('.search-school').click(function(){
			//window.location.href="page1.html";
				$('.select-school').slideDown(0,function () {
					$('#top').slideUp();

				});
				
			});

			$('.button').click(function(){
			window.location.href="page2.html";
				});
			});
    function showMask(){     
        $("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());     
        $("#mask").show();     
    }  
    //隐藏遮罩层  
    function hideMask(){     
        $("#mask").hide();     
    }  
			