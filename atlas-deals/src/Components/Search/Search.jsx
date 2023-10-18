import React, {useEffect, useState} from 'react'

// Impported icons ===>
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

import { useTranslation } from '../../Languages/Translation';

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {

   useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 
  const { translate } = useTranslation();
  const [mission, setMission] = useState(false)
  const [services, setServices] = useState(true)
  const [values, setValues] = useState(false)

  const handleMission = () => {
    setMission(true)
    setServices(false)
    setValues(false)
  }

  const handleServices = () => {
    setServices(true)
    setMission(false)
    setValues(false)
  }

  const handleValues = () => {
    setValues(true)
    setServices(false)
    setMission(false)
  }
  

  return (
    
        <div className='search container section'>
          <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer grid">
            <div className="btns flex">
              <div onClick={handleMission} className={`singleBtn ${mission ? 'active' : ''}`}>
                <span>{translate('our-mission')}</span>
              </div>
              <div onClick={handleServices} className={`singleBtn ${services ? 'active' : ''}`}>
                <span>{translate('our-services')}</span>
              </div>
              <div onClick={handleValues} className={`singleBtn ${values ? 'active' : ''}`}>
                <span>{translate('our-values')}</span>
              </div>
            </div>
      
            <div data-aos="fade-up" data-aos-duration="2500" >
              {mission && <p><b>{translate('our-mission')} </b>{translate('mission-description')}</p>}
              {services && 
              <>
                <p>
                <b>{translate('services-description-header-one')}</b> {translate('services-description-one')}
              </p>
              <p>
                <b>{translate('services-description-header-two')}</b> {translate('services-description-two')}
              </p>
              <p>
                <b>{translate('services-description-header-three')}</b> {translate('services-description-three')}
              </p>
              <p>
                <b>{translate('services-description-header-four')}</b> {translate('services-description-four')}
              </p>
              </>
              }
              {values &&
              
              <><p>
           <b>{translate('values-description-header-one')}</b> {translate('values-description-one')}
        </p>
        <p>
          <b>{translate('values-description-header-two')}</b> {translate('values-description-two')}
        </p>
        <p>
           <b>{translate('values-description-header-three')}</b> {translate('values-description-three')}
        </p>
        <p>
          <b>{translate('values-description-header-four')}</b> {translate('values-description-four')}
        </p>
        <p>
           <b>{translate('values-description-header-five')}</b>{translate('values-description-five')}
           </p></>}
            </div>
          </div>
        </div>
      
  )
}

export default Search

{/*                 
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder='Where do you want to go?'/>
                        </div>
                    </div>

                  
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RiAccountPinCircleLine className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Travelers</h4>
                            <input type="text" placeholder='Add guests'/>
                        </div>
                    </div>

                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check In</h4>
                            <input type="text" placeholder='Add date'/>
                        </div>
                    </div>

                
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon'/>
                        </div>
                        <div className="texts">
                            <h4>Check Out</h4>
                            <input type="text" placeholder='Add date'/>
                        </div>
                    </div>

                    <button className='btn btnBlock flex'>Search Flight</button> */}