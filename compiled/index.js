"use strict";

var program = require("commander");

var simpsonMethod = require("./functions/simpsonMethod.js");

var gaussMethod = require("./functions/gaussMethod.js");

program.version("0.0.1").description("Application for solving integrals").option("-s, --simpson-method", "Simpson method").option("-g, --gauss-method", "Gauss method").parse(process.argv);

if (program.simpsonMethod) {
  console.log("Simpson method = ".concat(simpsonMethod(1, 10, 0.001)));
}

if (program.gaussMethod) {
  console.log("Gauss method = ".concat(gaussMethod(1, 10)));
}