import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { DataSource } from 'typeorm';
import {
  TypeOrmModule,
  getDataSourceToken,
  getRepositoryToken,
} from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { customQuizRepository } from './repository/quiz.repository';
@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [
    {
      provide: getRepositoryToken(Quiz),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource.getRepository(Quiz).extend(customQuizRepository);
      },
    },
    QuizService,
  ],
})
export class QuizModule {}
