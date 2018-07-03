import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';


@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController)
  }
}
