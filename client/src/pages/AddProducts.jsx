import React, { useState } from 'react'
import './addproducts.css'
import AdminNavM from '../components/navbar/AdminNavM'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

 
export default function AddProducts() {

    const [input, setInput] = useState({});
    const [product, setProduct] = useState([]);
    const [file, setFile] = useState();
  console.log(input);
  console.log(file);
    const inputChange = (e) => {
      const { name, value } = e.target;
      setInput({ ...input,[name]: value });
    }
  
    const submit = async (e) => {
      e.preventDefault();
      try {
        console.log(input);
        if(file){
          const Data = new FormData()
          const filename = file.name
          Data.append('name',filename)
          Data.append('file',file) 
          
          axios.post("http://localhost:8000/products/upload", Data).then((data) => {
            console.log("file uploaded");
        })
        axios.post("http://localhost:8000/products/saveproducts", input).then((data) => {
          
          console.log(data);
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
          
        }).catch((err)=>{
          console.log(err);
         
        })
      }
      }catch (error) {}
    }
  
  return (
    <>
    <AdminNavM/><br/><br/><br/>
    <div class="form-container">
<ToastContainer/>
<h2 style={{color:"green"}}>Add Products </h2>
    <form>
    <div class="form-group">
        <label for="name">Product Name:</label>
        <input type="text"  name="pname" onChange={inputChange}
                required/>
      </div>
     
    <div class="form-group">
        <label for="category">Category:</label>
        <select id="category" name="category" onChange={inputChange}>
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
                required/>
      </div>
     
      <div class="form-group">
        <label for="services">Upload image</label>
        <input type="file" onChange={(e)=>{setFile(e.target.files[0]);setInput({ ...input,image: e.target.files[0].name })}} name="image"/>
      </div>
      <div class="form-group button">
        <input type="submit" value="Add Product" onClick={submit}/>
      </div>
    </form>
  </div>

    </>
  )
}
