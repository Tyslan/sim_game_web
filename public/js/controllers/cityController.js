// public/js/controllers/CityController.js
angular
    .module('SimGameApp')
    .controller('CityController', CityController);

function CityController(CityService, auth) {
    var vmCity = this;

    CityService.get().then(function (response) {
      vmCity.cities = response.data;
      vmCity.citiesIsEmpty = vmCity.cities.length === 0;
    });

    vmCity.loadData = function(){
      CityService.get().then(function (response) {
        vmCity.cities = response.data;
        vmCity.citiesIsEmpty = vmCity.cities.length === 0;
      });
    };
}
