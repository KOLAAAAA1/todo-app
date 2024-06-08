import { Body, Controller, Post } from '@nestjs/common';
import { QuizResponse } from 'src/common/constants/technical-quiz.constant';
import { longestCommonPrefix } from 'src/common/utils/technical-test';

@Controller('technical-quiz')
export class TechnicalQuizController {
  @Post()
  async quiz(@Body('strs') strs: string[]): Promise<QuizResponse> {
    const output = longestCommonPrefix(strs);
    return {
      output,
    };
  }
}
