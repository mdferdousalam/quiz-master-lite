import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDTO } from './dto/create-quiz.dto';
import { Quiz } from './entities/quiz.entity';

import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}
  // async getAllQuiz() {
  //   return await this.quizRepository.getQuizes();
  // }

  async createQuiz(createQuizDto: CreateQuizDTO): Promise<Quiz> {
    const quiz: Quiz = this.quizRepository.create(createQuizDto);

    return await this.quizRepository.create(quiz);
  }
}
