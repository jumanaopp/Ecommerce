
import React from 'react'
import './usernav.css'
export default function UserNav() {
  return (
    <>
    <div class="menu-item">
       <div class="container">
        
         <div class="row">
           <div class="col-lg-2">
             <div class="logo">
               <a href="index-2.html">
                
                 <img src="img/logo.png" alt="" />
               </a>
             </div>
           </div>
           <div class="col-lg-10">
             <div class="nav-menu">
               <nav class="mainmenu">
                 <ul>
                   <li class="active"><a href="/userindex">Home</a></li>
                   {/* <li><a href="/rooms">Rooms</a> */}
                     <li><a href="/products">Products</a></li>


                   {/* <ul class="dropdown"> */} 
              {/* <li><a href="">Room Details</a></li> */}
               {/* <li><a href="#">Vegitables</a></li>
              <li><a href="#">Fruits</a></li>
              <li><a href="#">Juices</a></li>
              <li><a href="#">Dried Items</a></li>
              
            </ul>
                    */}
                  
                   <li><a href="/cart">Cart</a></li>
                  
                   <li><a href="/user">CheckOut</a></li>   
                 </ul>
               </nav>
               <div class="nav-right search-switch">
                 <i class="icon_search"></i>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    </>
  )
}

