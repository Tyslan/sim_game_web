// public/js/appRoutes.js
angular
  .module('SimGameApp')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        // home page
        .state('home', {
          url: '/home',
          templateUrl: '/views/home.html',
          controller: 'MainController',
          controllerAs: 'vmMain'
    });

    $urlRouterProvider.otherwise('home');
    $locationProvider.html5Mode(true);

  }]);
