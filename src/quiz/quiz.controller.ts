import {
  Body,
  Controller,
  // Delete,
  Get,
  HttpCode,
  // Param,
  // Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDTO } from './dto/create-quiz.dto';
// import { UpdateQuizDto } from './dto/update-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  // @Get('/')
  // getAllQuiz() {
  //   return this.quizService.getAllQuiz();
  // }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDTO) {
    return await this.quizService.createQuiz(quizData);
  }
  @Post()
  create(@Body() createQuizDto: CreateQuizDTO) {
    return this.quizService.createQuiz(createQuizDto);
  }

  // @Get()
  // findAll() {
  //   return this.quizService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.quizService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
  //   return this.quizService.update(+id, updateQuizDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.quizService.remove(+id);
  // }
}
