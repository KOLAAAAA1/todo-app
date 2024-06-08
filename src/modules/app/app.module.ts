import { Module } from '@nestjs/common';
import { AppController } from '../../controllers/app/app.controller';
import { AppService } from './services/app.service';
import { TodosModule } from '../todos/todos.module';
import { TechnicalQuizModule } from '../technical-quiz/technical-quiz.module';

@Module({
  imports: [TodosModule, TechnicalQuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
