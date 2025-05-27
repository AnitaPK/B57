import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import ToDoListInfo from './ToDoListInfo';
import {data} from '../../data.js'

const ToDoList = () => {

    const [tasks, setTasks] = useState(data)



const [name,setName] = useState()
const[description, setDiscription] = useState();
const [forDetail,setForDetail] = useState();

const formSubmit = (event) =>{
    event.preventDefault();
  console.log(name, "This is name after submit");
  console.log(description, "This is description after submit");
  const payload = {
    id:tasks.length + 1,
    name:name,
    description:description,
    isComplete:false
}
  console.log(payload);
  setTasks([...tasks, payload])
}


  return (
    <>
    <div className='container d-flex justify-content-between'>
      <h1 className='text-center'>To Do List</h1>
      {/* <p><button className='btn btn-primary'>Add New Task</button></p> */}
    </div>
   <div className="container w-25">
        <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            add Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e)=>{setName(e.target.value)}}
          />
                    <label htmlFor="exampleInputEmail1" className="form-label">
            Add Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>{setDiscription(e.target.value)}}
          />
          </div>
          <button type="submit" className="btn btn-primary">
          Submit
        </button>
    </form>
    </div>
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>

{tasks.length > 0 ? <>{tasks.map((task,index)=>(
  <>
    <tr key={index}
    //  onClick={()=>{setForDetail(task)}}
     >
      <th scope="row">{task.id}</th>
      <td>
        {/* <Link to='details' > */}
        <Link to={`/todo/${task.id}`} >
         <span className={task.isComplete ?'text-success' : 'text-primary'}>{task.name}</span> 
         </Link>
        </td>
      
      <td>{task.description}</td>
      <td><button>Edit</button><button>Delete</button></td>
    </tr>

</>
))}

</>:<>Task not available</>}


  </tbody>

</table>
    </div>

    <Routes>
  <Route path='details' element={<ToDoListInfo task={forDetail}/>}></Route>
</Routes>

    </>
  )
}

export default ToDoList
