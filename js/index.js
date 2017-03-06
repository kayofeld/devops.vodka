var VodkaApp = angular.module('VodkaApp', ['ngMaterial']);

VodkaApp.controller('IndexCtrl', function ($scope, $http) {
    // Let's declare some languages for my curriculum
    $scope.CV = [["fr", "assets/cv/cv.fr.pdf", "assets/imgs/fr.png"],
		 ["en", "assets/cv/cv.en.pdf", "assets/imgs/en.png"]];
    
});
