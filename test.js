const http = require("http");
const express = require("express");
const grape = require("./grape");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const server = http.createServer(app);
const branch = grape.setupBranch(server);

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//catch body parser errors
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
  } else {
    next()
  }
});

console.log(branch.id);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/a.html");
});

app.post('/', (req, res) => {
  console.log('post' + JSON.stringify(req.body));
  res.end(JSON.stringify({ a: 'a' }));
});
