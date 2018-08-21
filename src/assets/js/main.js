(function ($) {
	'use strict';
	
	/*++++++++++++++++++++++++
	-----Preloader Effect-----	    
	++++++++++++++++++++++++++*/
	$(window).on('load', function() { 
		$('#status').fadeOut();
		$('#preloader').delay(900).fadeOut('slow');
		$('body').delay(900).css({'overflow':'visible'});
		$( ".filter-list li:nth-child(1)" ).trigger( "click" )//isotope
	});
	
	/*++++++++++++++++++++
	-----One Page Nav-----	    
	++++++++++++++++++++++*/
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});

	/*++++++++++++++++++++++++++++
	-----Modal Carousel-----	    
	++++++++++++++++++++++++++++++*/
	var modalCarousel = $(".modal-carousel");
	modalCarousel.owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:4000,
	});

	
	/*++++++++++++++++++++++++
	-----Portfolio Sorter-----	    
	++++++++++++++++++++++++++*/
	$(".project-container").isotope({
		itemSelector: '.project-item'
	}); 
	var filterlistli = $(".filter-list li");
	filterlistli.on( 'click', function() { 
		filterlistli.removeClass("active");
		$(this).addClass("active");        

			var selector = $(this).attr('data-filter'); 
			$(".project-container").isotope({ 
				filter: selector, 
				animationOptions: { 
					duration: 750, 
					easing: 'linear', 
					queue: false, 
				} 
			}); 
			return false; 
	}); 
	
	/*+++++++++++++++++++++++
	-----For Image PopUp-----	    
	+++++++++++++++++++++++++*/
	$('.image-popup-link').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-with-zoom',
	  zoom: {
		enabled: true,
		duration: 300,
		easing: 'ease-in-out',
		opener: function(openerElement) {
		  return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	  }
	});
	
	/*++++++++++++++++++++++++
	-----Sticky Menu Code-----	    
	++++++++++++++++++++++++++*/
	jQuery(window).bind('scroll', function() {

		 if (jQuery(window).scrollTop() > 0) {
			 jQuery('.nav-bar-area').addClass('fixed-top');
		 }
		 else {
			 jQuery('.nav-bar-area').removeClass('fixed-top');

		 }
	});
	   
	/*++++++++++++++++++++++++++++++++++++++++++++
	-----Important for hover on mobile device-----	    
	+++++++++++++++++++++++++++++++++++++++++++++*/
	$(document).on("touchstart", function (e) {
		var link = $('.single-service'); //preselect the link
		if (link.hasClass('hover')) {
			link.removeClass('hover');
		 } 
	});
	   
	/*+++++++++++++++++++++++
	-----Particle Effect-----	    
	+++++++++++++++++++++++++*/
	document.addEventListener('DOMContentLoaded', function () {
	  particleground(document.getElementById('home'), {
		dotColor: '#fff',
		density: 10000,
		lineColor: '#fff'
		
	  });
	}, false);
	
	
})(jQuery);

