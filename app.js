var app = angular.module('food',['ngRoute','ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'STATES/States.html',
        controller:'statesCtrl'
    })
    .when('/Tamilnadu',{
        templateUrl: 'STATES/Tamilnadu.html',
        controller: 'tamilnaduCtrl'
    })
    .when('/Andhra',{
        templateUrl: 'STATES/Andhra.html',
        controller:'andhraCtrl'
    })
    .when('/SignUp',{
        templateUrl:'signup.html'
    })
//    .otherwise({
//        redirectTo: '/'
//    })
});