import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './register.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import UserNavM from '../../components/navbar/UserNavM';


export default function Register() {

    const navigate = useNavigate();
  const [input, setInput] = useState({
    name:"",
    phno:"",
    address:"",
    email:"",
    username:"",
    password:""
  })
  
  const [user, setUser] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input,[name]: value });
  }

  
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^[6-9]\d{9}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
     
    
    if (!values.name) {
      errors.name = "User name is required!";
    }
    
    if (!values.phno) {
      errors.phno = "Contact Number is required!";
    }
    else if(!phoneno.test(values.phno)){
      errors.phno = "Enter valid Contact Number !";
    }
  
    if (!values.address) {
      errors.address = "Address is required!";
    }
   
   
    
    if (!values.email) {
      errors.email = "email is required!";
    }
     else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.repassword) {
      errors.repassword = "Confirmation Password is required";
    }
     else if (!strongPassword.test(values.password)){
      errors.password = "Password must contain alphabet, digit,special Charecters";
    }
    if(values.password!==values.repassword){
      errors.repassword = "Enter same password";
    }
    return errors;
    
  }
    


  const submit =  (e) => {
    console.log("dd",input);
    e.preventDefault();
    setFormErrors(validate(input));
        setIsSubmit(true);
        // if(Object.keys(formErrors).length === 0 && isSubmit){
     
      // console.log("jj",input);
      axios.post(`http://localhost:8000/register/save`, input).then((data) => {
       

        // console.log('data===',data);
        toast.success(data.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
        if (data.data.success == true) {
          navigate("/login");
        }
      }).catch((error)=>{
        console.log(error);
       
      })
   
  // };
};
  return (
    <>
     <UserNavM/>
    <ToastContainer/>
    
<div class="bg-img">
     <img className="bg-img" src={'assets/HDD.avif'} height={"90%"} width={"90%"}/>
     <h2 style={{color:"red"}}>SignUp</h2>
     <form>
     <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      
      <TextField id="standard-basic" name="name" label="Name" error={formErrors.name ? true : false} helperText={formErrors.name ? formErrors.name : ""} variant="standard" onChange={inputChange}/>
      
      <TextField id="standard-basic" label="Phone Number" name="phno" error={formErrors.phno ? true : false} helperText={formErrors.phno ? formErrors.phno : ""} variant="standard" onChange={inputChange}/>
      
      <TextField id="standard-basic" label="Address" name="address" variant="standard" onChange={inputChange}/>
      
      <TextField id="standard-basic" label="Email" name="email" variant="standard" onChange={inputChange}/>
     
      <TextField id="standard-basic" label="Username"  name ="username" error={formErrors.username ? true : false} helperText={formErrors.username ? formErrors.usernam : ""} variant="standard"  onChange={inputChange}/>
      <TextField id="standard-basic" label="Password" name="password" variant="standard" onChange={inputChange}/>
      <Button type ="submit" class='btn' variant="contained" onClick={submit}>SignUp</Button>
    </Box> 
    </form>
     </div> 
         

         
    </>
  );
    
}
