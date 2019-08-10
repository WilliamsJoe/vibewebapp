import express = require('express');

const app = express();

app.get('/', (req, res): void => {
  res.send('Hello World!');
});

app.listen(8082, (): void => {
  console.log('Example App');
});
