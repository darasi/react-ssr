require('./ignore.js')();
require('babel-polyfill');
require('babel-register')({
  presets: ['env', 'react', 'stage-0'],
  plugins: ["react-loadable/babel",'syntax-dynamic-import',"dynamic-import-node"]
});

const express = require('express');
const bodyParser = require('body-parser');


const app = express(),
  clientRouter = require('./clientRouter.js').default,
  port = process.env.PORT || 3003,
  staticCache  = require("express-static-cache"),
  path = require('path'),
  Loadable = require('react-loadable');

app.use(bodyParser.urlencoded({extended: true}));
app.use(clientRouter);
app.use(staticCache (path.resolve(__dirname,'../dist'),{
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}));

console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
Loadable.preloadAll().then(() => {
  app.listen(port)
})


