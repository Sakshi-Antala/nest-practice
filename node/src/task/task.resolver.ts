import { Info } from "@nestjs/graphql";
import { CreateTaskInput } from "./dto/create-task-input.dto";
import { Task } from "./entities/task.entity";
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { TaskService } from "./task.service";
import { UpdateTaskInput } from "./dto/update-task-input.dto";
import { ResponseMsg } from "src/responseHelper/response";

import * as httpContext from 'express-http-context'

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}
  @Query(() => [Task])
  getAllTask() {
    return this.taskService.getAllTask();
  }

  @Query(() => Task, { nullable: true })
  getTaskById(@Args('id',{ type: () => Number }) id:Number) {
    return this.taskService.getTaskById(+id);
  }

  @Mutation(()=>Task)
  createTask(@Args('createTaskInput') createTaskInput:CreateTaskInput){
    const taskData = this.taskService.createTask(createTaskInput)
    // httpContext.set('response', {message: 'Task Created Successfully', status: true, data: taskData});
    return taskData
  }

  @Mutation(()=>Task)
  updateTask(@Args('updateTaskInput') updateTaskInput:UpdateTaskInput){
    return this.taskService.updateTask(updateTaskInput.id,updateTaskInput)
  }

  @Mutation(()=>ResponseMsg)
  removeTask(@Args('id') id:Number){
    return this.taskService.removeTask(+id)
  }
}