(function(){
	'use strict';
	angular.module("invoiceApp")
		.controller('CustomersController', CustomersController);
	
	CustomersController.$inject = ['$rootScope', '$scope', '$http','$location','$routeParams'];
	function CustomersController($rootScope, $scope, $http,$location, $routeParams) {
		console.log('Customer Controller Initialized...');
		/* variables */
		var vm = this;
		vm.testCtrl = 'test';
		/* controller interface*/
		vm.getCustomers = getCustomers;
		vm.getCustomer = getCustomer;
		vm.getCustomerInvoices = getCustomerInvoices;
		vm.addCustomer = addCustomer;
		vm.updateCustomer = updateCustomer;
		vm.deleteCustomer = deleteCustomer;
		/* controller init */
		activate();

		function activate() {
			getCustomers();
		}

		function getCustomers() {
			$http.get('/api/customers').then(function(response){
				vm.customers = response.data;
			});
		}

		function getCustomer() {
			var id = $routeParams.id;
			$http.get('/api/customers/' + id).then(function(response){
				vm.customer = response.data;
			});
		}

		function getCustomerInvoices() {
			var id = $routeParams.id;
			$http.get('/api/invoices/customer/'+id).then(function(response){
				vm.customer_invoices = response.data;
			});
		}

		function addCustomer() {
			$http.post('/api/customers/', vm.customer).then(function(response){
				window.location.href='/#customers';
			});
		}

		function updateCustomer() {
			$http.put('/api/customers/'+ vm.customer._id, vm.customer).then(function(response){
				window.location.href='/#customers';
			});
		}

		function deleteCustomer(id) {
			$http.delete('/api/customers/'+id).then(function(response){
				window.location.href='/#customers';
			});
		}
	};

})();
