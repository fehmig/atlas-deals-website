import React, {useEffect} from 'react'

//Imported Images
import gridImage from '../../assets/Images-Grid.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const HowWeWork = () => {

   useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='support container section'>
         <div className="sectionContainer">
            <div  className="titlesDiv">
                <small>export support</small>
                <h2>How We Work?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>

            <div className="infoDiv grid">
                <div className="textDiv grid">
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
                        <span className="number">01</span>
                        <h4>Lorem Ipsum is simply dummy</h4>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
                        <span className="number colorOne">02</span>
                        <h4>Lorem Ipsum is simply dummy</h4>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="4500" className="singleInfo">
                        <span className="number colorTwo">03</span>
                        <h4>Lorem Ipsum is simply dummy</h4>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                    </div>

                </div>

                <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
                    <img src={gridImage} alt="" />
                </div>

            </div>
         </div>
    </div>
  )
}

export default HowWeWork