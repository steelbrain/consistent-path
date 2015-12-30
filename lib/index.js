'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPath = getPath;

var _shellPath = require('shell-path');

function getPath() {
  if (process.env !== 'darwin') {
    return process.env.PATH;
  }
  if (global.__STEELBRAIN_CONSISTENT_PATH) {
    return global.__STEELBRAIN_CONSISTENT_PATH;
  }
  // Line copied from https://github.com/sindresorhus/fix-path/blob/master/index.js
  const path = (0, _shellPath.sync)() || ['./node_modules/.bin', '/.nodebrew/current/bin', '/usr/local/bin', process.env.PATH].join(':');
  global.__STEELBRAIN_CONSISTENT_PATH = path;
  return path;
}