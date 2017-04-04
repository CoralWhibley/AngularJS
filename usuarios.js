var app1 = angular.module('app1', []);
app1.controller('usuarioCtrl', function($scope) {
  $scope.personas = [{'nombre':"Coral",'pass':"pass1"},{'nombre':"User1",'pass':"pass1"}];
});
