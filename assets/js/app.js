var movieApp = angular.module('movieApp', ['ngRoute']);

       movieApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: '.../../pages/home.html',
            controller: 'movieListCtrl',
          }).
          when('/search/:movieSearch', {
            templateUrl: '.../../pages/home.html',
            controller: 'movieSearchCtrl'
          }).
          when('/popular/', {
            templateUrl: '.../../pages/home.html',
            controller: 'moviePopularCtrl'
          }).
          when('/genre/:movieGenre', {
            templateUrl: '.../../pages/home.html',
            controller: 'movieGenreCtrl'
          }).
          when('/movies/:movieName', {
            templateUrl: '.../../pages/detail.html',
            controller: 'movieDetailCtrl'
          }).
          when('/watch/:movieId', {
            templateUrl: '.../../pages/watch.html',
            controller: 'movieWatchCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });

      });      
      movieApp.controller('movieSearch', function ($scope, $window){
         $scope.ngsearch = function() {
          $window.location.href = '#/search/' + $scope.search;

          }
      });
      movieApp.controller('movieListCtrl', function ($scope, $http){
        $http.get('http://api.mypopcorn.ga/movies/0').success(function(movies) {
          $scope.movies = movies;
        });
      });
      movieApp.controller('movieSearchCtrl', function ($scope, $http, $routeParams){
        $http.get('http://api.mypopcorn.ga/search/' + $routeParams.movieSearch).success(function(movies) {
          $scope.movies = movies;
        });
      });
      movieApp.controller('moviePopularCtrl', function ($scope, $http, $routeParams){
        $http.get('http://api.mypopcorn.ga/popular/0').success(function(movies) {
          $scope.movies = movies;
        });
      });
      movieApp.controller('movieDetailCtrl', function ($scope, $http, $routeParams){
        $http.get('http://api.mypopcorn.ga/movie/' + $routeParams.movieName).success(function(movies) {
          $scope.movies = movies;
        });
      });
      movieApp.controller('movieGenreCtrl', function ($scope, $http, $routeParams){
        $http.get('http://api.mypopcorn.ga/genre/' + $routeParams.movieGenre).success(function(movies) {
          $scope.movies = movies;
        });
      });
      movieApp.controller('movieWatchCtrl', function ($scope, $http, $routeParams){
        $http.get('http://api.mypopcorn.ga/movie/' + $routeParams.movieId).success(function(movies) {
          $scope.movies = movies;
          
        });
      });

