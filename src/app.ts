import express from 'express';

const app = express();

app.set('view engine', 'hbs');
app.get('/', (req, res): void => {
  res.send('Hello World!');
});

app.listen(8082, (): void => {
  console.log('Example App');
});
