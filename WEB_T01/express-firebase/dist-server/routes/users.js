"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//var express = require('express');
var router = _express["default"].Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource again and again and again!');
});

//module.exports = router;
var _default = router;
exports["default"] = _default;