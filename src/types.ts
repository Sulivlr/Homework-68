export interface ApiTask {
  title: string;
  done: boolean;
}

export interface ApiTasks {
  [id: string]: ApiTask;
}

export interface Task extends ApiTask {
  id: string;
}