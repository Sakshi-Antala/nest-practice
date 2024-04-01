import React from "react";
import { ICreateTask, ITask, ITaskList } from "./Task.model";
import TextInput from "../../components/Form/Elements/TextInput";
import TextArea from "../../components/Form/Elements/TextArea";
import FormButton from "../../components/Form/Elements/FormButton";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { DropDown } from "../../components/Form/Elements/DropDown";
import taskStatusOptions from "./TaskStatusOptions";
import { apolloClient, refetchQueries } from "../../service/graphql/graphql";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { TaskForm } from "./TaskForm";
import { MUTATION_TYPE_CREATE } from "../../service/graphql/mutation/mutationConstant";
import { GET_All_TASK, GET_TASK_BY_ID } from "../../service/graphql/queries/Task/task.query";
import { Mutation } from "../../service/graphql/mutation/mutation.service";

const TaskCreate = (props: ICreateTask) => {
  const { toggleTaskDialog } = props;
  const methods = useForm<ITask>();

  const onSubmit = (taskData: ITask) => {
    Mutation(
      { ...taskData, user_id: 1 },
      "Task",
      MUTATION_TYPE_CREATE
    ).then((response) => {
      if (response.data) {
        toggleTaskDialog();
        refetchQueries()
      }
    });
  };

  return <TaskForm methods={methods} onSubmit={onSubmit} />;
};

export default TaskCreate;
