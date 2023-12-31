import React, {useEffect} from 'react'

// Imported icons ==========>
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

//Imported Images ===>
import Logo from '../../assets/Atlas.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2500" className="gridOne grid">
          <div className="logoDiv">
            <img src={Logo} className='Logo'/>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry!</p>
          <div className="socialIcons flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">E-Catalouge</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
            <span className="linkTitle">Quick Guide</span>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">How to</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Social</a>
            </li>
           
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
            <span className="linkTitle">Queries</span>
            <li>
              <a href="#">Chauffuer</a>
            </li>
            <li>
              <a href="#">Our partners</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Transportation</a>
            </li>
           
          </div>
      </div>

      <div className="copyrightDiv flex">
        <p> Developed by Fehmi Günay </p>

      </div>
      
    </div>
  )
}

export default Footer