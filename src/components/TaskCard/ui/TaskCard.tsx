import { FC } from "react";
import style from "./TaskCard.module.css";
import { Button } from "../../../shared/ui";
import { Task } from "../../../shared/types/types";
import { getDateString } from "../utils/getDateString";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className={style.Card}>
      <div className={style.Text}>
        <h2 className={style.Title}>{task.title}</h2>
        <p className={style.Date}>{getDateString(task.date)}</p>
      </div>
      <div className={style.Buttons}>
        <Button color={"red"}>Delete</Button>
        {(task.status === "idle" || task.status === "finished") && <Button color={"blue"}>Start</Button>}
        {task.status === "working" && <Button color={"blue"}>Stop</Button>}
        {task.status !== "finished" && <Button color={"green"}>Finish</Button>}
      </div>
    </div>
  );
};

export default TaskCard;
