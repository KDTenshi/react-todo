import { FC } from "react";
import style from "./TaskList.module.css";
import { TaskCard } from "../../TaskCard";
import { useAppSelector } from "../../../app/store/appStore";
import { TaskStatus } from "../../../shared/types/types";

interface TaskListProps {
  type: TaskStatus;
}

const TaskList: FC<TaskListProps> = ({ type }) => {
  const tasks = useAppSelector((state) => state.todo.tasks);

  const filteredTasks = tasks.filter((task) => task.status === type);

  return (
    <div className={style.Wrapper}>
      <h2 className={style.Title}>{type} tasks</h2>
      <div className={style.List}>
        {filteredTasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
