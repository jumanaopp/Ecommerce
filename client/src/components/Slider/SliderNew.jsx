import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderNew() {
    
  return (
    <>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={'assets/bgnew.jpg'} style={{width:"99%"  , height:"800px" ,alignContent:"center",position: 'absolute'}} />
        <h5 class="second-txt" style={{position: 'relative', height:"800px",fontStyle:'italic',fontFamily:'Georgia', color:'white',paddingTop:'190px',paddingLeft:'300px',fontSize:'60px',fontStyle:'italic'}}>
        100% FRESH AND ORGANIC FOODS 
       </h5>
      </SwiperSlide>

        <SwiperSlide><img src={'assets/newww.avif'} style={{width:"99%"  , height:"800px" ,alignContent:"center",position: 'absolute'}} /> 
        <h5 class="second-txt" style={{position: 'relative', height:"800px",color:'#C3EDC0',paddingTop:'150px',paddingLeft:'300px',fontFamily:'Georgia',fontStyle:'italic',fontSize:'60px',fontStyle:'italic'}}>
         WE SERVE FRESH <br/> VEGETABLES & FRUITS
       </h5>
        </SwiperSlide>
        
        
        <SwiperSlide><img src={'assets/freepic.avif'} style={{width:"99%" , height:"800px",opacity:'.9',position: 'absolute'}} />
        
        <h3 class="second-txt" style={{position: 'relative', height:"800px",color:'#C3EDC0',paddingTop:'150px',paddingLeft:'300px',fontFamily:'Georgia',fontStyle:'italic',fontSize:'60px',fontStyle:'italic'}}>
         SAVE 25% ON ALL <br/> ITEMS YOUR FIRST <br/>ORDER
       </h3>
        </SwiperSlide>
       
        {/* <SwiperSlide><img src={'assets/freee.avif'} style={{width:"100%" , height:"800px",opacity:'.9'}} /></SwiperSlide>
        <SwiperSlide><img src={'assets/mango.avif'} style={{width:"100%" , height:"800px",opacity:'.9'}} /></SwiperSlide>
        <SwiperSlide><img src={'assets/freshh.avif'} style={{width:"100%" , height:"800px",opacity:'.9'}} /></SwiperSlide>
        <SwiperSlide><img src={'assets/HD.jpg'} style={{width:"100%" , height:"800px", opacity:'.9'}} /></SwiperSlide>
        <SwiperSlide><img src={'assets/fresh.avif'} style={{width:"100%" , height:"800px",opacity:'.9'}} /></SwiperSlide>
       */}
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  )
}
