import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
 import './footer.css'
 import Fab from '@mui/material/Fab';
 import NavigationIcon from '@mui/icons-material/Navigation';
export default function Footer() {
  return (
    <>

<div  style={{ backgroundColor: "#3B444B" }}>
<footer class="text-center text-lg-start bg-white text-muted" >
  
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   

    <div  class="small-container" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
      <a href="" class="me-4 link-secondary">
      <FacebookIcon/>
      </a>
      <a href="" class="me-4 link-secondary">
      <TwitterIcon/>
      
      </a>
      <a href="" class="me-4 link-secondary">
     <GoogleIcon/>
      </a>
      <a href="" class="me-4 link-secondary">
        <GitHubIcon/>
      </a>
      <a href="" class="me-4 link-secondary">
      <InstagramIcon/>
      </a>
      <a href="" class="me-4 link-secondary">
     <LinkedInIcon/>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="" style={{ backgroundColor: 'black',color:'white'}}>
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h5 class="text-uppercase fw-bold mb-4" style={{color:'white'}}>
            <i class="fas fa-gem me-3 text-secondary"></i>VEGFOOD
          </h5>
          <p style={{color:'white'}}>
           Handpicked Organic<br/> Foods Directly<br/> from Farmers!!
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4" style={{color:'white'}}>
            Products
          </h6>
          <p style={{color:'white'}}>
            <a href="#!" class="text-reset">Vegetables</a>
          </p>
          <p style={{color:'white'}}>
            <a href="#!" class="text-reset">Fruits</a>
          </p>
          <p style={{color:'white'}}>
            <a href="#!" class="text-reset">Dried Nuts</a>
          </p>
          <p style={{color:'white'}}>
            <a href="#!" class="text-reset">Juices</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4" style={{color:'white'}}>
          Help
          </h6>
          <p style={{color:'white'}}>
            <a href="" class="text-reset"> Shipping Information</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Returns & Exchange</a>
          </p>
          <p style={{color:'white'}}>
            <a href="#!" class="text-reset">Privacy Policy</a>
          </p>
          <p style={{color:'white'}}>
            <a href="#!" class="text-reset">Terms & Conditions</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{color:'white'}}>
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p style={{color:'white'}}><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p style={{color:'white'}}>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p style={{color:'white'}}><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p style={{color:'white'}}><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
  

  {/* <!-- Copyright --> */}
  {/* <div class="text-center p-4" style={{ backgroundColor: "#4BB543" }}>
   
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/"></a>
  </div> */}
  {/* <!-- Copyright --> */}
</footer>

<Fab color='success' variant="extended">
  <NavigationIcon sx={{ mr: 1 }} />
  Navigate
</Fab>
</div>
    </>
  )
}
