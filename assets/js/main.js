$(document).ready(function($) {

	"use strict";

	var loader = function() {
		
		setTimeout(function() { 
			if($('#pb_loader').length > 0) {
				$('#pb_loader').removeClass('show');
			}
		}, 700);
	};
	loader();

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.pb_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();
	
	// slick sliders
	var slickSliders = function() {
		$('.single-item').slick({
			slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  infinite: true,
		  autoplay: false,
	  	autoplaySpeed: 2000,
	  	nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
	  	prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
	  	arrows: true,
	  	draggable: false,
	  	adaptiveHeight: true
		});

		$('.single-item-no-arrow').slick({
			slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  infinite: true,
		  autoplay: true,
	  	autoplaySpeed: 2000,
	  	nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
	  	prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
	  	arrows: false,
	  	draggable: false
		});

		$(document).ready(function () {
  $('.multiple-items').slick({
    slidesToShow: 4,        // 一次顯示幾張（可自己調）
    slidesToScroll: 1,
    autoplay: true,         // 開啟自動播放
    autoplaySpeed: 0,       // ⚠ 關鍵：不等待，持續滑動
    speed: 4000,            // 滑動速度（數字越大越慢）
    cssEase: 'linear',      // ⚠ 關鍵：線性移動，不卡頓
    infinite: true,         // 無限循環
    arrows: false,          // 不要箭頭
    dots: false,            // 不要小圓點
    pauseOnHover: false,    // 滑鼠移上去也不停
    pauseOnFocus: false,    // 點擊也不停
    swipe: false,           // 手機不拖曳（比較像展示牆）

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});


		$('.js-pb_slider_content').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.js-pb_slider_nav',
		  adaptiveHeight: false
		});
		$('.js-pb_slider_nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.js-pb_slider_content',
		  dots: false,
		  centerMode: true,
		  centerPadding: "0px",
		  focusOnSelect: true,
		  arrows: false
		});

		$('.js-pb_slider_content2').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.js-pb_slider_nav2',
		  adaptiveHeight: false
		});
		$('.js-pb_slider_nav2').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.js-pb_slider_content2',
		  dots: false,
		  centerMode: true,
		  centerPadding: "0px",
		  focusOnSelect: true,
		  arrows: false
		});
	};
	slickSliders();

	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #probootstrap-navbar ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();
		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({

		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });

		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();

	var offCanvasNav = function() {
		var toggleNav = $('.js-pb_nav-toggle'),
				offcanvasNav = $('.js-pb_offcanvas-nav_v1');
		if( toggleNav.length > 0 ) {
			toggleNav.click(function(e){
				$(this).toggleClass('active');
				offcanvasNav.addClass('active');
				e.preventDefault();
			});
		}
		offcanvasNav.click(function(e){
			if (offcanvasNav.hasClass('active')) {
				offcanvasNav.removeClass('active');
				toggleNav.removeClass('active');
			}
			e.preventDefault();
		})
	};
	offCanvasNav();

	var ytpPlayer = function() {
		if ($('.ytp_player').length > 0) { 
			$('.ytp_player').mb_YTPlayer();	
		}
	}
	ytpPlayer();


	


});

