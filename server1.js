const http = require('http');
const url = require('url');
const querystring = require('querystring');

function onRequest(request, response) {
    const path = url.parse(request.url).pathname;
    console.log('Request for ' + path + ' received.');

    const query = url.parse(request.url).query;
    console.log(query);

    const name = querystring.parse(query)["username"];
    const email = querystring.parse(query)["email"];

    response.write('Hello ' + name + ', your email id ' + email);
    response.end();
}

http.createServer(onRequest).listen(8000);
console.log('Server has Started………');
