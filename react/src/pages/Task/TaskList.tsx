import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useMemo, useState } from "react";
import { ITask, ITaskList } from "./Task.model";
import { Button } from "primereact/button";
import FormButton from "../../components/Form/Elements/FormButton";
import { Datatable } from "../../components/Datatable/Datatable";
import { Dialog } from "primereact/dialog";
import { TaskUpdate } from "./TaskUpdate";
import { ConfrimDialogBox } from "../../components/ConfrimDialog/ConfrimDialogBox";
import { confirmDialog } from "primereact/confirmdialog";
import { GET_All_TASK } from "../../service/graphql/queries/Task/task.query";
import { useQuery } from "@apollo/client";
export const TaskList = (props: ITaskList) => {
  const { OpenModal, data, loading } = props;
  const [taskData, setTaskData] = useState<ITask>();
  const [taskDialog, setTaskDialog] = useState(false);
  const [confirmDialogs, setConfrimDialogs] = useState(false);

  const allTaskData = useMemo(() => {
    if (data) {
      return data.getAllTask.map((task: ITask) => {
        return {
          ...task,
        };
      });
    }
  }, [data]);

  const columns = [
    { field: "title", header: "Title" },
    {
      field: "description",
      header: "Description",
    },
    { field: "status", header: "Status" },
  ];
  const setEditTaskData = (rowData: ITask) => {
    setTaskData(rowData);
    setTaskDialog(true);
  };
  const actionBody = (rowData: ITask) => {
    return (
      <div>
        <FormButton label="Edit" onClick={() => setEditTaskData(rowData)} />
        <FormButton
          label="Delete"
          onClick={() => {
            setConfrimDialogs(true);
            confirmDialog({
              message: "Are you sure you want to proceed?",
              header: "Confirmation",
              icon: "pi pi-exclamation-triangle",
              defaultFocus: "accept",
              accept: deleteTask,
            });
          }}
        />
      </div>
    );
  };
  const deleteTask = () => {
    alert("ddd");
  };
  const hideDialog = () => {
    setTaskDialog(false);
  };
  return (
    <>
      {taskDialog && (
        <Dialog
          maximizable
          appendTo="self"
          visible={taskDialog}
          header={"Update Task"}
          modal
          className="w-6"
          style={{ height: "60%" }}
          onHide={() => hideDialog()}
        >
          <TaskUpdate setTaskDialog={setTaskDialog} data={taskData} />
        </Dialog>
      )}
      <Datatable
        columns={columns}
        value={allTaskData}
        loading={loading}
        actionBodyTemplate={actionBody}
        OpenModal={OpenModal}
      />
      {confirmDialogs && <ConfrimDialogBox />}
    </>
  );
};
