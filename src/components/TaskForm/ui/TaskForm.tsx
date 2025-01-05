import { FC, FormEvent, useState } from "react";
import style from "./TaskForm.module.css";
import { Button } from "../../../shared/ui";
import { useAppDispatch } from "../../../app/store/appStore";
import { addTask } from "../../../shared/model/todoSlice";

const TaskForm: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTask(value));

    setValue("");
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title..."
        className={style.Input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>Add Task</Button>
    </form>
  );
};

export default TaskForm;
