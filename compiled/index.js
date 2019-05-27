"use strict";

var program = require("commander");

var newtonMethod = require("./functions/newtonMethod.js");

program.version("0.0.1").description("Application for solving system of nonlinear equations").option("-n, --newton-method", "Newton method").parse(process.argv);
var x = [0.5, 0.5];

if (program.newtonMethod) {
  console.log(newtonMethod(x));
}