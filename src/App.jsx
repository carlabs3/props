import { useState } from "react";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Hacer la compra", completed: false },
    { id: 2, text: "Llamar al médico", completed: true },
    { id: 3, text: "Hacer ejercicio", completed: false },
  ]);

  // Añadir tarea
  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: text,
        completed: false,
      },
    ]);
  };

  // Eliminar tarea
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Marcar como completada / desmarcar
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div>
      <h1>Lista de tareas</h1>

      <AddTaskForm addTask={addTask} />

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default App;
