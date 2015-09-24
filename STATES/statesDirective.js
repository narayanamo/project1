var app = angular.module('food');
app.directive('statesDirective',function() {
    return {
        scope: {
            name: '@'
        },
        template: '{{name}}'
    };
});
app.directive('link',fuction() {
              return {
              restrict: 'A',
              link: function(scope,elem,attrs) {
           elem.on('click',function() {
               elem.html('you Clicked me!');
           });
    elem.on('mouseover',function() {
        elem.css('background-color','yellow');
    });
    elem.on('mouseleave',function() {
        elem.css('background-color','white');
    });
}
              
    
              }
              });
    