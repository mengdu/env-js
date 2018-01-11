var envjs = require('./libs')
var path = require('path')
var env = envjs({
  // path: path.resolve(__dirname, './.env')
})

console.log(env)
// console.log(process.env)

