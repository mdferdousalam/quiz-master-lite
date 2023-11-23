import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizDTO } from './create-quiz.dto';

export class UpdateQuizDto extends PartialType(CreateQuizDTO) {}
