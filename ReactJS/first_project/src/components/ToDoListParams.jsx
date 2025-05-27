import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data.js";

const ToDoListParams = () => {
  const { ID } = useParams();
  console.log(ID, "********");
  const [taskD, setTaskD] = useState();

  const fetchData = () => {
    const taskDetails = data.filter((t) => t.id == ID);
    console.log(taskDetails);
    setTaskD(taskDetails[0])
  };
  useEffect(() => {
    fetchData();
  });


  // console.log(taskD);
  return (
    <div>
      {
        taskD ? <>
             <h3>Task.id : {taskD.id}</h3>
      <h3>Task Name : {taskD.name}</h3>
      <p>Description : {taskD.description}</p>
        </> :<>Task not found</>
      }
 
    </div>
  );
};

export default ToDoListParams;
