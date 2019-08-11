import { App } from './app';
import { ToursController } from './tours/tours.controller';

const app = new App({
  controllers: [
    new ToursController({
      path: '/tours'
    })
  ],
  port: 8082
});

app.listen();