cat: vim: No such file or directory
var express = require('express');
var app = express();

// Use the port from the environment variable or default to 3000 for local development
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start the app on the dynamically assigned port
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
