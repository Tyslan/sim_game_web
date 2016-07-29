// public/js/services/buildingService.js
angular
    .module('SimGameApp')
    .factory('BuildingService', BuildingService);

function BuildingService($http) {
    return {
        // call to get all nerds
        get: function () {
            return $http.get('/api/buildings');
        },

        getById: function (id) {
            return $http.get('/api/buildings/' + id);
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create: function (buildingData) {
            return $http.post('/api/buildings', buildingData);
        },

        // call to DELETE a nerd
        delete: function (id) {
            return $http.delete('/api/buildings/' + id);
        }
    };
}
