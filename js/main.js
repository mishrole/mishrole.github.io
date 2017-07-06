$(document).ready(function() {

	// Scroll Effect (Large)

	$('.scroll').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

	// Menu Effect (Large)

	const home = $('#home').offset().top;
	const projects = $('#projects').offset().top;
	const about = $('#about').offset().top - 40;
	const menu = $('.menu-list');

	$('.hamburguer-container, .menu-lnk').on('click', function() {
		//$('.menu-content').fadeToggle('slow');


		$('.hamburguer-container').toggleClass('open');

		if(menu.css('right') == '-500px'){
			menu.animate({right: '30vw'});
			$('.menu-content').fadeIn();
		}else{
			menu.animate({right: '-500px'});
			$('.menu-content').fadeOut();
		}
	});

	// Nav effect on scroll

	$(document).scroll(function() {

		//$('.menu-list').fadeOut();

		const scrollPos = $(document).scrollTop();

		if(scrollPos >= home && scrollPos < about) {
			//$('.nav-fixed').css('background-color', 'transparent')
			$('.nav-fixed').css('display', 'none')
			$('.hamburguer-container span').css('background', 'white');
			$('.menu-lnk').css('color', 'white');
			$('.logo-container').css('filter','invert(0)');
		}else if(scrollPos >= (about) && scrollPos < projects) {
			//$('.nav-fixed').css('background-color', '#212121');
			$('.nav-fixed').css('display', 'block')
			$('.nav-fixed').css('background-color', 'white');
			$('.logo-container').css('filter','invert(100%)');
			$('.menu-lnk').css('color', '#333333');
			$('.hamburguer-container span').css('background', '#333333');
		}else if(scrollPos >= projects) {
			//$('.nav-fixed').css('background-color', '#333');
		}
	});
});