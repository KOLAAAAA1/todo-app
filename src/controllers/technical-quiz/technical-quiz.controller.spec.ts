import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalQuizController } from './technical-quiz.controller';

describe('TechnicalQuizController', () => {
  let controller: TechnicalQuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalQuizController],
    }).compile();

    controller = module.get<TechnicalQuizController>(TechnicalQuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
