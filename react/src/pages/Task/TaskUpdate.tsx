import React, { useEffect, useState } from 'react'
import { ITask, IUpdateTask } from './Task.model'
import { TaskForm } from './TaskForm';
import { useForm } from 'react-hook-form';
import { MUTATION_TYPE_UPDATE } from '../../service/graphql/mutation/mutationConstant';
import { Mutation } from '../../service/graphql/mutation/mutation.service';

export const TaskUpdate = (props:IUpdateTask) => {
  const { data ,setTaskDialog } = props
  const methods = useForm();
  const [taskId, setTaskId] = useState<number>();
  useEffect(() => {
    if (data) {
      setTaskId(data.id);
    }
  }, [data]);

  const onSubmit = (taskData: ITask) => {
    const taskDataWithId = { ...taskData, id: taskId };
    Mutation(
      { ...taskDataWithId, user_id: 1 },
      "Task",
      MUTATION_TYPE_UPDATE
    ).then((response) => {
      if (response.data) {
        setTaskDialog(false);
      }
    });
  };

  return <TaskForm methods={methods} onSubmit={onSubmit} isEdit={true} data={data}/>;
}
