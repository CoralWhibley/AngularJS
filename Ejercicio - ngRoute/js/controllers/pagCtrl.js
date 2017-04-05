app.controller('pagCtrl', ['$scope', '$http', function($scope, $http){

	
	$http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').success(function (data) {
		$scope.geo = data.found;

	});

	$scope.setActive('cPagina1');
}]);