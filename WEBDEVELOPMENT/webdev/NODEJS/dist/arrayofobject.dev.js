"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mobileList = [{
  brand: "Redmi",
  price: 20000,
  features: {
    RAM: "8GB",
    camera: 16,
    screensize: 15
  },
  acceserios: ['charger', 'usb', 'screenguard']
}, {
  brand: "Lava",
  price: 15000,
  features: {
    RAM: "2GB",
    camera: 16,
    screensize: 15
  },
  acceserios: ['charger', 'usb', 'pendrive']
}];
mobileList.forEach(function (mobile) {
  for (var key in mobile) {
    var stud = mobile[key];

    if (stud instanceof Array) {
      for (var i in stud) {
        console.log('accesories: ' + stud[i]);
      }
    } else if (_typeof(stud) == 'object') {
      for (var _key in stud) {
        console.log(_key + " : " + stud[_key]);
      }
    } else if (typeof stud == 'function') {
      stud();
    } else {
      console.log(stud);
    }
  }
});