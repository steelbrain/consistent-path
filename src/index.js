'use babel'

const LOCAL_BIN_PATH = '/usr/local/bin'

export function getPath() {
  if (process.platform !== 'darwin') {
    return process.env.PATH
  }
  if (global.__STEELBRAIN_CONSISTENT_PATH) {
    return global.__STEELBRAIN_CONSISTENT_PATH
  }

  const path = findOutPath()

  global.__STEELBRAIN_CONSISTENT_PATH = path
  return path
}

function findOutPath() {
  const shellPath = require('shell-path')
  const toReturn = []

  const path = process.env.PATH.split(':').concat((shellPath.sync() || '').split(':'))
  if (path.indexOf(LOCAL_BIN_PATH) === -1) {
    path.push(LOCAL_BIN_PATH)
  }

  for (let i = 0; i < path.length; ++i) {
    const value = path[i]
    if (value && toReturn.indexOf(value) === -1) {
      toReturn.push(value)
    }
  }

  return toReturn.join(':')
}
