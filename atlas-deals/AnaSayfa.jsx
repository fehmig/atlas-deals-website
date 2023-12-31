import React from 'react'
import Footer from '././src/Components/Footer/Footer'
import Home from '././src/Components/Home/Home'
import Navbar from '././src/Components/NavBar/Navbar'
import Search from '././src/Components/Search/Search'
import About from '././src/Components/About/About'
import Products from '././src/Components/Products/Products'
import HowWeWork from '././src/Components/HowWeWork/HowWeWork'
import Contact from '././src/Components/Contact/Contact'
import {  Element  } from 'react-scroll';
import { TranslationProvider } from '././src/Languages/Translation'
import { Helmet } from 'react-helmet'

const AnaSayfa = () => {
  return (
    <TranslationProvider>
    <div>
        <Helmet>
          <title> Atlas Stone Furnitures</title>
          <meta name="description" content="Atlas Stone Furnitures" />
        </Helmet>
      <Navbar/>
      <Element name="home">
        <Home />
      </Element>
       <Element name="products">
        <Products />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Search/>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer/>
    </div>
    </TranslationProvider>
  )
}

export default AnaSayfa