var coinbase = require('coinbase-commerce-node');
var Client = coinbase.Client;
 
Client.init('c1827945-3d91-44a3-8e5d-ca3868866d17');

var coinbase = require('coinbase-commerce-node');
var Checkout = coinbase.resources.Checkout;

var checkoutData = {
    'name': 'The Sovereign Individual',
    'description': 'Mastering the Transition to the Information Age',
    'pricing_type': 'fixed_price',
    'local_price': {
        'amount': '100.00',
        'currency': 'USD'
    },
    'requested_info': ['name', 'email']
};
Checkout.create(checkoutData, function (error, response) {
  console.log(error);
  console.log(response);
});
 
// or
 
var checkoutObj = new Checkout();
 
checkoutObj.name = 'The Sovereign Individual';
checkoutObj.description = 'Mastering the Transition to the Information Age';
checkoutObj.pricing_type = 'fixed_price';
checkoutObj.local_price = {
    'amount': '100.00',
    'currency': 'USD'
};
checkoutObj.requested_info = ['name', 'email'];
 
checkoutObj.save(function (error, response) {
  console.log(error);
  console.log(response);
});

