import React from 'react'

const ToDoListInfo = ({task}) => {
  return (
    <div>
      <h3>Task.id : {task.id}</h3>
      <h3>Task Name : {task.name}</h3>
      <p>Description : {task.description}</p>
    </div>
  )
}

export default ToDoListInfo
