var sortPage = {
	sortInit:function(){
		this.sortTab();
		this.sortMessage();
		this.sortHref();
		this.sortHrefReturn();
		this.sortPicChange();
		this.verticalTab();
		this.listChange();
	},
//	tab切换
	sortTab:function(){
		$(".van-sort-content-picture-wrap .van-sort-content-picture-list").eq(0).show().siblings().hide();
		$(".van-sort-content-picture-nav-top").on("click",function(){			
			$(this).addClass("van-sort-content-picture-nav-active").show().siblings().removeClass("van-sort-content-picture-nav-active");
			$(".van-sort-content-picture-wrap .van-sort-content-picture-list").eq($(this).index()).show().siblings().hide();
		})
	},
//	详细信息页面tab切换
	sortMessage:function(){
		$(".vancl-sort-message-main-wrap .sort-message-main-wrap").eq(0).show().siblings().hide();
		$(".sort-message-main-nav-tab").on("click",function(){
			$(this).addClass("sort-message-main-nav-active").siblings().removeClass("sort-message-main-nav-active");
			$(".vancl-sort-message-main-wrap .sort-message-main-wrap").eq($(this).index()).show().siblings().hide();
		})
	},
//	location跳转
	sortHref:function(){
		$(".js-van-sort-content-picture-list-groom").on("click",function(){
			window.location.href = "sortMessage.html";
		})
	},
	sortHrefReturn:function(){
		$(".js-message-header-return").on("click",function(){
			window.location.href = "kind.html";
		})		
	},
//	头部图片变换
	sortPicChange:function(){
		$("#js-message-header-change").on("click",function(){
			$(this).toggleClass('message-header-change1');			
		})
	},
	verticalTab:function(){
		$(".js-vancl-sort-message-vertical .js-sort-message-vertical").eq(0).show().siblings().hide();
		$(".sort-message-main-nav-tab").on("click",function(){
			$(this).addClass('sort-message-main-nav-active').siblings().removeClass('sort-message-main-nav-active');
			$(".js-vancl-sort-message-vertical .js-sort-message-vertical").eq($(this).index()).show().siblings().hide();
		})		
	},
//	点击头部图片时变换详细信息格式
	listChange:function(){	
		 open=true;
		$("#js-message-header-change").on("click",function(){			
			if(open==true){
				$('.js-vancl-sort-message-vertical').show().siblings('.vancl-sort-message-main-wrap').hide();
				open=false;
			}else{
				$('.vancl-sort-message-main-wrap').show().siblings('.js-vancl-sort-message-vertical').hide();
				open=true;
			}
		})	
	}
}
sortPage.sortInit();    