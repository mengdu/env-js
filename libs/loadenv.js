'use strict'

var fs = require('fs')
var path = require('path')
/*
 * copy from https://github.com/motdotla/dotenv
 * Parses a string or buffer into an object
 * @param {(string|Buffer)} src - source to be parsed
 * @returns {Object} keys and values from src
*/
function parse (src) {
  var obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split('\n').forEach(function (line) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    var keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/)
    // matched?
    if (keyValueArr != null) {
      var key = keyValueArr[1]

      // default undefined or missing values to empty string
      var value = keyValueArr[2] || ''

      // expand newlines in quoted values
      var len = value ? value.length : 0
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n')
      }

      // remove any surrounding quotes and extra spaces
      value = value.replace(/(^['"]|['"]$)/g, '').trim()

      obj[key] = value
    }
  })

  return obj
}


module.exports = function (filename, encoding) {
  // 如果为.js后缀，优先加载
  if (path.extname(filename) === '.js') {
    try {
      return require(filename)
    } catch (err) {
      return {error: err}
    }
  }
  try {
    // 读取.env文件
    var envText = fs.readFileSync(filename, {encoding: encoding})
    return parse(envText)
  } catch (err) {
    return {error: err}
  }
}

module.exports.parse = parse
