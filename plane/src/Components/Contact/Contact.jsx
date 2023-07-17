import React, {useEffect} from 'react'
// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from '../../Languages/Translation';

const Contact = () => {

 
   useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])  
  const { translate } = useTranslation();

  return (
    <div className='subscribe  section'>
        <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer container">
            <h2>{translate('contactB')}</h2>
            {/* <div className="inputDiv flex">
                <input type="text"  placeholder='Enter your email address'/>
                <button className='btn'>Subcribe Now</button>
            </div> */}
               <div className='contact'>
        <div className='contact-info'>
          <h3>{translate('adress')}</h3><p>Konaklar Mah. Ladin Sokak, No:11-C 
Beşiktaş İstanbul Turkey
</p><br/>
          <h3>{translate('phone')}:</h3>
          <h3>{translate('email')}:</h3>
        </div>
        <div className='contact-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.020351381032!2d29.007732075780186!3d41.09040197133908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab67a6557e277%3A0x504f6d35ef602fcb!2zS29uYWtsYXIsIExhZGluIFNrLiBObzoxMSBEOmMsIDM0MzMwIEJlxZ9pa3RhxZ8vxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1687379206877!5m2!1str!2str" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

        </div>
    </div>
  )
}

export default Contact