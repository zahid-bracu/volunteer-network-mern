import React, {useState,useContext} from 'react';
import './style.css';
import { Button,Form,FormGroup,Label,Input } from 'reactstrap';
import { useHistory,useParams } from "react-router-dom";
import Data from './Data';
import {UserContext} from '../App';

const Register = () => {


    const [user,setUser]=useContext(UserContext);
    const {id}=useParams(); 
   
    var work=Data.filter(key=> key.id==id);
    var action=work[0];
    console.log(action.name)


    let history = useHistory();
    function saveData(event){
        console.log("Ok");
        event.preventDefault();
        var name=document.getElementById('name').value;
        var date=document.getElementById('date').value;
        var mail=document.getElementById('email').value;
        var organize=document.getElementById('organize').value;
        var description=document.getElementById('description').value;

        //console.log(name+" : "+number+" : "+mail+" : "+address);
        var information={
            "name":name,
            "date":date,
            "mail":mail,
            "description":description,
            "organize":organize
        }

         console.log(information);


         fetch('http://localhost:3006/addPeople',{
               method:'POST',
               headers:{'Content-Type': 'application/json'},
               body:JSON.stringify(information)
           }).then(res=>res.json())
           .then(data=>{
               console.log(data);
               if(data){
                history.push("/success");
               }
           })
    }



    return (
        <div className="container">
           
            <div className="register-box mx-auto">
            <Form onSubmit={saveData}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" value={user.name} id="name" placeholder="Enter Name" />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" value={user.mail} id="email" placeholder="Enter Email" />
                </FormGroup>


                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Enter Date"
                    />
                </FormGroup>



                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" id="description" placeholder="Enter Description" />
                </FormGroup>


                <FormGroup>
                    <Label for="organize">Volunteer Work</Label>
                    <Input type="text" name="organize" id="organize" value={action.name} placeholder="" />
                </FormGroup>

                <button className="btn btn-primary btn-custom-2">Registration</button>
            </Form>
            </div>
        </div>
    );
};

export default Register;