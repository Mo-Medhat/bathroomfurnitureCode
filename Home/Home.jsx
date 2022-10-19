import React from 'react'
import FocusSlider from './FocusSlider/FocusSlider'
import MainSlider from './MainSlider/MainSlider'
import ProductSections from './ProductSections/ProductSections'

function Home() {
  return <>
    <MainSlider/>
    <ProductSections/>
    <FocusSlider/>
  </>
}

export default Home