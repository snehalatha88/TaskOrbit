import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useEffect,useState } from "react;"
export default function App(){
  const[tasks,setTasks]=useState([]);
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });
  const addTask=(task)=>{
    setTasks(task);
  }
  return(
    <div>
      <h1>Task Orbit</h1>
      <p>Our Friendly Task Orbit</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks}/>
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}
