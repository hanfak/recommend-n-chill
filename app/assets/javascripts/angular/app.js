var recommendNChill = angular.module('recommendNChill', ['ngRoute']);

  recommendNChill.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    return $routeProvider
      .when('/', {
        templateUrl: '../templates/list.html',
        controller: 'movieListController'
      });
  });
