import {Button, Modal, ModalHeader, ModalBody,ModalFooter} from 'reactstrap';
import React, { useState } from 'react';

const AddTask = ({modal, toggle, save}) => {
    const [formValue, setFormValue] = useState({
        ID: 0,
        Name: "",
        Deadline: "",
        IsCompleted:"",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
      const {ID, Name, Deadline, IsCompleted } = formValue;
      formValue.ID=Math.floor(Math.random() * 100 +1);
      const handleSave = () =>{
        let taskObj={}
          taskObj["ID"] = ID
          taskObj["Name"]= Name
          taskObj["IsCompleted"] = IsCompleted
          taskObj["Deadline"]= Deadline
         
          if (ID!=="" && Name!=="" && IsCompleted!=="" && Deadline!=="") {
            save(taskObj)
          }
          else return alert ("Something is wrong!")
      }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                    <div classID="form-group">
                        <label>ID</label>
                        <input type="number" className="form-control"  value={ID} onChange= {handleChange} name="ID"/>
                    </div>
                    <div className = "form-group">
                        <label>Name</label>
                        <input type="text" className = "form-control" value = {Name} onChange = {handleChange} name = "Name"/>
                    </div>
                    <div className="form-group">
                        <label>Deadline</label>
                        <input type="date" className="form-control"  value={Deadline} onChange= {handleChange} name="Deadline"/>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" className = "form-control" value = {IsCompleted} onChange = {handleChange} name = "IsCompleted"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{''}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
      

    );
};

export default AddTask;