import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './vieworder.css'
import AdminNavM from '../components/navbar/AdminNavM';
export default function ViewOrder() {

    const [vieworder,setvieworder] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/order/view-order").then((data) => {
          console.log(data);
          setvieworder(data.data.details);
          console.log(vieworder);
        });
      }, []);
  return (
    <>
    <AdminNavM/><br/>
    {
    vieworder.map((data,key) => (
    
 <div className="form-container">
    <div class="card text-center">
  <div class="card-header">ORDER</div>
  <div class="card-body">

       {/* <img src={`assets/${data.image}`} class="card-img-top" alt="..." height={"250px"} width={"350px"}/><br/>
       */}
 
         
 <h5 class="card-title">Oreder Id:{data._id}</h5>
    <p class="card-text">User Id  :{data.userid}</p>
    <p class="card-text">Product Id:{data.productid}</p>
    <p class="card-text">Total Price :{data.totalAmount}$ </p>
   
    <a href="#" class="btn btn-primary">Accept Order</a>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>
</div>
 
     
      ))}

    
    {/* <div
 className="form-container">
{/* <div class="row"> */}
 
{/* {
    vieworder.map((data,key) => (
    <p class="card-text"> 

<div class="col-sm-8"> */}
       {/* <img src={`assets/${data.image}`} class="card-img-top" alt="..." height={"250px"} width={"350px"}/><br/>
       */}
 
          {/* </div>

     <div class="col-md-4">
     <h6> Oreder Id:{data._id} </h6>
     
     <h6> Product Id:{data.productid} </h6><br/> 
      
     <h6> User Id  :{data.userid} </h6><br/> 
       <h6> Total Price :{data.totalAmount}$  </h6><br/> 
      
       </div><br/><br/>
       <a href="#" class="btn btn-danger"> Accept </a>
    
     
      </p>
      ))}
   
  
  </div>
  </div>
  */} 
    </>
  )
}
