$(document).ready(function() {

	// Materialize tools (Initialization)

	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.tooltipped').tooltip({delay: 50});

	// Scroll Effect

	$('.scroll').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

	// Menu Effect (Large)

	const home = $('#home').offset().top;
	const projects = $('#projects').offset().top - 25;
	const about = $('#about').offset().top - 25;
	const contact = $('#contact').offset().top - 25;
	const menu = $('.menu-list');

	$('.hamburguer-container, .menu-lnk').on('click', function() {
		//$('.menu-content').fadeToggle('slow');

		$('.hamburguer-container').toggleClass('open');

		if(menu.css('right') == '-250px'){
			menu.animate({right: '50%'});
			$('.menu-content').fadeIn();
		}else{
			menu.animate({right: '-250px'});
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
			$('.menu-lnk').css('color', '#c4c4c4');
			$('.hamburguer-container span').css('background', '#333333');
			$('.about').css('color', '#333');

			// let count = 1;
/*			$('.cards').each(function() {
				console.log(count)
				$(this).delay(time).addClass('bounce'+count);
				count += 1;
				// $(this).delay(time).css('animation', 'bounce linear 0.8s');
				time += 1500;
			})*/

		}else if(scrollPos >= projects && scrollPos < contact) {

			$('.menu-lnk').css('color', '#c4c4c4');
			$('.projects').css('color', 'white');
			$('.nav-fixed').css('background-color', '#212121');
			$('.logo-container').css('filter','invert(0)');
			$('.hamburguer-container span').css('background', 'white');

		}else if(scrollPos >= contact) {
			$('.nav-fixed').css('display', 'block')
			$('.nav-fixed').css('background-color', 'white');
			$('.logo-container').css('filter','invert(100%)');
			$('.menu-lnk').css('color', '#c4c4c4');
			$('.hamburguer-container span').css('background', '#333333');
			$('.contact').css('color', '#333');

/*			let time = 0;

			$('.appear').each(function() {
			    $(this).delay(time).fadeIn(1000);
			    time += 1500;
			});*/
		}
	});

	$('.ghost').on('click', function() {
		$('#contact').css('display', 'block');
		$('.contact-content').css('padding-top', '28.5vh');
		$('.ghost-container').addClass('up');
		$('.ghost-container').fadeOut(500);

		// $('.social-item').each(function() {
		// 	$(this).addClass('appear');
		// })	

		let time = 0;

		$('.appear').each(function() {
		    $(this).delay(time).fadeIn(1000);
		    time += 1000;
		});
		// $('.social').fadeIn(1500);
	})

	// FadeIn elements (one after another)


/*	var time = 0;
	$('.appear').each(function() {
	    $(this).delay(time).fadeIn(1000);
	    time += 1000;
	});
*/

/*	$('.about-img').hover(function() {
		$(this).toggleClass('filter');
	})*/
});