const path = require('path')
const envjs = require('../libs')
const expect = require('chai').expect

var env = envjs()

describe('envjs load .js test', function () {
  it('正确加载.js', function() {
    var env = envjs({path: 'test/.env.js', mount: false})
    expect(env).to.be.deep.equal({isTest: true})
  })
  it('挂载全局变量', function() {
    var env = envjs({path: 'test/.env.js', mount: false, globalName: 'CONF'})
    expect(env).to.be.deep.equal(CONF)
  })
})


describe('envjs load .env test', function () {
  it('正确加载.env', function() {
    var env = envjs({path: 'test/.env', mount: false})
    expect(env).to.be.deep.equal({isTest: 'true'})
  })
})
