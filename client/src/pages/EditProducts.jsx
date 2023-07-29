import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavM from '../components/navbar/AdminNavM';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function EditProducts() {

    const [edit,setEdit] = useState([])
    const navigate = useNavigate()
    const { id } =  useParams();

    const inputChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value });
      };



      useEffect(() => {
        
        axios.get(`http://localhost:8000/products/viewone/${id}`).then((res) => {
          setEdit(res.data.details);
      });
  }, []);
        
      const update = (e)=>{
          axios.post(`http://localhost:8000/products/update/${id}`, edit).then((data) => {
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
    // console.log(res.data);
    navigate('/viewproducts');
  }
  )}
  
      
  return (
    <>
    <AdminNavM/><br/><br/><br/>
<div class="form-container">
<ToastContainer/>
<h2 style={{color:"green"}}>Edit Products</h2>
    <form>
    <div class="form-group">
        <label for="name">Product Name:</label>
        <input type="text"  name="pname" onChange={inputChange}
             value={edit.pname}   required/>
      </div>
     
    <div class="form-group">
        <label for="category">Category:</label>
        <select id="category" name="category" onChange={inputChange}  value={edit.category}>
          <option value="">Select category</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="juices">Juices</option>
          <option value="driednuts">Dried Nuts</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="rate">Price($):</label>
        <input type="text"  name="rate" onChange={inputChange}
                required value={edit.rate}/>
      </div>
     
      {/* <div class="form-group">
        <label for="services">Upload image</label>
        <input type="file" onChange={(e)=>{setFile(e.target.files[0]);setInput({ ...input,image: e.target.files[0].name })}} name="image"/>
      </div> */}
      <div class="form-group button">
        <input type="submit" value="Update" onClick={update}/>
      </div>
    </form>
  </div>


    </>
  )
}
