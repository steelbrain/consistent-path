'use strict'

let consistentEnv

module.exports = function() {
  if (!consistentEnv) {
    consistentEnv = require('consistent-env')
  }
  return consistentEnv().PATH || ''
}

module.exports.async = function() {
  if (!consistentEnv) {
    consistentEnv = require('consistent-env')
  }
  return consistentEnv.async().then(function(env) {
    return env.PATH || ''
  })
}
