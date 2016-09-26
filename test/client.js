var expect = require("chai").expect
var Zenodo = require("../index.js")
var nock = require('nock')

describe ("API object", function () {
  it("returns an object on new keyword", function () {
    var zenodo = new Zenodo('testuser', 'TESTAPIKEY')
    expect(zenodo).to.exist
  })
  it("correctly handles parameters pass in the constructor", function () {
    var zenodo = new Zenodo('testuser', 'TESTAPIKEY')
    expect(zenodo.user).to.equal('testuser')
    expect(zenodo.key).to.equal('TESTAPIKEY')
    expect(zenodo.endpoint).to.equal('https://zenodo.org/api/')
  })
  it("correctly handles passing the sandbox endoint", function () {
    var zenodo = new Zenodo('testuser', 'TESTAPIKEY', 'https://sandbox.zenodo.org/api/')
    expect(zenodo.endpoint).to.equal('https://sandbox.zenodo.org/api/')
  })
  it("throws an exception if the user is missing", function () {
    var badconstructor = function() { new Zenodo() }
    expect(badconstructor).to.throw('Missing Required Username',Error)
  })
  it("throws an execption if the API key is missing", function () {
    var badconstructor = function() { new Zenodo('testuser') }
    expect(badconstructor).to.throw('Missing Required API key', Error)
  })
})
