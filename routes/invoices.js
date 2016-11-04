(function(){
	'use strict';
	var express = require('express');
	var router = express.Router();

	var Customer = require('../models/customer.js');
	var Invoice = require('../models/invoice.js');

	// Get All Customers
	router.get('/', function(req, res){
		Invoice.getInvoices(function(err, invoices){
			if(err){
				res.send(err);
			}
			res.json(invoices);
		});
	});

	// Get Single Invoice
	router.get('/:id', function(req, res){
		Invoice.getInvoiceById(req.params.id, function(err, invoice){
			if(err){
				res.send(err);
			}
			res.json(invoice);
		});
	});

	// Add Invoice
	router.post('/', function(req, res){
		var invoice = req.body;
		Invoice.addInvoice(invoice, function(err, invoice){
			if(err){
				res.send(err);
			}
			res.json(invoice);
		});
	});

	// Update Invoice
	router.put('/:id', function(req, res){
		var id = req.params.id;
		var invoice = req.body;
		Invoice.updateInvoice(id, invoice, {}, function(err, invoice){
			if(err){
				res.send(err);
			}
			res.json(invoice);
		});
	});

	// Delete Invoice
	router.delete('/:id', function(req, res){
		var id = req.params.id;
		Invoice.removeInvoice(id, function(err, invoice){
			if(err){
				res.send(err);
			}
			res.json(invoice);
		});
	});

	// Get All Invoices For a Single Customer
	router.get('/customer/:customer_id', function(req, res){
		var customer_id = req.params.customer_id;
		Invoice.getCustomerInvoices(customer_id, function(err, invoices){
			if(err){
				res.send(err);
			}
			res.json(invoices);
		});
	});

	module.exports = router;

})();