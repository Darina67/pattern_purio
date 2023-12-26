document.addEventListener('DOMContentLoaded', function () {
    var cookieMessage = document.getElementById('cookie-message');
    var agreeButton = document.getElementById('agree-button');

    // Check if the user has already agreed (using localStorage)
    if (!localStorage.getItem('cookie-agreed')) {
        cookieMessage.style.display = 'block';  // or 'flex', or any other appropriate display value
    }

    // Set the click event for the "Agree" button
    agreeButton.addEventListener('click', function () {
        cookieMessage.style.display = 'none';

        // Set a flag in localStorage to remember user's choice
        localStorage.setItem('cookie-agreed', 'true');
    });
});


/*обучающие материалы раскрытие блока*/
// Hide all col blocks initially within the specific section
$('#educational-materials .wrapper .col-md-3').hide();

// Handle click on "Подробнее" button within the specific section
$('#educational-materials .video-block__more').click(function () {
	// Get the target ID from data attribute
	var targetId = $(this).parent().data('target');
	
	// Toggle visibility of col blocks within the specific section
	$('#' + targetId + ' .col-md-3').slideToggle();
	
	// Toggle text on the button
	var buttonText = $(this).text() == 'Подробнее' ? 'Скрыть' : 'Подробнее';
	$(this).text(buttonText);
});

/*аккордион на телефонах для опыта*/



/*прокрутка к секции где видео при выходе из полноэкранного режима*/

document.addEventListener('fullscreenchange', function (event) {
	var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
	
	if (!fullscreenElement) {
		// Проверяем, что выход из полноэкранного режима произошел
		// и перемещаем страницу обратно к секции "about"
		var aboutSection = document.getElementById('about');
		aboutSection.scrollIntoView({ behavior: 'smooth' });
	}
});

jQuery(document).ready(function($) {
	'use strict';	
  
	/* ==============================================
		 MODERNIZR
	 =============================================== */
	 Modernizr.load({
		   test: Modernizr.input.placeholder,
		   nope: 'js/placeholder.js',
		   complete : function () {
			 if(!Modernizr.input.placeholder) {
				   $('input, textarea').placeholder();
			 }
		 }
	 });
	 
	 /* ==============================================
		 PULSE FALLBACK
	 =============================================== */
	 if(!Modernizr.cssanimations) {
		 $('.btn').addClass('btn-noanimated');
	 }
	 
	/* ==============================================
		 WAYPOINTS
	 =============================================== */	
	 
	 // Only load parallax when not on mobile devices
	 if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		 $('.animated').waypoint(function() {
			 $(this).each(function(){
				 var animation = $(this).attr( "data-animation" );
				 $(this).addClass( animation );
				 $(this).addClass( 'visible' );
			 });
		 },
		 {
			 offset: '70%',
			 triggerOnce: true
		 });
	 
	 } else {
		 
		 $('.animated').addClass( 'visible' );
	 
	 }
	 
	 $('#about').waypoint(function() {		
			 $('#about .progress-bar').each(function(){
				 var percent = $(this).attr( "data-value" ) + '%';
				 $(this).css( "width", percent );
			 });
		 },
		 {
			 offset: '70%',
			 triggerOnce: true
		 });
		 
	 /* ==============================================
		 MMENU
	  =============================================== */	
	
	 function mmenuw() {
		 var wi = $(window).width();
		 var nb = $("#mmenu-side-menu").length;
		 if(wi < 760) {
			 if(nb < 1) {
				 $('#side-menu').clone( true ).attr("id", "mmenu-side-menu").mmenu({
					 position: "right",
					 zposition:"front",
					 moveBackground:true,
					 clone:true,
					 dragOpen:false,
					 });
				 $('#mmenu-side-menu ul').removeClass('nav navbar-nav navbar-right');
			 }
		 }
	 }
	 
	 function mmenuw_class() {
		 var wi = $(window).width();
		 if(wi < 992) {
			 $('#nav .container').addClass('container-fluid');
			 $('#nav .container').removeClass('container');
		 } else {
			 $('#nav .container-fluid').addClass('container');
			 $('#nav .container-fluid').removeClass('container-fluid');
		 }
	 }
		 
	 mmenuw();
	 mmenuw_class();
	 $(window).resize(function() { 
		 mmenuw();
		 mmenuw_class();
	 });
	
	 /* ==============================================
		 Count Factors
	  =============================================== */
	  
	  (function($) {
		 $.fn.countTo = function(options) {
			 // merge the default plugin settings with the custom options
			 options = $.extend({}, $.fn.countTo.defaults, options || {});
	 
			 // how many times to update the value, and how much to increment the value on each update
			 var loops = Math.ceil(options.speed / options.refreshInterval),
				 increment = (options.to - options.from) / loops;
	 
			 return $(this).each(function() {
				 var _this = this,
					 loopCount = 0,
					 value = options.from,
					 interval = setInterval(updateTimer, options.refreshInterval);
	 
				 function updateTimer() {
					 value += increment;
					 loopCount++;
					 $(_this).html(value.toFixed(options.decimals));
	 
					 if (typeof(options.onUpdate) == 'function') {
						 options.onUpdate.call(_this, value);
					 }
	 
					 if (loopCount >= loops) {
						 clearInterval(interval);
						 value = options.to;
	 
						 if (typeof(options.onComplete) == 'function') {
							 options.onComplete.call(_this, value);
						 }
					 }
				 }
			 });
		 };
	 
		 $.fn.countTo.defaults = {
			 from: 0,  // the number the element should start at
			 to: 100,  // the number the element should end at
			 speed: 1000,  // how long it should take to count between the target numbers
			 refreshInterval: 100,  // how often the element should be updated
			 decimals: 0,  // the number of decimal places to show
			 onUpdate: null,  // callback method for every time the element is updated,
			 onComplete: null,  // callback method for when the element finishes updating
		 };
	 })(jQuery);	
	  
	  function countUp() {	
			 var dataperc;	
			 $('.fact-number').each(function(){
				 dataperc = $(this).attr('data-perc'),
				 $(this).find('.factor').delay(6000).countTo({
					 from: 10,
					 to: dataperc,
					 speed: 1000,
					 refreshInterval: 10,
				 });  
			 });
		 }
		 
	 $('.fact-number').waypoint(function() {
		 countUp();
	 },
	 {
		 offset: '70%',
		 triggerOnce: true
	 });
		

	 
	 /* ==============================================
		 OWL CAROUSEL
	 =============================================== */
	 
	//  $("#quote-slider").owlCarousel({
	// 	   items: 1,
	// 	   loop:true,
	// 	   autoplay:true,
	// 	   autoplayTimeout:15000,
	//    });


	$(document).ready(function() {
    // Инициализация слайдера
    $("#quote-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 15000,
    });
		// Инициализация слайдера и сохранение ссылки на него
	var slider = $("#slides ul").owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		margin: 0,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		dots: true,
		stagePadding: 0,
		smartSpeed: 1000,
	});

	// Функция для перехода на первый слайд
	function goToFirstSlide() {
		slider.trigger('to.owl.carousel', 0);
	}

	// Обработчик события клика на ссылку "Главная"
	$('li.active a[href="#slides"]').on('click', function(event) {
		event.preventDefault();
		goToFirstSlide();
	});		


	    // Добавление обработчика события скролла
		$(window).on('scroll', function() {
			// Проверка, если секция slides ul видима на экране
			if (isInViewport($('#slides ul'))) {
				// Переключение слайдера на первый элемент
				$('#slides ul').trigger('to.owl.carousel', [0]);
			}
		});
	
		// Функция для проверки, находится ли элемент в области видимости
		function isInViewport(element) {
			var rect = element[0].getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}


    // Добавление обработчика события скролла
    $(window).on('scroll', function() {
        // Проверка, если секция quote-slider видима на экране
        if (isInViewport($('#quote-slider'))) {
            // Переключение слайдера на первый элемент
            $('#quote-slider').trigger('to.owl.carousel', [0]);
        }
    });

    // Функция для проверки, находится ли элемент в области видимости
    function isInViewport(element) {
        var rect = element[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

	 
	 $("#clients-slider").owlCarousel({
			dots:false,
		   responsive:{
			 0:{
			   items:1
			 },
			 420:{
			   items:2
			 },
			 768:{
			   items:3
			 },
			 1000:{
			   items:5
			 },
			 1400: {
				 items:6
			 },
			 1600: {
				 items:7
			 }
		 }
	   });
	
  
//    $("#blog-slider").owlCarousel({
// 	   dots:true,
// 	   nav: false,
// 	   responsive:{
// 			 0:{
// 			   items:1
// 			 },
// 			 420:{
// 			   items:2
// 			 },
// 			 768:{
// 			   items:3
// 			 },
// 			 1400: {
// 				 items:5
// 			 },
// 			 1600: {
// 				 items:6
// 			 }
// 		 }
// 	   });
	 
	  /* ==============================================
		 TOOLTIP
	 =============================================== */
	 jQuery('[data-toggle~="tooltip"]').tooltip({
		 container: 'body'
	 });
 
	
	/* ==============================================
		 MIXITUP PORTFOLIO
	 =============================================== */	
	 //Mixitup

	 var containerEl = document.querySelector('.projects-container');

	 var mixer = mixitup(containerEl, {
		 controls: {
			 toggleLogic: 'and'
		 }
	 });

	 
	 /* ==============================================
		 MAGNIFIC POPUP
	 =============================================== */	
	 $('.popup').magnificPopup({
		 type: 'image',
		 gallery: {
			 enabled: true
		 },
	 });
  
	  /* ==============================================
		 PARALLAX
	 =============================================== */	
	 
	 // Only load parallax when not on mobile devices
	 if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 $('.image1').parallax("0%", -0.3);
		 $('.image2').parallax("0%", -0.3);
		 $('.image3').parallax("0%", -0.3); 
	 }
 
	 
		/* ==============================================
		NAV
	=============================================== */	
	$("#nav").sticky({
		topSpacing: 0
	});
 });
 $(document).ready(function() {
    function initOnePageNav() {
        var scrollSpeed = window.innerWidth < 768 ? 1000 : 0;

        $('.home-nav').onePageNav({
            scrollSpeed: scrollSpeed,
            currentClass: 'active',
            changeHash: true,
        });
    }

    initOnePageNav();

    $(window).on('resize', function() {
        initOnePageNav();
    });
});




 
	 
 $(window).load(function() {
	 'use strict';
	 
	 /* ==============================================
		 PAGE LOADER
	 =============================================== */
	 
	 $(".loader-item").delay(7000).fadeOut();
	 $("#pageloader").delay(12000).fadeOut("slow");
	 
 });