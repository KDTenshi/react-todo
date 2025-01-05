import { FC } from "react";
import { TaskList } from "../../TaskList";
import style from "./TaskBoard.module.css";

const TaskBoard: FC = () => {
  return (
    <div className={style.Wrapper}>
      <h2 className={style.Title}>Tasks Board</h2>
      <div className={style.Board}>
        <TaskList type="idle" />
        <TaskList type="working" />
        <TaskList type="finished" />
      </div>
    </div>
  );
};

export default TaskBoard;
