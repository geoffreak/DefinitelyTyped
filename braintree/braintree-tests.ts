import * as braintree from "braintree";

let gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "useYourMerchantId",
  publicKey: "useYourPublicKey",
  privateKey: "useYourPrivateKey"
});

gateway.addOn.all(function (err, result) {
  if (result.success) {
    let addOns = result.addOns;
  }
});

gateway.address.create({
  customerId: "131866",
  firstName: "Jenna",
  lastName: "Smith",
  company: "Braintree",
  streetAddress: "1 E Main St",
  extendedAddress: "Suite 403",
  locality: "Chicago",
  region: "Illinois",
  postalCode: "60607",
  countryCodeAlpha2: "US"
}, function (err, result) {

});

gateway.address.delete("theCustomerId", "theAddressId", function (err) {
});

gateway.address.find("aCustomerId", "anAddressId", function (err, address) {
});

gateway.address.update("theCustomerId", "theAddressId", {
  firstName: "Jenna",
  lastName: "Smith",
  company: "Braintree",
  streetAddress: "1 E Main St",
  extendedAddress: "Suite 403",
  locality: "Chicago",
  region: "Illinois",
  postalCode: "60622",
  countryCodeAlpha2: "US"
}, function (err, result) {
});

gateway.clientToken.generate({}, function (err, response) {
  if (response.success) {
    let clientToken = response.clientToken;
  }
});

gateway.clientToken.generate({
  customerId: "aCustomerId"
}, function (err, response) {
  if (response.success) {
    let clientToken = response.clientToken;
  }
});
