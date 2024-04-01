import { Injectable } from '@nestjs/common';
import { taskRepository } from './repository/task.repository';
import { CreateTaskInput } from './dto/create-task-input.dto';
import { UpdateTaskInput } from './dto/update-task-input.dto';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ResponseMsg } from 'src/responseHelper/response';
import { UserService } from 'src/user/user.service';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(private userService: UserService) {}
  async createTask(data: CreateTaskInput) {
    const newTask = new Task();
    newTask.title = data.title;
    newTask.description = data.description;
    newTask.user_id = data.user_id;
    newTask.status = data.status;
    return await taskRepository.save(newTask);
  }

  async getAllTask() {
    return await taskRepository.find({ relations: { user: true } });
  }

  async getTaskById(id: number) {
    return await taskRepository.findOne({ where: { id } });
  }

  async updateTask(id: number, data: UpdateTaskInput) {
    const res = await taskRepository.update(id, data);
    if (res && res.affected > 0) {
      return await taskRepository.findOne({ where: { id } });
    } else {
      throw new BadRequestException('Something Went Wrong');
    }
  }

  async removeTask(id: number) {
    const res = await taskRepository.delete(id);
    if (res && res.affected > 0) {
      return new ResponseMsg('Delete successfully.', true);
    } else {
      return new ResponseMsg('Something Went Wrong', false);
    }
  }
}
