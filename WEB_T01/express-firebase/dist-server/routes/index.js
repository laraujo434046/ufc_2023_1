"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//ES6

var router = _express["default"].Router();

//ES5
/*var express = require('express');
var router = express.Router();
*/

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

//module.exports = router;
var _default = router;
exports["default"] = _default;