import React, { useState } from 'react'
import './login.css'

import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import UserNavM from '../../components/navbar/UserNavM';

export default function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username:"",
    password:""
  });
  const [user, setUser] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  const validate = (values) => {
    var error = {};
    if (!values.username) {
      error.username = "enter  username";
    }
    if (!values.password) {
      error.password = "enter password";
    }

    return error;
  };
  const submit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     
    console.log('hii');
        console.log(input);
        axios.post("http://localhost:8000/login/checklogin", input)
          .then((data) => {
            console.log(data);
            const token = localStorage.setItem("user", data.data.token);
                
            if (data.data.success == true) {
              if (data.data.role == 0) {
                navigate("/addproducts");
              } else {
                navigate("/home");
              }
            }
          });
     
        }
  };
  return (
    <>
    <UserNavM/>
     <div class="bg-img">
     <img className="bg-img" src={'assets/login1.jpg'} height={"90%"} width={"90%"}/> 
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
        <br/> <br/>
      <h2><center>LOGIN</center></h2>
      <TextField id="standard-basic" label="Username"  name="username" error={formErrors.username ? true : false} helperText={formErrors.username ? formErrors.username : ""} variant="standard" onChange={inputChange} />
      <TextField id="standard-basic" label="Password" name="password" error={formErrors.password ? true : false} helperText={formErrors.password ? formErrors.password : ""} variant="standard" onChange={inputChange} />
      
      <Button type='submit' class='btn' variant="contained" onClick={submit}>SignUp</Button>
    </Box> 
   
  
</div>

    </>
  )
}

