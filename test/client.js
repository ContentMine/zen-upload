var expect = require("chai").expect;
var Zenodo = require("../index.js")

describe ("API object", function () {
  it("returns an object on new keyword", function () {
    var zenodo = new Zenodo()
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

  })
})
