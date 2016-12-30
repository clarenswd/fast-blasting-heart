'use strict';

/**
 * @ngdoc overview
 * @name fatHeartApp
 * @description
 * # fatHeartApp
 *
 * Main module of the application.
 */
angular
  .module('fatHeartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
      // enable html5Mode for pushstate ('#'-less URLs)
     $locationProvider.html5Mode(true);
     $locationProvider.hashPrefix('!');

  }]);
