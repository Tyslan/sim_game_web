// public/js/controllers/AddBuildingController.js
angular
    .module('SimGameApp')
    .controller('AddBuildingController', AddBuildingController);

function AddBuildingController(BuildingService, auth) {
    var vmAddBuilding = this;
    vmAddBuilding.Building = {};

    vmAddBuilding.addBuilding = function () {
        BuildingService.create(vmAddBuilding.Building)
            .success(function () {
                vmAddBuilding.succes = 'Bâtiment ajouté';
            })
            .error(function(error){
                vmAddBuilding.error = error;
            });
    };
}
