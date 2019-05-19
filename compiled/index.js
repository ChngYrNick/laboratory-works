"use strict";

var program = require("commander");

program.version("0.0.1").description("Application for solving ordinary differential equations").option("-t, --test-method", "Test method").parse(process.argv);