import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import './products.css'
import { useNavigate, useParams } from 'react-router-dom';
import UserNav from '../components/navbar/UserNav';
export default function Vegetables() {
    const navigate = useNavigate()
    const [product,setProduct] = useState([])
        useEffect(() => {
            axios.get("http://localhost:8000/products/vegetables").then((data) => {
              console.log(data);
              setProduct(data.data.details);
              console.log(product);
            });
          }, []);
  return (
    <>
 
    <UserNav/>
    <div class="small-container">
        <h2 class="title">Featured Products</h2>
        <div class="row">
        { product.map((data,key) => (
    
            <div class="col-4" data-aos="flip-left" data-aos-delay="50" data-aos-duration="500">
                <div class="products">
                <div class="products-img">
                <img  src={`assets/${data.image}`}/></div>
                    <h4>{data.pname}</h4>
                    
                    <p>{data.rate}$</p>
            </div>
            </div>
            ))}
        </div>
        </div>
       
        </>
  )
}
