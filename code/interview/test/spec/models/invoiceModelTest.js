'use strict';
define(['models/invoiceModel'], function(InvoiceModel) {
  describe('Invoice model test', function () {
    var invoiceModel = new InvoiceModel();
    it('should have a default state', function () {
      invoiceModel.defaults.should.be.an('Object');
      invoiceModel.toJSON().name.should.equal('Joe');
    });
    it('should have a default URL', function () {
      invoiceModel.url.should.be.a('string');
    });
  });
});
