
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const test1 = require('./file');
const testApi = require('./project');
//const projekt = require('./kowalski.xls');

const kowalski_jan = {
  name: "Kowalski",
  data: test1,
}

const testNowak = test1.piotrNowakNew;

//console.log(kowalski_jan.data.projekt1);

const data2 = kowalski_jan.data;

 var obj = [];
 obj.push(kowalski_jan,testNowak);
console.log("Object-------------------------->")
 console.log(obj);
//console.log(typeof data2);

/*for(var i =0;i<kowalski_jan.data.projekt1.length;i++) {
  console.log(i + kowalski_jan.data.projekt1[i]);
}*/

//console.log(data2);

/*for (prop in data2) {
  console.log(data2[prop]);
}*/
const testApiJson = testApi;


console.log('APi:')
console.log(testApiJson.list.projekt1)






app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http:${kowalski_jan.projekt1}`,
    badge: true
  })
}
start()


