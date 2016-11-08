describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('invoiceApp'));

  describe('Testing AngularJS Controller', function () {
    var scope, ctrl, httpBackend;

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();
      ctrl = $controller('CustomersController', {$scope:scope, $routeParams: {'id': 1} });
      httpBackend = $httpBackend;

      /*Mock API */
      var custDataList = [{"_id":"581fe95895d9ee0704502d31","first_name":"Puneet","last_name":"Singh","company":"Symbol","email":"puneet3011@gmail.com","phone":"6098150612","__v":0,"createdAt":"2016-11-07T02:39:20.225Z","address":{"street":"161","city":"lawrenceville","state":"nj","zip":"07618"}}];
      httpBackend.when('GET', '/api/customers').respond(custDataList);
      httpBackend.flush();
    }));

    it('should initialize the testCtrl in the controller', function() {
      expect(ctrl.testCtrl).toBeDefined();
    });

    it('should pass getCustomers', function() {
      expect(ctrl.customers).toBeDefined();
      expect(ctrl.customers.length).toBe(1);
      expect(ctrl.customers[0].email).toBe("puneet3011@gmail.com");
    });
    
  });

});
