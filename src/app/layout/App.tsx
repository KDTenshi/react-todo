import { FC } from "react";
import "../style/App.css";
import { TaskBoard } from "../../components/TaskBoard";
import { TaskForm } from "../../components/TaskForm";

const App: FC = () => {
  return (
    <main className="App">
      <TaskForm />
      <TaskBoard />
    </main>
  );
};

export default App;
