import React, { useState } from "react"
import Overview from "./components/Overview"
import uniqid from "uniqid"

function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

  const handleChange = (e) => {
    setText( e.target.value)
  }

  const createTask = (taskName) =>{
    const newTask= {
      id: uniqid(),
      text: taskName,
      completed: false
    }
    setTasks([...tasks, newTask ])
  }

  const handleComplete = (id) => {
    const data = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(data)
  }

  const deleteTask = (id) => {
    const filteredData = tasks.filter(task => task.id !== id)
    setTasks(filteredData)
  }

    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          createTask(text)
          setText('')
        }}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            type="text"
            id="taskInput"
            onChange={handleChange}
            value={text}/>
          <button type="submit">
            Add Task
          </button>
        </form>
        {tasks.map(task => <p 
          style={task.completed? completedStyle : null}
          key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleComplete(task.id)}/>
            {task.text}
              <button onClick={() => deleteTask(task.id)}>x</button>
            </p>)}
        {/* <Overview tasks={tasks} handleTask={handleComplete}/> */}
      </div>
    );

  }


export default App;