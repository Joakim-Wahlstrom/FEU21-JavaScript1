// GET POST PUT PATCH DELETE
/* 
  GET - hämtar data, okrypterat
  POST - skriva data, kryperad i en body
  PUT - uppdaterar HELA ett objekt
  PATCH - uppdaterar delar av eller hela ett objekt
  DELETE - tar bort ett objekt
*/


const getRequest = (endpoint, cb) => {

  const http = new XMLHttpRequest();

  http.addEventListener('readystatechange', () => {

    if(http.status === 200 && http.readyState === 4) {
      const data = JSON.parse(http.responseText)
      cb(undefined, data);
    } 
    else if (http.readyState === 4) {
      cb('could not get the data', undefined)
    }

  })

  http.open('GET', endpoint);
  http.send();

}


console.log(1);
console.log(2);

getRequest('user.json', (err, data) => {
  if(err) {
    console.log(err)
    return
  }
  document.body.innerText = data.lastName
  console.log(data)
})

console.log(3);
console.log(4);