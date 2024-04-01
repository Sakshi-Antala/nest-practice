import { Info } from "@nestjs/graphql";
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ResponseMsg } from "src/responseHelper/response";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user-input.dto";
import { UpdateUserInput } from "./dto/update-user-input.dto";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [User])
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Query(() => User, { nullable: true })
  getUserById(@Args('id',{ type: () => Number }) id:Number) {
    return this.userService.getUserById(+id);
  }

  @Mutation(()=>User)
  createUser(@Args('createUserInput') createUserInput:CreateUserInput){
    return this.userService.createUser(createUserInput)
  }

  @Mutation(()=>User)
  updateUser(@Args('updateUserInput') updateUserInput:UpdateUserInput){
    return this.userService.updateUser(updateUserInput.id,updateUserInput)
  }

  @Mutation(()=>ResponseMsg)
  removeUser(@Args('id') id:Number){
    return this.userService.removeUser(+id)
  }
}