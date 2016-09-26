var expect = require("chai").expect;
var Zenodo = require("../index.js")

describe ("API object", function () {
  it("returns an object on new keyword", function () {
    var zenodo = new Zenodo('test')
    expect(zenodo).to.exist
  })
})
