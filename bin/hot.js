#!/usr/bin/env node

/**
 * Module dependencies.
 */


var supervisor = require('supervisor');
/**
 * Supervisor Run www
 */

// supervisor -w .. --debug-brk[=port] bin/www
var args = new Array()
args[0] = '-w';
args[1] = '..';
args[2] = '--debug-brk=3001';
args[3] = './www';

supervisor.run(args);