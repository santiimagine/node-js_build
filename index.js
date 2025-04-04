const express = require('express');
const app = express();
const port = 3000; // EXPOSICIÓN

app.get('/', (req, res) => {
  res.send('Node.js en Docker!');
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});