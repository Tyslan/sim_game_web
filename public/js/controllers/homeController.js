// public/js/controllers/homeController.js
angular
    .module('SimGameApp')
    .controller('HomeController', HomeController);

function HomeController(auth) {
    var vmMain = this;
    vmMain.tagline = 'Nerd approved movies and series';
    vmMain.isLoggedIn = auth.isLoggedIn;
}
