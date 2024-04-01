import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[UserModule],
  providers: [TaskService,TaskResolver]
})
export class TaskModule {}
