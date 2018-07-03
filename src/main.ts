import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const morgan = require('morgan');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use(morgan('tiny'));
  await app.listen(3000);
}
bootstrap();
