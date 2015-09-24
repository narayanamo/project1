var app = angular.module('food');

app.controller('tamilnaduCtrl', function($scope,
                                         tamilService){
     
        $scope.itemsData = tamilService.foodData;
    
    
    

})