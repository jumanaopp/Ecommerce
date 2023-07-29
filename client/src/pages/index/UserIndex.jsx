import React from 'react'
import UserNav from '../../components/navbar/UserNav'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/footer/Footer'
// import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import Items from '../../components/items/Items'
import UserProduct from '../../components/products/UserProduct'
import SliderNew from '../../components/Slider/SliderNew'
import FooterNew from '../../components/footer/FooterNew'
import Category from '../Category'

export default function UserIndex() {
  return (
    <>
    <UserNav/>
    <SliderNew/> 
   
   
    <Category/>
    <UserProduct/>
    <Banner/>
    <Footer/>
    
    </>
  )
}
