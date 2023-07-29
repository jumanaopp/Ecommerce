import React, { useEffect, useState } from 'react'
import AdminNavM from '../components/navbar/AdminNavM';
import axios from 'axios';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewProducts() {
    const navigate = useNavigate()
const [product,setProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/products/allproducts").then((data) => {
          console.log(data);
          setProduct(data.data.details);
          console.log(product);
        });
      }, []);


      const edit = (id)=> {
        navigate(`/edit/${id}`)
      }
      

      const deletebtn =  (id)=>{
        console.log(id);
       
        axios.delete(`http://localhost:8000/products/delete/${id}`)
        .then((res)=>{
          console.log(res);
        //   console.log(res.data);
          window.location.reload()
        })
         }
  return (
    <>
<AdminNavM/>
        
<div class="small-container">
    <h2 class="title">Featured Products</h2>
    <div class="row">
    { product.map((data,key) => (
<>
        <div class="col-4">
            <div class="products">
            <div class="products-img">
            <img  src={`assets/${data.image}`}/>
            </div>
                <h4>{data.pname}</h4>
                
                <p>{data.rate}</p>
                <DeleteIcon color='success'  onClick={()=>{deletebtn(data._id)}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BorderColorIcon color='success' onClick={()=>{edit(data._id)}}/>
        </div>
        
        </div>
       
    
    </>
    ))}
    
        </div>
        </div>
        
    </>
  )
}
