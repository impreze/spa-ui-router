var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
		.state('home', {
			abstract: true
			, url: '/'
			, templateUrl: 'views/spa-module.html'
			, controller: 'mainController'

		})
		.state('home.page1', {
			url: ''
			, templateUrl: 'views/page1.html'
			, controller: 'p1Controller'
		})
		.state('home.page2', {
			url: 'page2'
			, templateUrl: 'views/page2.html'
			, controller: 'p2Controller'
		})
		.state('home.page3', {
			url: 'page3'
			, templateUrl: 'views/page3.html'
			, controller: 'p3Controller'
		})



}); // closes $routerApp.config()


routerApp.controller('mainController', ['$scope', function ($scope) {
	$scope.appName = "SPA Module";
	$scope.footer = "- by Impreze";
}]);

routerApp.controller('p1Controller', ['$scope', function ($scope) {

	$scope.lead = 'Skeleton UI for a SPA module. Uses Twitter Bootstrap for framework/styling, and AngularJS and Angular UI Router for Application functionality.';


}]);

routerApp.controller('p2Controller', ['$scope', function ($scope) {
	$scope.header = 'And of course, the Lorum ipsum';
	$scope.content = 'Lorem ipsum dolor sit amet, eum ne minimum constituto, adhuc saepe evertitur id usu. Qui stet ceteros suscipiantur te, animal appellantur ne vel, nec fugit placerat an. Eum ferri mutat altera eu, vitae accumsan adipiscing ei usu. No pri doming prodesset, lorem accumsan tincidunt his an. Appareat vulputate conclusionemque ius ex.';


}]);

routerApp.controller('p3Controller', ['$scope', function ($scope) {
	$scope.header = 'Some more the Lorum ipsum';
	$scope.content = "Vix ne idque tritani, no mei modo noster tritani. Justo aliquid aliquam in vix, vim quem noster neglegentur no. Et atqui civibus eos, voluptua indoctum qualisque ea sit. Ei vim quaeque complectitur, sea iuvaret praesent repudiandae ei, has mollis accusamus democritum ne. Postea doming putant at eam, veri sale duo ut, eum ad vocibus appareat adolescens. Te dicta labore insolens nam.";


}]);