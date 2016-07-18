// public/js/controllers/AddBuildingController.js
angular
    .module('SimGameApp')
    .controller('AddBuildingController', AddBuildingController);

function AddBuildingController(BuildingService, auth) {
    var vmAddBuilding = this;
    vmAddBuilding.Building = {};

    vmAddBuilding.addBuilding = function () {
        // vmAddBuilding.Building.name = vmAddBuilding.name;
        // vmAddBuilding.Building.description = vmAddBuilding.description;
        // vmAddBuilding.Building.basePopulation = vmAddBuilding.basePopulation;
        // vmAddBuilding.Building.baseTourists = vmAddBuilding.baseTourists;
        // vmAddBuilding.Building.baseIncome = vmAddBuilding.baseIncome;
        // vmAddBuilding.Building.turnPopulation = vmAddBuilding.turnPopulation;
        // vmAddBuilding.Building.turnTourists = vmAddBuilding.turnTourists;
        // vmAddBuilding.Building.turnIncome = vmAddBuilding.turnIncome;
        // vmAddBuilding.Building.price = vmAddBuilding.price;

        console.log(vmAddBuilding.Building);

        BuildingService.create(vmAddBuilding.Building)
            .success(function () {
                vmAddBuilding.succes = 'Bâtiment ajouté';
            })
            .error(function(error){
                vmAddBuilding.error = error;
            });
    };
}
