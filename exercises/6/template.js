var net = require('net');
function makeRequest(addr, req, f) {
    var client = new net.Socket();
    var finalData = "";
    client.connect(80, addr, function () {
        return client.write(req);
    });
    client.on("data", function (data) {
        finalData += data.toString();
    });
    client.on('close', function () {
        f(finalData);
    });
}

//The following string *MUST* end with 2 newlines
function generateHTTPRequest(host, path) {
    return `GET ${path} HTTP/1.1
host: ${host}
Connection: close

`;
}

// IGNORE EVERYTHING BEFORE THIS LINE

function process(httpResponse) {
    // Your code goes here. Use the debugger to find out more about the httpResponse parameter.
}
var httpRequest = generateHTTPRequest('www.dolekemp96.org', '/');

makeRequest("www.dolekemp96.org", httpRequest, process)
