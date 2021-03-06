(function(){
	'use strict';
	var invoiceApp = angular.module('invoiceApp', ['ngRoute']);

	invoiceApp.config(['$locationProvider', function($locationProvider) {
  		$locationProvider.hashPrefix('');
	}]);

	invoiceApp.config(function($routeProvider){
		$routeProvider.when('/',{
			controller: 'DashboardController',
			templateUrl: 'views/dashboard.html'
		})
		.when('/customers',{
			controller: 'CustomersController',
			controllerAs: 'vm',
			templateUrl: 'views/customers.html'
		})
		.when('/customers/details/:id',{
			controller: 'CustomersController',
			controllerAs: 'vm',
			templateUrl: 'views/customer_details.html'
		})
		.when('/invoices',{
			controller: 'InvoicesController',
			controllerAs: 'vm',
			templateUrl: 'views/invoices.html'
		})
		.when('/invoices/details/:id',{
			controller: 'InvoicesController',
			controllerAs: 'vm',
			templateUrl: 'views/invoice_details.html'
		})
		.when('/customers/add', {
			controller: 'CustomersController',
			controllerAs: 'vm',
			templateUrl: 'views/add_customer.html'
		})
		.when('/invoices/add', {
			controller: 'InvoicesController',
			controllerAs: 'vm',
			templateUrl: 'views/add_invoice.html'
		})
		.when('/customers/edit/:id',{
			controller: 'CustomersController',
			controllerAs: 'vm',
			templateUrl: 'views/edit_customer.html'
		})
		.when('/invoices/edit/:id',{
			controller: 'InvoicesController',
			controllerAs: 'vm',
			templateUrl: 'views/edit_invoice.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	});

})();
