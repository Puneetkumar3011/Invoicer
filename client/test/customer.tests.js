describe('Test Customer Module:', function() {
  beforeEach(module('invoiceApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Customer Controller:', function() {
    it('Title defined', function() {
      var $scope = {};
      var controller = $controller('CustomersController', { $scope: $scope });
      expect(controller.testCtrl).toEqual('test');
    });
  });
});