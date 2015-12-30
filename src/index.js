'use babel'

import {sync} from 'shell-path'

export function getPath() {
  if (process.env !== 'darwin') {
    return process.env.PATH
  }
  if (global.__STEELBRAIN_CONSISTENT_PATH) {
    return global.__STEELBRAIN_CONSISTENT_PATH
  }
  // Line copied from https://github.com/sindresorhus/fix-path/blob/master/index.js
  const path = sync() || [
      './node_modules/.bin',
      '/.nodebrew/current/bin',
      '/usr/local/bin',
      process.env.PATH
    ].join(':')
  global.__STEELBRAIN_CONSISTENT_PATH = path
  return path
}
