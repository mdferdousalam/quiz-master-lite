import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDTO } from './dto/create-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { QuizRepository } from './repository/quiz.repository';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository) {}
  async getAllQuiz() {
    return await this.quizRepository.getQuizes();
  }

  async createQuiz(createQuizDto: CreateQuizDTO): Promise<Quiz> {
    const quiz: Quiz = this.quizRepository.create(createQuizDto);

    return await this.quizRepository.createQuiz(quiz);
  }
}
