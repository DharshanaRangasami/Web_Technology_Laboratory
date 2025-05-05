var http = require('http');
var querystring = require('querystring');
var qs, name, email;

http.createServer(function(req, res) {
    var data1 = '';

    // Collect data chunks
    req.on('data', function(chunk) {
        console.log(chunk);  // Logs buffer data
        data1 += chunk;      // Append chunks to data1
        console.log("Data in String format: " + data1);
    });

    // When data collection is complete
    req.on('end', function() {
        qs = querystring.parse(data1);
        console.log(qs);  // Logs parsed query string

        name = qs['username'];
        email = qs['email'];

        res.write("Hello " + name + ", your email id " + email + " has been received.");
        res.end();
    });

}).listen(8000);

console.log("Server started");
