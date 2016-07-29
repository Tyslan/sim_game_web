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
          controller: 'HomeController',
          controllerAs: 'vmMain'
        })
        .state('login', {
          url: '/login',
          templateUrl: '/views/login.html',
          controller: 'AuthController',
          controllerAs: 'vmAuth',
          onEnter: ['$location', 'auth', function ($location, auth) {
            if (auth.isLoggedIn()) {
              $location.url('/home');
            }
          }]
        })
        .state('register', {
          url: '/register',
          templateUrl: '/views/register.html',
          controller: 'AuthController',
          controllerAs: 'vmAuth',
          onEnter: ['$location', 'auth', function ($location, auth) {
            if (auth.isLoggedIn()) {
              $location.url('/home');
            }
          }]
        })
        .state('addBuilding', {
          url: '/addBuilding',
          templateUrl: '/views/addBuilding.html',
          controller: 'AddBuildingController',
          controllerAs: 'vmAddBuilding'
        })
        .state('Buildings', {
          url: '/buildings',
          templateUrl: '/views/buildings.html',
          controller: 'BuildingController',
          controllerAs: 'vmBuilding'
        })
        .state('Cities', {
          url: '/cityOverview',
          templateUrl: '/views/cities.html',
          controller: 'CityController',
          controllerAs: 'vmCity'
        })
    ;

    $urlRouterProvider.otherwise('home');
    $locationProvider.html5Mode(true);

  }]);
