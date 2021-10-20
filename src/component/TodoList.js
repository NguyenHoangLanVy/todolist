import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ToDo from "./ToDo";

const ToDoList = () =>{
    const [modal, setModal]= useState (false);
    const [taskList, setTaskList] = useState ([]);
    useEffect(() => {
        let arr= localStorage.getItem("taskList")
        if (arr) {
            let obj= JSON.parse(arr)
            setTaskList(obj)
        } 
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


    const updateListArray = (obj,index) =>{
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    const toggle =() =>{
        setModal(!modal);
    }
    const saveTask= (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }
    return(
        <>
        <div className="header text-center">
            <h1>ToDo List</h1>
            <button className="btn btn-primary" onClick={()=> setModal(true)}  > Add Task</button>
        </div>
        <div className="task-container">
            {taskList && taskList.map((obj, index) => <ToDo taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>)}

        </div>
        <AddTask toggle={toggle} modal={modal} save ={saveTask}/>
        </>
    );
};

export default ToDoList;