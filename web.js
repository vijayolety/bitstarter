var express = require('express');
var fs = require('fs');

var app = express.createServer()
		.use(express.logger())
		.use(express.static(__dirname + '/images'));

app.get('/', function(request, response) {
	var buffer = new Buffer(15000);
	var bufferLength = buffer.write(fs.readFileSync('index.html', 'utf-8'));
	response.send(buffer.toString("utf-8", 0, bufferLength));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
