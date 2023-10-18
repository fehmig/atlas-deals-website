import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import Logo from '../../assets/AtlasStone.png';
import { TranslationProvider, useTranslation } from '../../Languages/Translation';

const Navbar = () => {
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };
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
            <span>2023</span>
          </div>
        </div>

        <div className={transparent}>
          <div  className='logoDiv'>
            <Link to='/' >
              <img src={Logo} className='Logo' />
            </Link>
          </div>

          <div className={active}>

        
          <li className='btn btnOne flex'>
              <Link to='/' >
              {translate('home')}

              </Link>
            </li>
            </div>

            <button  className='btnTwo btn'>
            <Link to='/' >
            {translate('home')}
            </Link>
          </button>

          <div onClick={showNavBar} className='toggleIcon'>
            <CgMenuGridO className='icon' />
          </div>

          
        </div>
      </div>
   
  )
};

export default Navbar;
