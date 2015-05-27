// 实用函数，欢迎补充在 github 上
var isMobile = {
	android:     function() { return navigator.userAgent.match(/Android/i)     ? true : false; },
	blackberry:  function() { return navigator.userAgent.match(/BlackBerry/i)  ? true : false; },
	ios:         function() { return navigator.userAgent.match(/iPhone|iPod/i) ? true : false; },
	windows:     function() { return navigator.userAgent.match(/IEMobile/i)    ? true : false; },
	any:         function() { return (isMobile.android() || isMobile.blackberry() || isMobile.ios() || isMobile.windows()); }
};


//jQuery 功能代码编辑区
;(function($) {

$(document).ready(function() {

	//jQuery('input[placeholder], textarea[placeholder]').placeholder();

	$('a[href="#"]').click( function(e) { e.preventDefault(); return false; } );

	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop:0}, 200);
	});

	//topBar-menu 导航条信息提示
	$('.topBar-menu>li').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});

	//header-banner 关闭功能
	$('.btn-close').click(function(){
		$(this).parent().hide();
	});

	//header-my360buy、header-shopCart 信息提示
	$('.header-my360buy>dl,.header-shopCart>dl').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});

	//topNav-menu 点击效果
	$('.topNav-menu a').click(function(){
		$(this).parents('.topNav-menu').find('a').removeClass('current');
		$(this).addClass('current');
	});

	$(".topFocus-slide").flexslider({
		slideshowSpeed: 3000
	});

	//.showCase-bd .item-wrap .item-img img 浮动动画效果
	$('.showCase-bd .item').hover(function(){
		var $this = $(this);
		var offsetLeft = -10;
		imgMove( $this, offsetLeft );
	},function(){
		var $this = $(this);
		var offsetLeft = 0;
		imgMove( $this, offsetLeft );
	});

	//section-floors tab-item 效果
	var $eletronicsTabHd = $('#floors-eletronics .floors-prolist .tab-hd');
	var $digitalsTabHd = $('#floors-digitals .floors-prolist .tab-hd');
	var $clothingTabHd = $('#floors-clothing .floors-prolist .tab-hd');
	var $jewelleryTabHd = $('#floors-jewellery .floors-prolist .tab-hd');
	var $lifeTabHd = $('#floors-life .floors-prolist .tab-hd');
	var $babyTabHd = $('#floors-baby .floors-prolist .tab-hd');
	var $foodTabHd = $('#floors-food .floors-prolist .tab-hd');
	var $bookTabHd = $('#floors-book .floors-prolist .tab-hd');
	var floorsProlist = '.floors-prolist';
	var floorsInterval = 400;
	tabSelect( $eletronicsTabHd, floorsProlist, floorsInterval );
	tabSelect( $digitalsTabHd, floorsProlist, floorsInterval );
	tabSelect( $clothingTabHd, floorsProlist, floorsInterval );
	tabSelect( $jewelleryTabHd, floorsProlist, floorsInterval );
	tabSelect( $lifeTabHd, floorsProlist, floorsInterval );
	tabSelect( $babyTabHd, floorsProlist, floorsInterval );
	tabSelect( $foodTabHd, floorsProlist, floorsInterval );
	tabSelect( $bookTabHd, floorsProlist, floorsInterval );

	//.floors-ranking tab-item 效果
	var $bookRankTabHd = $('#book-ranking .tab-hd');
	var bookRankProlist = '#book-ranking';
	tabSelect( $bookRankTabHd, bookRankProlist, 100 )

	//.floors-prolist .tab-bd .clothlist .clothlist-img 浮动动画效果
	var $items = $('.floors-prolist .tab-bd .clothlist li a');
	$items.hover(function(){
		var $this = $(this);
		var itemIndex = $items.index(this);
		//alert($itemIndex);
		var offsetLeft = -15;
		$this.parents('.clothlist').find('a').css({
			opacity: 0.72
		});
		$this.parents('.clothlist').find('a').eq(itemIndex).stop(true,true).animate({
			opacity: 1
		},400);
		imgMove( $this, offsetLeft, 400 );
	},function(){
		var $this = $(this);
		var offsetLeft = 0;
		imgMove( $this, offsetLeft );
		$this.parents('.clothlist').find('a').css({
			opacity: 1
		});
	});

	//slide 选择滑动显示效果
	var $eletronicsSlide1 = $('#floors-eletronics .floors-prolist .slide');
	var $eletronicsSlide2 = $('#floors-eletronics .floors-ft .slide');
	slideSelect( $eletronicsSlide1, 400 );
	slideSelect( $eletronicsSlide2 );
	var $digitalsSlide1 = $('#floors-digitals .floors-prolist .slide');
	var $digitalsSlide2 = $('#floors-digitals .floors-brands .slide');
	var $digitalsSlide3 = $('#floors-digitals .floors-ft .slide');
	slideSelect( $digitalsSlide1, 400 );
	slideSelect( $digitalsSlide2 );
	slideSelect( $digitalsSlide3 );
	var $clothingSlide1 = $('#floors-clothing .floors-ft .slide');
	slideSelect( $clothingSlide1 );
	var $jewellerySlide1 = $('#floors-jewellery .floors-prolist .slide');
	var $jewellerySlide2 = $('#floors-jewellery .floors-ft .slide');
	slideSelect( $jewellerySlide1 );
	slideSelect( $jewellerySlide2 );
	var $lifeSlide1 = $('#floors-life .floors-prolist .slide');
	var $lifeSlide2 = $('#floors-life .floors-ft .slide');
	slideSelect( $lifeSlide1 );
	slideSelect( $lifeSlide2 );
	var $babySlide1 = $('#floors-baby .floors-prolist .slide');
	slideSelect( $babySlide1 );
	var $foodSlide1 = $('#floors-food .floors-prolist .slide');
	slideSelect( $foodSlide1 );
	var $bookSlide1 = $('#floors-book .floors-prolist .slide');
	slideSelect( $bookSlide1 );

	//底部新闻条向下滚动效果
	var $activityList = $('.fthotNews-activity .item-bd').find('ul').eq(0);
	var $activityCopyList = $('.fthotNews-activity .item-bd').find('ul').eq(1);
	listScrollDown( $activityList, $activityCopyList );
	var $shareList = $('.fthotNews-share .item-bd').find('ul').eq(0);
	var $shareCopyList = $('.fthotNews-share .item-bd').find('ul').eq(1);
	listScrollDown( $shareList, $shareCopyList );

});

//图片浮动函数
function imgMove( $this, offsetLeft, interval ) {
	var interval = interval || 200;
	$this.find('img').animate({
		left: offsetLeft+'px'
	},interval);
};

//网页选项卡
function tabSelect( $tabHd, prolist, interval ) {
	var interval = interval || 300;
	var tabHdWidth = $tabHd.outerWidth();
	$tabHd.hover(function(){
		var tabIndex = $tabHd.index(this);
		var $prolist = $(this).parents(prolist);
		$prolist.find('.tab-item').removeClass('hover');
		$prolist.find('.tab-item').eq(tabIndex).addClass('hover');
		$prolist.find('.tab-arrow').stop(true,false).animate({
			left: (tabIndex*tabHdWidth)+'px'
		},interval);
	});
}

//slide 选择显示效果
function slideSelect( $slide,interval ) {
	var interval = interval || 300;
	var $ctrls = $slide.find('.slide-ctrl span');
	var $items = $slide.find('.slide-items');
	var itemWidth = $items.find('.slide-item').outerWidth();
	//alert(itemWidth);
	$ctrls.hover(function(){
		var ctrlIndex = $ctrls.index(this);
		$(this).parent().find('span').removeClass('current');
		$(this).parent().find('span').eq(ctrlIndex).addClass('current');
		$items.stop(true,true).animate({
			left: (-ctrlIndex*itemWidth) + 'px'
		},interval);
	});
}

//新闻条线下滚动效果
function listScrollDown( $thisList, $copyList, interval ) {
	var interval = interval || 6000;
	$copyList.html( $thisList.html() );
	var listHeight = $thisList.outerHeight();
	var itemHeight = $thisList.find('li').outerHeight();
	$copyList.css({
		"top": (-listHeight) + 'px'
	});

	function starMove(){
		var thisTop = parseInt( $thisList.css('top') );
		var copyTop = parseInt( $copyList.css('top') );
		thisTop = thisTop + itemHeight;
		copyTop = copyTop + itemHeight;
		$thisList.animate({top: thisTop+'px' });
		$copyList.animate({top: copyTop+'px' },function(){
			if( thisTop >= listHeight ){
				thisTop = 0;
				copyTop = -listHeight;
				$thisList.css({top: thisTop+'px' });
				$copyList.css({top: copyTop+'px' });
			}
		});
	}

	var myScroll = setInterval(starMove,interval);

	//网页导航条效果
	var scrollTop = $(window).scrollTop();
	var $floorBtn = $('.pageNav-menu a:lt(8)');
	var $floors = $('.section-floors .floors-item');
	$floorBtn.click(function(e){
		var $this = $(this);
		var thisIndex = $floorBtn.index(this);
		//alert(thisIndex);
		var $currentFloor = $floors.eq(thisIndex);
		var currentFloorTop = $currentFloor.offset().top;
		$('html,body').animate({scrollTop:currentFloorTop}, 500, function(){
			//$('html,body').scrollTop(currentFloorTop);
		});
		e.preventDefault();
		return false;
	});

}

$(window).load(function() {

});

$(window).scroll(function(){

	var scrollTop = $(window).scrollTop();
	//网页导航条效果
	var windowHeight = $(window).height();
	var $pageMenu = $('.pageNav-menu');
	//var $floorBtn = $('.pageNav-menu a:lt(8)');
	//alert($floorBtn.length);
	var $floors = $('.section-floors .floors-item');
	var $sectionFloor = $('.section-floors');
	var sectionFloorTop = $sectionFloor.offset().top;
	var currentId = "";

	if( scrollTop < Math.floor(sectionFloorTop-windowHeight*1.5) ){
		$pageMenu.hide();
	}else{
		$pageMenu.fadeIn();
	}

	$floors.each(function(){
		var $this = $(this);
		var floorTop = $this.offset().top;
		if( scrollTop>Math.floor(floorTop-windowHeight*0.5) ){
			currentId = "#" + $this.attr('id');
		}else{
			return false;
		}
	});
	//alert(currentId);
	var $currentLink = $pageMenu.find('.current');
	if( scrollTop < sectionFloorTop-windowHeight ){
		$currentLink.removeClass("current");
	}
	//alert($currentLink.length);
	if( currentId && $currentLink.attr('href')!=currentId ){
		$currentLink.removeClass("current");
		$pageMenu.find('[href='+ currentId +']').addClass('current');
	}

});

})(jQuery);

