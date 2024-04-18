const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index5.html');
});

app.listen(3000, () => {
  console.log('Server Working at :3000');
});
