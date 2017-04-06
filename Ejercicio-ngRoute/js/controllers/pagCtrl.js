app.controller('pagCtrl', function($scope, $http) {
	$scope.myData=[];
	$scope.setActive('cPagina1');

	$http.get("personas.php").then(function (response) {
    	$scope.myData = response.personas;
  	}).catch(function(respuesta){
  		console.log(respuesta);
  		$scope.error="No";
  	})
});