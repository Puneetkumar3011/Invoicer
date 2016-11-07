(function(){
	'use strict';
	var invoiceApp = angular.module("invoiceApp");

	invoiceApp.controller('DashboardController', ['$scope', '$http','$location', function($scope, $http,$location){
		console.log('Dashboard Controller Initialized...');
	}]);

})();
