export interface ICreateTask {
  toggleTaskDialog: () => void;
}

export interface ITaskList {
  OpenModal: () => void;
  data: any;
  loading: boolean;
}

export interface ITask {
  id?: number;
  title: string;
  description: string;
  status: string;
  user_id:number
}

export interface ITaskForm {
  methods?: any;
  onSubmit: (data: ITask) => void;
  isEdit?:Boolean
  data?:any
}

export interface IUpdateTask {
  setTaskDialog: (data: boolean) => void;
  data?: ITask;
}