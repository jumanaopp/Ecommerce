import React from 'react'
// import Button from '@mui/material/Button';
// import './category.css'
export default function Category() {
  return (
    <>
  
 
<div class="container" style={{ backgroundColor: 'C3EDC0',width:"100%", height:"600px" }}>
<h2 class="title" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>PRODUCT CATEGORY</h2>
  <div class="row">
    <div class="col-md">
    <img  src={'assets/JUICEE.png'} data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" />
    <center>
    <button href="/juice" style={{backgroundColor:'#F48020', borderRadius:'20px', color:'#4BB543', border:'none' ,padding:'4px 6px',width:'100px'}}>JUICES</button>
    </center>
   <h5><center> Fresh juice can add energy and good <br/>mood to your day</center></h5>
   
   {/* <button type='submit'style={{backgroundColor:'white',borderRadius:'2px', color:'#4BB543', border:'none'}} >Juices</button><br/><br/>
                */}
    {/* <button type="button"  class="btn btn-success">Success</button> */}
      
    </div>
    <div class="col-md">
    <img  src={'assets/VEG.png'} data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000"/>
    <center>
    <button href="/fruits" style={{backgroundColor:'#F48020', borderRadius:'20px', color:'#4BB543', border:'none' ,padding:'4px 6px',width:'110px'}}>FRUITS</button>
    </center>
    <h5><center> Farmers fruits are full of vitamins and<br/> are extremely useful</center></h5>
   
    </div>
    <div class="col-md">
    <img  src={'assets/COLY.webp'}data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" />
    <center>
    <button href="/vegetables" style={{backgroundColor:'#F48020', borderRadius:'20px', color:'#4BB543', border:'none' ,padding:'4px 6px',width:'100px'}}> VEGETABLES</button>
    </center>
    <h5><center> Vegetables are irreplaceable source of <br/> minerals and nutrients</center></h5>

    </div>
  </div>
</div>
      
                
                
                
          
                
                
    </>
  )
}
