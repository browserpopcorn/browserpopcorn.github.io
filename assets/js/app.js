document.addEventListener('DOMContentLoaded', function() {
	var load_movies = function() {
		$('.loading').fadeIn(300);
		var url = 'http://api.browserpopcorn.biz/movies/' + window.page + '/';
		if (window.genre != '') {
			url += genre.toLowerCase() + '/';
		}
		if (window.query != '') {
			url += '?query=' + query;
		}
		$.get(url, function(data) {
			$('.loading').fadeOut(300);
			window.pages = data.pages;
			$.each(data.movies, function(i, item) {
				$('.movies').append('<div class="movie hidden" data-id="' + item.id + '"><div class="poster"><div class="eye"><i class="fa fa-eye"></i></div><img src="' + item.poster + '" /></div><div class="title">' + item.title + '</div><div class="year">' + item.year + '</div></div>');
				setTimeout(function() {
					$('.movie[data-id="' + item.id + '"]').removeClass('hidden');
				}, (i + 1) * 150);
			});
		}).fail(function() {
			alert('Error loading data...');
			$('.loading').fadeOut(300);
		});
	};
	var load_movie = function(id) {
		$('.loading').fadeIn(300);
		var url = 'http://api.browserpopcorn.biz/movie/' + id + '/';
		$.get(url, function(movie) {
			$('.loading').fadeOut(300);
			var stream = movie.links[array_rand(movie.links)];
			$('.single .poster img').attr('src', movie.poster);
			$('.single .watch-button').attr('data-id', id);
			$('.single .watch-button').attr('data-stream', stream);
			$('.single .imdb-button').attr('href', 'http://www.imdb.com/title/' + movie.imdbID + '/');
			$('.single .title').html(movie.title);
			$('.single .year').html(movie.year);
			$('.single .plot p').html(movie.plot);
			$('.single').addClass('active');
			$('.single-darken').fadeIn(300);
		});
	};
	$(document).ready(function() {
		window.genre = '';
		window.query = '';
		window.page = 1;
		window.pages = -1;
		load_movies();
		setTimeout(function() {
			$('.advertisement').fadeIn(300);
		}, 3000);
		$('.advertisement .close').click(function() {
			$('.advertisement').fadeOut(300);
		});
		$('input').on('keyup', function(e) {
			if (e.keyCode == 13) {
				window.query = $(this).val();
				window.page = 1;
				window.pages = -1;
				$('.movies').html('');
				load_movies();
			}
		});
		$('.main').scroll(function(){
			if($(this)[0].scrollHeight - $(this).scrollTop() === $(this).outerHeight()) {
				if(window.page < window.pages || window.pages < 0) {
					window.page++;
					load_movies();
				}
			};
		});
		$('.sidebar a').click(function() {
			$('.sidebar a.active').removeClass('active');
			$(this).addClass('active');
			window.genre = $(this).html().toLowerCase();
			if (window.genre == 'popular') {
				window.genre = '';
			}
			window.page = 1;
			window.pages = -1;
			$('.movies').html('');
			load_movies();
		});
		$('.movies').on('click', '.movie', function() {
			var id = $(this).attr('data-id');
			load_movie(id);
		});
		$('.single .close').click(function() {
			$('.single').removeClass('active');
			$('.single-darken').fadeOut(300);
		});
		$('.single .watch-button').click(function() {
			var stream = $(this).attr('data-stream');
			$('.video-wrapper').html('<iframe src="' + stream.replace('640x360', $(window).width() + 'x' + $(window).height()) + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="' + $(window).width() + '" height="' + $(window).height() + '" allowtransparency="true"></iframe>');
			$('.player').fadeIn(300);
			$('.single .close').click();
		});
		$('.player .close').click(function() {
			$('.video-wrapper').html('');
			$('.player').fadeOut(300);
		});
	});
}, false);