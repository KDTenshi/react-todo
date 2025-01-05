import { FC } from "react";
import "../style/App.css";
import { TaskBoard } from "../../components/TaskBoard";

const App: FC = () => {
  return (
    <main className="App">
      <TaskBoard />
    </main>
  );
};

export default App;
