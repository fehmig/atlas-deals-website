import React from 'react'
import Footer from '././src/Components/Footer/Footer'
import Home from '././src/Components/Home/Home'
import Navbar from '././src/Components/NavBar/Navbar'
import Search from '././src/Components/Search/Search'
import About from '././src/Components/About/About'
import Products from '././src/Components/Products/Products'
import HowWeWork from '././src/Components/HowWeWork/HowWeWork'
import Contact from '././src/Components/Contact/Contact'
import { Link, Element, scroller } from 'react-scroll';
import { TranslationProvider } from '././src/Languages/Translation'

const AnaSayfa = () => {
  return (
    <TranslationProvider>
    <div>
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
     
      <HowWeWork/>
  
      <Element name="contact">
        <Contact />
      </Element>
      <Footer/>
    </div>
    </TranslationProvider>
  )
}

export default AnaSayfa