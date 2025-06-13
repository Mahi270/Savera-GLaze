import React from "react"
import Hero from '../component/Hero/Hero.jsx'
import Popular from "../component/Popular/Popular.jsx"
import Offers from "../component/Offers/Offers.jsx"
import NewCollections from "../NewCollections/NewCollections.jsx"
import Newsletter from "../component/NewsLetter/NewsLetter.jsx"
import Footer from "../component/Footer/Footer.jsx"


const Shop =() => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    
    </div>
  )
}

export default Shop


