import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';

const app = express();

app.set('views', path.join(__dirname, '../src/views'));
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, '../src/views/layouts'),
  defaultLayout: 'main.hbs',
  partialsDir: 'partials'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res): void => {
  res.render('pages/index');
});

app.listen(8082, (): void => {
  console.log('Example App');
});
