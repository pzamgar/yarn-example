const express = require('express');
const port = process.env.port || 3000;
let app = express();

app.get('/', (req, res) => {
  res.send('This is my project.');
});

app.listen(port, () => {
  console.log(`Server is up on por ${port}!`);
});