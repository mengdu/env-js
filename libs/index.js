var loadenv = require('./loadenv')

function load (options) {
  options = options || {}
  options.path = options.path || '.env'
  options.encoding = options.encoding || 'utf8'
  // load env
  var env = loadenv(options.path, options.encoding)

  if (options.globalName) {
    if (global[globalName]) {
      console.warn('global variable \'' + globalName + '\' exists')
    } else {
      global[globalName] = env
    }
  } else {
    for (var key in env) {
      if (!process.env.hasOwnProperty(key)) {
        process.env[key] = env[key]
      }
    }
  }

  return env
}

module.exports = load
