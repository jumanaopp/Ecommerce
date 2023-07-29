import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './products.css'
import { useNavigate, useParams } from 'react-router-dom';
import UserNav from '../navbar/UserNav';

export default function Products() {
  const {id} = useParams()
  const token = localStorage.getItem('user')
  console.log(token);

    // const navigate = useNavigate()

    const [product,setProduct] = useState([])
    const [cart,setcart] = useState({
      productid: ""
    })
    
    // const [cartItems, setCartItems] = useState([]);
        useEffect(() => {
            axios.get("http://localhost:8000/products/allproducts").then((data) => {
              console.log(data);
              setProduct(data.data.details);
              console.log(product);
            });
          }, []);

const addTOcart = (id)=>{
  // e.preventDefault();
  console.log("id--->",id);
  setcart((prevCart)=>{
     return{ ...prevCart,productid: id};
  });
  console.log("cart--->",cart);
  try {
  axios.post(`http://localhost:8000/cart/savecart`, cart, 
    
  { headers:{"Authorization" : `Bearer ${token}`} }).then((data)=>{
   
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

    
  }).catch((error)=>{console.log(error);
  })

} catch (error) {}

};




  return (
    <>
<UserNav/>

<div class="small-container">
<ToastContainer/>
    <h2 class="title" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Featured Products</h2>
    <div class="row">
    { product.map((data,key) => (

        <div class="col-4" data-aos="flip-left" data-aos-delay="50" data-aos-duration="500">
            <div class="products">
            <div class="products-img">
            <img  src={`assets/${data.image}`}/></div>
                <h4>{data.pname}</h4>
                <h5>{data.rate}$</h5>
                
                {/* <p>{data.rate}</p>
                <Link  to={`/newcart/${data._id}`} onClick={()=>{addTOcart(data._id)}}>Add To Cart</Link><br/><br/> */}
                <button type='submit'style={{backgroundColor:'#4BB543',borderRadius:'25px', color:'white', border:'none'}} onClick={()=>{addTOcart(data._id)}}>Add To Cart</button><br/><br/>
               
        </div>
        </div>
        ))}
    </div>
    </div>
    </>
  )
}

