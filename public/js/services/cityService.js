// public/js/services/cityService.js
angular
    .module('SimGameApp')
    .factory('CityService', CityService);

function CityService($http) {
    return {
        // call to get all nerds
        get: function () {
            return $http.get('/api/cities');
        },

        getById: function (id) {
            return $http.get('/api/cities/' + id);
        }
    };
}
