
import React from 'react'
import './usernav.css'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function UserNav() {
  return (
    <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        {/* <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        /> */}
      </a>
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/home">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/products"> Products</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/fruits">Fruits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/vegetables">Vegetables</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/newcart">Cart</a>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
    <div class="d-flex align-items-center">
      {/* <!-- Icon --> */}
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      {/* <!-- Notifications --> */}
      <div class="dropdown">
        {/* <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        > */}
          {/* <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span> */}
        {/* </a> */}
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      {/* <!-- Avatar --> */}
      <div class="dropdown">
        {/* <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        > */}
          <li>  
              <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="green" />
              </Badge>
                </li>
          {/* <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          /> */}
        {/* </a> */}
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
 {/* <!-- Right elements --> */}
 </div>
  {/* <!-- Container wrapper --> */}
</nav>











    {/* <div class="menu-itemm">
       <div class="container11"> 
        */}
             {/* <div class="logo">
               <a href="index-2.html">
                
                  <img  src={'assets/logoo.avif'} height={"100px"} alt=""/>
        
               </a>
             </div> */}
          
               {/* <nav class="mainmenuu">
                 <ul>
                   <li class=""><a href="/home">Home</a></li>
                   <li><a href="/products">Products</a></li>
                   <li><a href="/fruits">Fruits</a></li>
                     <li><a href="/vegetables">Vegetables</a></li>
                     <li><a href="/newcart">cart</a></li> */}

                 {/* <ul class="dropdown"> 
               
               <li><a href="#">Vegitables</a></li>
              <li><a href="#">Fruits</a></li>
              <li><a href="#">Juices</a></li>
              <li><a href="#">Dried Items</a></li>
              
            </ul> */}
                  
              {/* <li><a href="/cart">Cart</a></li> */}
{/*               
              <li>  
              <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="green" />
              </Badge>
                </li>
                  
                   <li><a href="/user">CheckOut</a></li>   
                 </ul>
               </nav>
               <div class="nav-right search-switch">
                 <i class="icon_search"></i>
               </div>
             </div>
           </div>  */}
        
       
    


    </>
  )
}

