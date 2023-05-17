// const http = require('http');  // to load the 'http' module
// http.createServer((req, res) => {
//    res.writeHead(200, {   
//    'Content-Type': 'text/plain'
//    });  
//    //The first argument of the res.writeHead() method is the status code, 
//    //200 means that all is OK, the second argument is an object containing the response headers.
//    res.end('THIS IS CHUN HIN YIM'); 
// }).listen(3000);

// console.log('Server running at http://localhost:3000/');

//-------------------------------

// const connect = require('connect');
// const app = connect();

// function helloWorld(req, res, next) {
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello Worlddd');
// };

// app.use(helloWorld);
// app.listen(3000);
// console.log('Server running at http://localhost:3000/');

//-----------------------------


const connect = require('connect');
var http = require('http'); // added
const app = connect();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
};
    
function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
};
function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('goodbye world');
};

app.use(logger);
app.use(helloWorld);
app.use(goodbyeWorld);

http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000/');




