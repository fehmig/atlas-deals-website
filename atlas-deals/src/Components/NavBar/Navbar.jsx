import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import About from '../About/About';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg'; // Import the close icon
import Logo from '../../assets/AtlasStone.png';
import { useTranslation } from '../../Languages/Translation';


const Navbar = () => {
  const [active, setActive] = useState('navBarMenu');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu toggle
  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  const [transparent, setTransparent] = useState('navBarTwo');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('navBarTwo activeHeader');
    } else {
      setTransparent('navBarTwo');
    }
  };
  window.addEventListener('scroll', addBg);

  const handleScroll = (target) => {
    removeNavBar();
    scroller.scrollTo(target, {
      duration: 900,
      smooth: true,
    });
  };

  const { translate, setLanguage } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguage(language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div className='none flex'>
          <li
            className={`flex ${selectedLanguage === 'en' ? 'selected' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            <AiOutlineGlobal className='icon' /> EN
          </li>
          <li
            className={`flex ${selectedLanguage === 'tr' ? 'selected' : ''}`}
            onClick={() => changeLanguage('tr')}
          >
            TR
          </li>
        </div>
        <div className='atb flex'>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>

      <div className={transparent}>
        <div onClick={() => handleScroll('home')} className='logoDiv'>
          <Link to='home' spy={true} smooth={true} offset={-50} duration={500}>
            <img src={Logo} className='Logo' />
          </Link>
        </div>

        <div className={`${active} ${isMenuOpen ? 'showNavBar' : ''}`}> {/* Toggle showNavBar class */}
          <ul className='menu flex'>
            <li onClick={() => handleScroll('about')} className='listItem'>
              <Link to='about' spy={true} smooth={true} offset={-50} duration={500}>
                {translate('about')}
              </Link>
            </li>
            <li onClick={() => handleScroll('products')} className='listItem'>
              <Link to='products' spy={true} smooth={true} offset={-50} duration={500}>
                {translate('e-catalouge')}
              </Link>
            </li>
          </ul>

          <li className='btn btnOne flex'>
            <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}>
              {translate('contact')}
            </Link>
          </li>
        </div>

        <button onClick={() => handleScroll('contact')} className='btnTwo btn'>
          <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}>
            {translate('contact')}
          </Link>
        </button>

        <div onClick={toggleMenu} className='toggleIcon'>
          {isMenuOpen ? (
          
            <CgClose className='icon' />
          ) : (
         
            <CgMenuGridO className='icon' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
