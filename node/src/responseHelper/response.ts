import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseMsg {
  @Field(() => String)
  messages: string;

  @Field(() => Boolean)
  success: boolean;

  constructor(messages: string, success: boolean) {
    this.messages = messages;
    this.success = success;
  }
}