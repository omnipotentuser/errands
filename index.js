#!/usr/bin/env node

var argv = require('yargs')
  .usage("$0 -v")
  . demand(1)
  . argv
;

console.log('yargs ready', yargs.help);
