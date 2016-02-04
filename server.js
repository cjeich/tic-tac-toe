const http = require('http');
const fs   = require('fs');
const path = require('path');
const url  = require('url');
const port = process.argv[2] || 8124;

http.createServer((request, response) => {
  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), uri);

  // Handle 404
  fs.exists(filename, function(exists){
    if(!exists) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.end(fs.readFileSync('404.html'));
      return;
    }

    // Handle index serve for direcotry
    if(fs.statSync(filename).isDirectory()){ filename += 'index.html'; }
  })

  fs.readFile(filename, "binary", function(err, file) {
    if(err) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(err + "\n");
      response.end();
      return;
    }

    response.writeHead(200);
    response.write(file, "binary");
    response.end();
  });
}).listen(port, 10);

console.log('Server Running on http://127.0.0.1:'+port);
