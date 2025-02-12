const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/Frontend'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

// default Render port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});