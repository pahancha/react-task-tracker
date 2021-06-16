import { useState } from "react"

import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";


const  App = () =>  {
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'May 5th at 2.30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'May 6th at 12.30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'May 7th at 1.30pm',
        reminder: true,
    }, 
])


//Delete a task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder

const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? 
  { ...task,reminder: !task.reminder }: task
  )
  )
}

//Add a task
const addTask = (task) =>{
  console.log(task)
}

  return (
    <div className='container'>

      <Header />
      <AddTask onAdd={addTask}/>
      { tasks.length > 0 ?  <Tasks tasks = {tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/> : 'There are no tasks!'}

    </div>
  );
}


export default App;
