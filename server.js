/*
 * Write your server code in this file.
 *
 * name: Grant Yang
 * email: Yanggra@oregonstate.edu
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(requestHandler);
var page_index_html, page_index_js, page_404_html, page_style_css, image_benny = null;

fs.readFile("./public/index.html", "utf-8", function(err, data) {
  if (err) { throw err; }
  page_index_html = data;
  console.log("[file successfully read: index.html]");
});