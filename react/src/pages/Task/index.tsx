import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TaskList } from "./TaskList";
import { GET_All_TASK } from "../../service/graphql/queries/Task/task.query";
import { useQuery } from "@apollo/client";

const TaskIndex = () => {
  const [taskDialog, setTaskDialog] = useState(false);
  const { loading, error, data } = useQuery(GET_All_TASK);

  const headerElement = <h3 className="text-center">Task</h3>;
  const toggleTaskDialog = () => {
    setTaskDialog(!taskDialog);
  };
  return (
    <div className="card mr-5 mt-5">
      <div className="card flex justify-content-end">
        <Dialog
          visible={taskDialog}
          modal
          header={headerElement}
          style={{ width: "50rem" }}
          onHide={() => toggleTaskDialog()}
        >
            <TaskCreate toggleTaskDialog={toggleTaskDialog} />
        </Dialog>        
      </div>
      <TaskList OpenModal={toggleTaskDialog} data={data} loading={loading}/>
    </div>
  );
};

export default TaskIndex;
