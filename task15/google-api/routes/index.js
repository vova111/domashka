const express = require('express');
const router = express.Router();
const homeController = require('controllers/home');
const config = require('config');

router.get('/', function(req, res, next) {
    homeController.getCurrentUserAddress(config.get('user:id'))
        .then((currentAddress) => {
            res.render('index', { title: 'Enter Address', address: currentAddress});
        })
        .catch((error) => {
            next();
        });


  // User.findById('5c94e45ab8bf111308c2973f', function (err, user) {
  //   const currentAddress = {googleId: null, address: null};
  //
  //   if (typeof(user.address) !== 'undefined') {
  //     for (let address of user.address) {
  //       if (address.isMainAddress) {
  //         currentAddress.googleId = address.googleAddressId;
  //         currentAddress.address = address.formattedAddress;
  //         break;
  //       }
  //     }
  //   }
  //
  //   res.render('index', { title: 'Enter Address', address: currentAddress});
  // });

});

module.exports = router;
