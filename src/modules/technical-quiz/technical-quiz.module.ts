import { Module } from '@nestjs/common';
import { TechnicalQuizController } from '../../controllers/technical-quiz/technical-quiz.controller';

@Module({
  controllers: [TechnicalQuizController],
})
export class TechnicalQuizModule {}
