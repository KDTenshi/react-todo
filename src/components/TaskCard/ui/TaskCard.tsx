import { FC } from "react";
import style from "./TaskCard.module.css";
import { Button } from "../../../shared/ui";
import { Task } from "../../../shared/types/types";
import { getDateString } from "../utils/getDateString";
import { useAppDispatch } from "../../../app/store/appStore";
import { removeTask, switchTask } from "../../../shared/model/todoSlice";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.Card}>
      <div className={style.Text}>
        <h2 className={style.Title}>{task.title}</h2>
        <p className={style.Date}>{getDateString(task.date)}</p>
      </div>
      <div className={style.Buttons}>
        <Button color={"red"} onClick={() => dispatch(removeTask(task.id))}>
          Delete
        </Button>
        {(task.status === "idle" || task.status === "finished") && (
          <Button color={"blue"} onClick={() => dispatch(switchTask({ id: task.id, type: "working" }))}>
            Start
          </Button>
        )}
        {task.status === "working" && (
          <Button color={"blue"} onClick={() => dispatch(switchTask({ id: task.id, type: "idle" }))}>
            Stop
          </Button>
        )}
        {task.status !== "finished" && (
          <Button color={"green"} onClick={() => dispatch(switchTask({ id: task.id, type: "finished" }))}>
            Finish
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
