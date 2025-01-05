export type TaskStatus = "idle" | "working" | "finished";

export type Task = {
  id: string;
  title: string;
  date: number;
  status: TaskStatus;
};
