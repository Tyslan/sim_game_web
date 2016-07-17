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
    ;

    $urlRouterProvider.otherwise('home');
    $locationProvider.html5Mode(true);

  }]);
