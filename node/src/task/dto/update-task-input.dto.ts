import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateTaskInput } from './create-task-input.dto';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => Int)
  id: number;
}