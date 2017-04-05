app.config( function($routeProvider){

	$routeProvider
		.when("/",{
			templateUrl: 'parciales/home.html',
			controller: 'homeCtrl'
		})
		.when("/pagina1",{
			templateUrl: 'parciales/pagina1.html',
			controller: 'pagCtrl'
		})
		.when("/contacto",{
			templateUrl: 'parciales/contacto.html',
			controller: 'contactoCtrl'
		})
		.otherwise({
			redirectTo: 'parciales/home.html'
		});

});