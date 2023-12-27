document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("cookie-message"),t=document.getElementById("agree-button");localStorage.getItem("cookie-agreed")||(n.style.display="block");t.addEventListener("click",function(){n.style.display="none";localStorage.setItem("cookie-agreed","true")})});$("#educational-materials .wrapper .col-md-3").hide();$("#educational-materials .video-block__more").click(function(){var t=$(this).parent().data("target"),n;$("#"+t+" .col-md-3").slideToggle();n=$(this).text()=="Подробнее"?"Скрыть":"Подробнее";$(this).text(n)});document.addEventListener("fullscreenchange",function(){var t=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement,n;t||(n=document.getElementById("about"),n.scrollIntoView({behavior:"smooth"}))});jQuery(document).ready(function(n){"use strict";function t(){var t=n(window).width(),i=n("#mmenu-side-menu").length;t<760&&i<1&&(n("#side-menu").clone(!0).attr("id","mmenu-side-menu").mmenu({position:"right",zposition:"front"}),n("#mmenu-side-menu ul").removeClass("nav navbar-nav navbar-right"))}function i(){var t=n(window).width();t<992?(n("#nav .container").addClass("container-fluid"),n("#nav .container").removeClass("container")):(n("#nav .container-fluid").addClass("container"),n("#nav .container-fluid").removeClass("container-fluid"))}function r(){var t;n(".fact-number").each(function(){t=n(this).attr("data-perc");n(this).find(".factor").delay(6e3).countTo({from:10,to:t,speed:1e3,refreshInterval:10})})}Modernizr.load({test:Modernizr.input.placeholder,nope:"js/placeholder.js",complete:function(){Modernizr.input.placeholder||n("input, textarea").placeholder()}});Modernizr.cssanimations||n(".btn").addClass("btn-noanimated");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?n(".animated").addClass("visible"):n(".animated").waypoint(function(){n(this).each(function(){var t=n(this).attr("data-animation");n(this).addClass(t);n(this).addClass("visible")})},{offset:"70%",triggerOnce:!0});n("#about").waypoint(function(){n("#about .progress-bar").each(function(){var t=n(this).attr("data-value")+"%";n(this).css("width",t)})},{offset:"70%",triggerOnce:!0});t();i();n(window).resize(function(){t();i()}),function(n){n.fn.countTo=function(t){t=n.extend({},n.fn.countTo.defaults,t||{});var i=Math.ceil(t.speed/t.refreshInterval),r=(t.to-t.from)/i;return n(this).each(function(){function s(){u+=r;e++;n(f).html(u.toFixed(t.decimals));typeof t.onUpdate=="function"&&t.onUpdate.call(f,u);e>=i&&(clearInterval(o),u=t.to,typeof t.onComplete=="function"&&t.onComplete.call(f,u))}var f=this,e=0,u=t.from,o=setInterval(s,t.refreshInterval)})};n.fn.countTo.defaults={from:0,to:100,speed:1e3,refreshInterval:100,decimals:0,onUpdate:null,onComplete:null}}(jQuery);n(".fact-number").waypoint(function(){r()},{offset:"70%",triggerOnce:!0});n(document).ready(function(){function r(){i.trigger("to.owl.carousel",0)}function t(n){var t=n[0].getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function t(n){var t=n[0].getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}n("#quote-slider").owlCarousel({items:1,loop:!0,autoplay:!0,autoplayTimeout:15e3});var i=n("#slides ul").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",items:1,margin:0,loop:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,dots:!0,stagePadding:0,smartSpeed:1e3});n('li.active a[href="#slides"]').on("click",function(n){n.preventDefault();r()});n(window).on("scroll",function(){t(n("#slides ul"))&&n("#slides ul").trigger("to.owl.carousel",[0])});n(window).on("scroll",function(){t(n("#quote-slider"))&&n("#quote-slider").trigger("to.owl.carousel",[0])})});n("#clients-slider").owlCarousel({dots:!1,responsive:{0:{items:1},420:{items:2},768:{items:3},1e3:{items:5},1400:{items:6},1600:{items:7}}});jQuery('[data-toggle~="tooltip"]').tooltip({container:"body"});var u=document.querySelector(".projects-container"),f=mixitup(u,{controls:{toggleLogic:"and"}});n(".popup").magnificPopup({type:"image",gallery:{enabled:!0}});/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n(".image1").parallax("0%",-.3),n(".image2").parallax("0%",-.3),n(".image3").parallax("0%",-.3));n("#nav").sticky({topSpacing:0})});$(document).ready(function(){function n(n){$(".home-nav").onePageNav({scrollSpeed:n,currentClass:"active",changeHash:!0})}var t=window.innerWidth<768?800:0;n(t);$(window).on("resize",function(){var t=window.innerWidth<768?800:0;n(t)})});$(window).load(function(){"use strict";$(".loader-item").delay(7e3).fadeOut();$("#pageloader").delay(12e3).fadeOut("slow")});document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("quote-section"),t=n.getAttribute("data-bg"),i=new Image;i.setAttribute("data-src",t);i.onload=function(){n.style.backgroundImage="url("+t+")";n.style.backgroundPosition="center center";n.style.backgroundAttachment="fixed"};i.src=t});