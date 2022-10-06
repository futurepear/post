const grape = require("./grape");
const server = grape.createLoadBalancer();


server.balance((socket, req) => {
  return null;
});
server.branch("S1", "test.js");
server.branch("S2", "test.js");

server.listen(process.env.PORT);













/*

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pyrus:"+process.env.PASSWORD+"@cluster0.mn7jo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const os = require("os");
const net = require("net");
const dns = require("dns");
const http = require("http");
const { URL } = require("url");
const { WebSocket } = require("ws");

//console.log(new URL("http://uniqueappname12.herokuapp.com"));
/*
const options = {
  hostname: "erth2.herokuapp.com",
  port: 80,
  path: '/',
  method: 'GET',
};

net.createServer((client) => {
  console.log("a");
  let req2 = http.request(options, (res) => {

  //return;
  //console.log(`STATUS: ${res.statusCode}`);
  //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
    res.on('data', (chunk) => {
      //console.log(`BODY: ${chunk}`);
      client.write(`HTTP/1.1 200 OK\n\n${chunk}`);
    });
    res.on('end', () => {
      //console.log('No more data in response.');
      client.end();
    });
  }).end();
  req2.on("error", (er) => {console.log(er)});
}).listen(3000);



const ws = new WebSocket("wss://dijeojied.futurepear.repl.co");
ws.on("message", (da) => {
  console.log(da.toString());
});
ws.on("error", (er) => {
  console.log(er);
});

dns.lookup("dijeojied.futurepear.repl.co", (err, address) => {
  console.log("EEE " + address);
});
function parseHTTP(req){
  req = req.split(/\r\n/);
  let headers = {};
  for(let i in req){
    let key = req[i].split(':', 1)[0];
    headers[key] = req[i].substring(key.length+2);
  }
  return headers;
}
function rawheaders(req, s, obj){
  let headers = req+s;
  for(let i in obj){
   headers += i + ": " + obj[i] + s;
  }
  return headers;
}


let host = "uniqueappname12.herokuapp.com";
let aaa = net.createConnection({host: host, port: 80}, () => {
  console.log("connec");
  headers = rawheaders('GET / HTTP/1.1', "\r\n", {
    Host: host
  });
  //console.log(headers);
  aaa.write("GET / HTTP/1.1\r\nHost: " + host);
});
aaa.on("data", (data)=>{
  console.log(data.toString());
  aaa.end();
})
aaa.on("error", (er) => {
  console.log(er);
});


/*
  return;
  client.write("")
  console.log("c");  console.log("shhshshshshe" + client.remoteAddress);

  let host = "uniqueappname12.herokuapp.com";
  let host2 = "uniqueappname12.herokuapp.com";
  //host = "dijeojied.futurepear.repl.co";

    let proxy = net.connect({host: host, port: 80}, () => {
      console.log("connected");
    });
    proxy.on("error", (err) =>{ console.log(err); console.log("err"); });
    proxy.on("data", (data)=>{
      console.log(data.toString().substring(0, 502));
      client.write(data, ()=>{
        //client.end();
      });
    });
    client.on("end", () => {
   
    });
    client.on("data", (data) => {
      //console.log(data.toString());
      let http = parseHTTP(data.toString());
      let get = Object.keys(http)[0];
      //console.log(get);
      headers = rawheaders(get, "\r\n", {
        Host: host,
      });
      console.log(headers);
      proxy.write(headers);
    });
    client.on("error", (err) => {
      //console.log(err);
    });

}).listen(3000);

/*"X-Request-Id": "5beb1dd4-38cc-462a-a950-025810ef5f47",
        "X-Forwarded-For": "50.60.200.201",
        "X-Forwarded-Proto": "http",
        "X-Forwarded-Port": 80,
        "Via": "1.1 vegur",
        "Connect-Time": 0,
        "X-Request-Start": Date.now(),
        "Total-Route-Time": 0*/
/*
function connect(port, address){
  let client = new net.Socket();
  client.connect({port: port, host: address}, () => {
    console.log("connected");
    //client.write("GET / HTTP/1.1\r\n");
  });
  return client;
}


var gethttp = `GET / HTTP/1.1
Host: nodejs.org
User-Agent: Mozilla/5.0 (X11; CrOS x86_64 14268.89.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.214 Safari/537.36
-*/
/*
  const fs = require("fs");

  fs.unlinkSync("/tmp/socket1");
  let a = net.createServer((socket) => {
    console.log("connection to UNIX SOCKET");
  }).listen("/tmp/socket1");
  let z = net.createConnection("/tmp/socket1");
*/
