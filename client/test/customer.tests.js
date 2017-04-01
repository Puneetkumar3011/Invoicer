describe('Customer Controller Test:', function() {

  beforeEach(module('invoiceApp'));

  var $controller;
  var $httpBackend;
  var $scope;
  var $timeout;

  describe('Test customer CRUD:', function() {
    var custCtrl;
    var custData = {"_id":"1","first_name":"Puneet","last_name":"Singh","company":"Symbol","email":"puneet3011@gmail.com","phone":"6098150612","__v":0,"createdAt":"2016-11-07T02:39:20.225Z","address":{"street":"161","city":"lawrenceville","state":"nj","zip":"07618"}};
    var custDataList = [custData];

    beforeEach(inject(function(_$controller_, _$httpBackend_) {
      $controller = _$controller_;
      $scope = {};
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('/api/customers')
        .respond(200, custDataList);
      
      $httpBackend.whenGET('/api/customers/1')
        .respond(200, custData);
      
      $httpBackend.whenPOST('/api/customers/')
      .respond(201, '');
      
      $httpBackend.whenPUT('/api/customers/1')
      .respond(201, '');
      
      $httpBackend.whenDELETE('/api/customers/1')
      .respond(201, '');
      
      custCtrl = $controller('CustomersController', { $scope: $scope, $routeParams: {'id': 1} });
    }));
    
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    
    it('controller should initialized default data', function() {
      $httpBackend.flush(); /*calling this bcas activate gets call in all test cases */
      expect(custCtrl.testCtrl).toBeDefined();
      expect(custCtrl.testCtrl).toBe('test');
    })

    it('should load customers list', function() {
      /*no need to call custCtrl.getCustomers() as activate has already called this function*/
      $httpBackend.flush();
      expect(custCtrl.customers).toBeDefined();
      expect(custCtrl.customers.length).toBe(1);
      expect(custCtrl.customers[0].email).toBe("puneet3011@gmail.com");
    });

    it('should load customer', function() {
      custCtrl.getCustomer();
      $httpBackend.flush();
      expect(custCtrl.customer).toBeDefined();
      expect(custCtrl.customer.email).toBe("puneet3011@gmail.com");
    });
    
    it('should add new customer', function(){
      custCtrl.addCustomer(custData);
      $httpBackend.flush();
      //expect(custCtrl.languageList[0].desc).toBe('French');
    });

    it('should update customer', function(){
      custCtrl.customer = custData;
      custCtrl.updateCustomer();
      $httpBackend.flush();
      //expect(custCtrl.languageList[0].desc).toBe('French');
    });

    it('should delete customer', function(){
      custCtrl.deleteCustomer(1);
      $httpBackend.flush();
      //expect(custCtrl.languageList[0].desc).toBe('French');
    });
        
  });

});
