/*
 * Write your server code in this file.
 *
 * name: Grant Yang
 * email: Yanggra@oregonstate.edu
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(handleRequests);
var page_index_js = null;
var page_index_html = null;
var page_404_html = null; 
var page_style_css = null;
var image_benny = null;

//store/read files
fs.readFile("./public/index.html", "utf-8", function(err, data) {
  if (err) {
    throw err; 
  }
  page_index_html = data;
  console.log("index.html read succesfully");
});

fs.readFile("./public/404.html", "utf-8", function(err, data) {
  if (err) {
    throw err; 
  }
  page_404_html = data;
  console.log("404.html read succesfully");
});

fs.readFile("./public/index.js", "utf-8", function(err, data) {
  if (err) {
    throw err; 
  }
  page_index_js = data;
  console.log("index.js read successfully");
});

fs.readFile("./public/style.css", "utf-8", function(err, data) {
  if (err) {
    throw err; 
  }
  page_style_css = data;
  console.log("style.css read successfully");
});

fs.readFile("./public/benny.jpg", function(err, data) {
  if (err) {
    throw err; 
  }
  image_benny = data;
  console.log("benny.jpg read successfully");
});

function handleRequests(req, res) {
  console.log("request recieved");

  switch(req.url) {
      case "/":
      case "/style.css":
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(page_style_css);
        break;
      
      case "/index.html":
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(page_index_html);
        break;

      case "/index.js":
          res.writeHead(200, {'Content-Type': 'application/javascript'});
          res.write(page_index_js);
          break;

      case "/benny.jpg":
          res.writeHead(200, {'Content-Type': 'image/jpg'});
          res.write(image_benny);
          break;

      default:
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.write(page_404_html);
  }
  res.end();
}

server.listen(3000, function(err) {
  if (err) {
    throw err; 
  }
  console.log("Server on port 3000");
});