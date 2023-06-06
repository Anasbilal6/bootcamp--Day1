// Ahmed Nawaz Coding Course course day1


// var http = require('http');
// http.createServer(function (req, res) {
//   res.write('Hello World!'); 
//   res.end(); 
// }).listen(8089);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.end('Hello World!'); 
// }).listen(8088);

// To view resourceLimits, we have to write http://localhost:8086 in browser
// var http = require('http');
// const { resourceLimits } = require('worker_threads');
// const server = http.createServer((req, res) => {
//   res.end('Hello World!'); 
// })
// server.listen(8086, "127.0.0.1");

// 127.0.0.1 is local host and 8083 is port
// var http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Hello World!'); 
// })
// server.listen(8083, "127.0.0.1", () => {
//     console.log("Listening to the port number 8083"); 
// });

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8083);  

// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   /*Use the url module to turn the querystring into an object:*/
//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8093);

// Write text after local hostname, it will be printed on the page
// var http = require('http');
// const { hostname } = require('os')
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
//   res.write(req.url);
//   res.end();
// }).listen(8085);
// console.log("Listening to the port number 8093");


