// public/js/controllers/BuildingController.js
angular
    .module('SimGameApp')
    .controller('BuildingController', BuildingController);

function BuildingController(BuildingService, auth) {
    var vmBuilding = this;

    BuildingService.get().then(function (response) {
      vmBuilding.buildings = response.data;
      console.log(vmBuilding.buildings);
    });
}
