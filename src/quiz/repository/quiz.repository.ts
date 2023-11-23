import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

export interface QuizRepository extends Repository<Quiz> {
  this: Repository<Quiz>;
  getQuizes(): Promise<Quiz[]>;
  createQuiz(quiz: { title: string; description: string; isActive: boolean });
}

export const customQuizRepository: Pick<QuizRepository, any> = {
  getQuizes(this: Repository<Quiz>) {
    return this.find();
  },

  createQuiz(this: Repository<Quiz>, quiz) {
    return this.save(quiz);
  },
};
