import { dataSource } from '../../core/data-source';
import { Task } from '../entities/task.entity';

export const taskRepository = dataSource.getRepository(Task);