var endpointUrl = "https://zenodo.org/api"
var endpointTestUrl = "https://sandbox.zenodo.org/api"

//We should make a a new Upload object

//We should then add things like metadata
//The names of files
//The username and api key

//we should then check these are correct
//and then we should push the information to zenodo


//This should take: username, api-key, optionally the endpoint
function Zenodo(user, key, endpoint) {
  this.user = user
  this.key = key
  this.endpoint = endpoint || 'https://zenodo.org/api/'
}

module.exports=Zenodo
