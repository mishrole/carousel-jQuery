$(document).ready(function(){

	var carousel = $('.carousel');
	var left = $('#btn-left');
	var right = $('#btn-right');

	$('.carousel div:last').insertBefore('.carousel div:first');
	carousel.css('margin-left', '-'+100+'%');

	function next(){
		carousel.animate({marginLeft:'-'+200+'%'},700,function(){
			$('.carousel div:first').insertAfter('.carousel div:last');
			carousel.css('margin-left', '-'+100+'%');
		});
	}

	function previous(){
		carousel.animate({marginLeft:0},700,function(){
			$('.carousel div:last').insertBefore('.carousel div:first');
			carousel.css('margin-left', '-'+100+'%');
		});
	}

	right.on('click', function(){
		next();
	})

	left.on('click', function(){
		previous();
	})

	var timer = setInterval(function(){
		next();
	},5000);

	$('.img-1').on('click', function(){

	});

	/*

	$('.carousel > .images').hover(function(){
		$('.buttons').css('display', 'block');

		$('.buttons').hover(function(){
			$('buttons').css('display', 'block');
		});

	}, function(){
		$('.buttons').css('display', 'none');
	});

	*/

});
