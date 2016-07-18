// public/js/controllers/AuthController.js
angular
    .module('SimGameApp')
    .factory('auth', authFactory);

authFactory.$inject = ['$http', '$window', '$state'];

function authFactory($http, $window, $state) {
    var auth = {};

    auth.saveToken = function (token) {
        $window.localStorage['sim-cité-web-token'] = token;
    };

    auth.getToken = function () {
        return $window.localStorage['sim-cité-web-token'];
    };

    auth.isLoggedIn = function () {
        var token = auth.getToken();

        if (token) {
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };

    auth.currentUser = function () {
        if (auth.isLoggedIn()) {
            var token = auth.getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.username;
        }
    };

    auth.register = function (user) {
        return $http.post('/register', user).success(function (data) {
            auth.saveToken(data.token);
        });
    };

    auth.logIn = function (user) {
        return $http.post('/login', user).success(function (data) {
            auth.saveToken(data.token);
        });
    };

    auth.logOut = function () {
        $window.localStorage.removeItem('sim-cité-web-token');
        $state.go('home');
    };

    return auth;
}
