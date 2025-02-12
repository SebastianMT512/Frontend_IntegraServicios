const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist', 'frontend', 'browser')));

// Send all requests to index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'frontend', 'browser', 'index.html'));
});

// Usar el puerto de Render (10000) como respaldo
const port = process.env.PORT || 10000;

// Especificar explícitamente 0.0.0.0 como host
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on ${port}`);
  console.log('Server running on http://0.0.0.0:' + port);
});
