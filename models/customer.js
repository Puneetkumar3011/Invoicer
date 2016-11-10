(function(){
'use strict';

var mongoose = require('mongoose');

// Customer Schema
var customerSchema = mongoose.Schema({
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	company:{
		type: String
	},
	logoUrl:{
		type: String
	},
	email:{
		type: String,
		required: true
	},
	phone:{
		type: String
	},
	address:{
		street: String,
		city: String,
		state: String,
		zip: String
	},
	createdAt:{
		type: Date,
		default: Date.now
	},
});

var Customer = mongoose.model('Customer', customerSchema);

// Get customers
module.exports.getCustomers = function(callback, limit){
	Customer.find(callback).limit(limit).sort([['firstName', 'ascending']]);
}

// Get customer
module.exports.getCustomerById = function(id, callback){
	Customer.findById(id, callback);
}

// Add Customer
module.exports.addCustomer = function(customer, callback){
	var add = {
		firstName: customer.firstName,
		lastName: customer.lastName,
		company: customer.company,
		logoUrl: customer.logoUrl,
		email: customer.email,
		phone: customer.phone,
		address: {
			street: customer.address.street,
			city: customer.address.city,
			state: customer.address.state,
			zip: customer.address.zip
		}
	}
	Customer.create(add, callback);
}

// Update Customer
module.exports.updateCustomer = function(id, customer, options, callback){
	var query = {_id: id};
	var update = {
		first_name: customer.firstName,
		last_name: customer.lastName,
		company: customer.company,
		logo_url: customer.logoUrl,
		email: customer.email,
		phone: customer.phone,
		address: {
			street: customer.address.street,
			city: customer.address.city,
			state: customer.address.state,
			zip: customer.address.zip
		}
	}
	Customer.findOneAndUpdate(query, update, options, callback);
}


// Remove Customer
module.exports.removeCustomer = function(id, callback){
	var query = {_id: id};
	Customer.remove(query, callback);
}

})();

