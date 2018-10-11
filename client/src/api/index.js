import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()

//fix header being created twice from createUserEntry(values).then(json => { in create.jsx
export default function api(method, path, data) {
  return fetch(`//localhost:3001/${path}`, {
    method: method.toUpperCase(),
    mode: 'cors',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': window.location.origin,
    }),
    body: JSON.stringify(data)
  //}).then(response => response.json())
  }).then(function(response) {
    var contentType = response.headers.get("content-type")
    if(contentType && contentType.includes("application/json")) {
      return response.json()
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .catch(function(error) { console.log(error); })
}