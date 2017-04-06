app.controller('pagCtrl',['$scope', '$http', function($scope, $http) {
	$scope.myData=[];
	$scope.setActive('cPagina1');

	$http.get('personas.json').then(function (response) {
    	$scope.myData = response.menu;
  	}).catch(function(respuesta){
  		$scope.error = "No se ha encontrado el array.";
  	})
}]);