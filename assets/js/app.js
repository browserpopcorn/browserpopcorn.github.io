var movieApp = angular.module('movieApp', ['ngRoute']);
	
       movieApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: '.../../pages/movies.html',
            controller: 'movieListCtrl',
          }).
          when('/series/', {
            templateUrl: '.../../pages/series.html',
            controller: 'serieListCtrl',
          }).
          when('/genre/:movieGenre', {
            templateUrl: '.../../pages/movies.html',
            controller: 'movieGenreCtrl'
          }).
          when('/search/:movieSearch', {
            templateUrl: '.../../pages/movies.html',
            controller: 'movieSearchCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });

    });
    movieApp.controller('movieListCtrl', function ($scope, $http){
        $http.get('http://api.mypopcorn.ga/movies/0').success(function(movies) {
          $scope.movies = movies;
        }).error(function (response, status) {
          console.log(response);    
        });
   	});
   	movieApp.controller('serieListCtrl', function ($scope, $http){
        $http.get('http://api.mypopcorn.ga/movies/0').success(function(movies) {
          $scope.movies = movies;
        }).error(function (response, status) {
          console.log(response);    
        });
   	});
    movieApp.controller('movieSearchCtrl', function ($scope, $http, $routeParams){
        $http.get('http://api.mypopcorn.ga/search/' + $routeParams.movieSearch).success(function(movies) {
          $scope.movies = movies;
        }).error(function (response, status) {
          console.log(response);    
        });
      });
    movieApp.controller('movieGenreCtrl', function ($scope, $http, $routeParams){
        $http.get('http://api.mypopcorn.ga/genre/' + $routeParams.movieGenre).success(function(movies) {
          $scope.movies = movies;
        }).error(function (response, status) {
          console.log(response);    
        });
      });
    movieApp.controller('movieShow', function ($scope, $http, $sce){
        $scope.showIn = function(movieName) {
        $('#overlay').fadeIn('slow');
        $('#item-detail').fadeIn('slow');
        $http.get('http://api.mypopcorn.ga/movie/' + movieName).success(function(filmes) {
        $scope.filmes = filmes;
        var movie = filmes[0];
        $scope.url = $sce.trustAsResourceUrl(movie.embed);
        $scope.youtube = $sce.trustAsResourceUrl(movie.youtube);
        }).error(function (response, status) {
          console.log(response);    
        });       
        }
        $scope.showPlayer = function() {
          $('#item-detail').fadeOut('slow');
          $('#item-player').fadeIn('slow');
        }
        $scope.showTrailer = function() {
          $('#item-detail').fadeOut('slow');
          $('#item-youtube').fadeIn('slow');
        }      
    });
    movieApp.controller('movieSearch', function ($scope, $window){
        $scope.ngsearch = function() {
        $window.location.href = '#/search/' + $scope.search;
        }
    });
    function hideElm(name){
      $('#' + name).fadeOut('slow');
    }
    function showElm(name){
       $('#' + name).fadeIn('slow');
    }