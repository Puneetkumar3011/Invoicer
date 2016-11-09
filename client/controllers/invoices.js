(function(){
	'use strict';
	angular.module("invoiceApp")
		.controller('InvoicesController',InvoicesController);

	InvoicesController.$inject = ['$scope', '$http','$location','$routeParams']; 
	function InvoicesController($scope, $http,$location, $routeParams) {
		console.log('Invoice Controller Initialized...');
		/*controller variables */
		var vm = this;
		/*Controller interface */
		vm.getInvoices = getInvoices;
		vm.getInvoice = getInvoice;
		vm.getCustomers = getCustomers;
		vm.addInvoice = addInvoice;
		vm.updateInvoice = updateInvoice;
		vm.deleteInvoice  = deleteInvoice;

		function getInvoices() {
			$http.get('/api/invoices').success(function(response){
				vm.invoices = response;
			});
		}

		function getInvoice() {
			var id = $routeParams.id;
			$http.get('/api/invoices/'+id).success(function(response){
				vm.invoice= response;
				//Fill Select
				vm.invoice.customer_id = response.customer._id;
			});
		}

		function getCustomers() {
			$http.get('/api/customers').success(function(response){
				vm.customers = response;
			});
		}

		function addInvoice() {
			$http.post('/api/invoices/',vm.invoice).success(function(response){
				window.location.href='/#invoices';
			});
		}

		function updateInvoice() {
			$http.put('/api/invoices/'+ vm.invoice._id, vm.invoice).success(function(response){
				window.location.href='/#invoices';
			});
		}

		function deleteInvoice(id) {
			$http.delete('/api/invoices/'+id).success(function(response){
				window.location.href='/#invoices';
			});
		}
	};
})();
