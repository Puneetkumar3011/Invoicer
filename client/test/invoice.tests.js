describe('Invoice Controller Test:', function() {

  beforeEach(module('invoiceApp'));

  var $controller;
  var $httpBackend;
  var $scope;
  var $timeout;

  describe('Test list:', function() {
    var invCtrl;
    var invoice = {"_id":"1","customer":{"_id":"581fe95895d9ee0704502d31","first_name":"Puneet","last_name":"Singh","company":"Symbol","email":"puneet3011@gmail.com","phone":"6098150612","__v":0,"createdAt":"2016-11-07T02:39:20.225Z","address":{"street":"161","city":"lawrenceville","state":"nj","zip":"07618"}},"service":"New Service","price":1500,"due":"03/03/2016","status":"Paid","__v":0,"createdAt":"2016-11-09T14:46:26.268Z"};
    var invoiceList = [invoice];

    beforeEach(inject(function(_$controller_, _$httpBackend_) {
      $controller = _$controller_;
      $scope = {};
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('/api/invoices')
        .respond(200, invoiceList);
      
      $httpBackend.whenGET('/api/invoices/1')
        .respond(200, invoice);
      
      $httpBackend.whenPOST('/api/invoices/')
      .respond(201, '');
      
      $httpBackend.whenPUT('/api/invoices/1')
      .respond(201, '');
      
      $httpBackend.whenDELETE('/api/invoices/1')
      .respond(201, '');
      
      invCtrl = $controller('InvoicesController', { $scope: $scope, $routeParams: {'id': 1} });
    }));
    
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should load invoices list', function() {
      /*no need to call invCtrl.getCustomers() as activate has already called this function*/
      invCtrl.getInvoices();
      $httpBackend.flush();
      expect(invCtrl.invoices).toBeDefined();
      expect(invCtrl.invoices.length).toBe(1);
      expect(invCtrl.invoices[0].service).toBe("New Service");
    });

    it('should load invoice', function() {
      invCtrl.getInvoice();
      $httpBackend.flush();
      expect(invCtrl.invoice).toBeDefined();
      expect(invCtrl.invoice.service).toBe("New Service");
    });
    
    it('should add new invoice', function(){
      invCtrl.addInvoice(invoice);
      $httpBackend.flush();
    });

    it('should update invoice', function(){
      invCtrl.invoice = invoice;
      invCtrl.updateInvoice();
      $httpBackend.flush();
    });

    it('should delete invoice', function(){
      invCtrl.deleteInvoice(1);
      $httpBackend.flush();
    });
        
  });

});
