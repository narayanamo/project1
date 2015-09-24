var app = angular.module('food');

app.controller('andhraCtrl', function($scope,andhraService){
    $scope.itemsData = andhraService.andhraData;
    
       
               })