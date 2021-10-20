import React, { useState } from "react";
import EditTask from './EditTask';
//import AddTask from "./AddTask";

const ToDo= ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#FAC199",
            secondaryColor : "#FE9952"
        },
        {
            primaryColor : "#9FFAB6",
            secondaryColor : "#58E77C"
        },
        {
            primaryColor : "#73FEED",
            secondaryColor : "#09F8DB"
        },
        {
            primaryColor : "#7CEAFB",
            secondaryColor : "#15D9F7"
        },
        {
            primaryColor : "#8FD6FB",
            secondaryColor : "#45BAF8"
        },
        {
            primaryColor : "#C1B1F8",
            secondaryColor : "#8D6DF6"
        },
        {
            primaryColor : "#FB9D9D",
            secondaryColor : "#F80909"
        }
    ]
    const toggle =() =>{
        setModal (!modal);
    }
    const updateTask = (obj) =>{
            updateListArray(obj, index)
        
    }
    const handleDelete = () => {
        deleteTask(index)
    }

    return(
        <div class = "card-wrapper mr-5" >
        <div class = "card-top" style={{"background-color": colors[index%7].primaryColor}}></div>
        <div class = "task-holder">
            <span class = "card-header" style={{"background-color": colors[index%7].secondaryColor, "border-radius": "10px"}}>{taskObj.ID}</span>
            <p className = "mt-3">Name: {taskObj.Name}</p>
            <p className = "mt-3">Deadline: {taskObj.Deadline}</p>
            <p className = "mt-3">State: {taskObj.IsCompleted}</p>

            <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                <i class = "far fa-edit mr-3" style={{"color" : colors[index%7].secondaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                <i class="fas fa-trash-alt" style = {{"color" : colors[index%7].secondaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
            </div>
        </div> 
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default ToDo;