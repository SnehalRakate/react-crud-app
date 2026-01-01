import React, { useState } from "react";

const ToDoList=()=>{
    const [task, setTask] = useState("");
    const [taskCollections, setTaskCollections] = useState([]);
    const [index,setIndex] = useState(null);

    const handelChange=(e)=>{
       setTask(e.target.value);
    }

    const handelCreate=()=>{
        if(task.trim() === ""){
            alert("Task connot be Empty")
            return;
        }
        const isDuplicate = taskCollections.includes(task);
        if(!isDuplicate){
            setTaskCollections([...taskCollections, task]);
            setTask("");
        }else{
            alert("Task is Already Exist");
            setTask('')
        }
    }

    const handelUpdate=()=>{
        if(index !==null){
           const updatedTask = [...taskCollections];
           updatedTask.splice(index,1,task);
           setTaskCollections(updatedTask);
           setTask("");
           setIndex(null);
        }
    }

    const handelDelete=(i)=>{
        const updatedTask = [...taskCollections];
        updatedTask.splice(i,1);
        setTaskCollections(updatedTask);
    }

    const handelEdit=(item,i)=>{
        setTask(item);
        setIndex(i);
    }

    return(
        <div style={{padding:"20px"}}>
          <input type="text" 
          value={task}
          placeholder="Enter Task"
          onChange={handelChange}
          />
          {index ===null? (<button onClick={handelCreate}>Create</button>):(<button onClick={handelUpdate}>Update</button>)}

          <ul>
            {taskCollections.map((item,i)=>(
                <li key={i}>
                   <span>{item}</span>
                   <button onClick={()=>{handelEdit(item,i)}}>Edit</button>
                   <button onClick={()=>{handelDelete(i)}}>Delete</button>
                </li>
            ))}
          </ul>
        </div>
    )
}
export default ToDoList;