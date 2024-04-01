import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class MessageObject {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => Boolean, { nullable: true })
  show?: boolean;

  @Field(() => String, { nullable: true })
  type?: string;
}

@ObjectType()
class ResponseMsgObject {
  @Field(() => [MessageObject], { nullable: true })
  messages: MessageObject[];

  @Field(() => Boolean)
  success: boolean;
}

@ObjectType()
export class ResponseObject {
  @Field(() => ResponseMsgObject, { nullable: true })
  response?: ResponseMsgObject;
}
