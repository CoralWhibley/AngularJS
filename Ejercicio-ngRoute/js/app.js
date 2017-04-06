var app = angular.module('routeApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', function($scope){


	$scope.navbar="parciales/navbar.html";


	$scope.setActive=function(Opcion){
		$scope.cHome="";
		$scope.cPagina1="";
		$scope.cContacto="";

		$scope[Opcion] = "active";
	}
}])