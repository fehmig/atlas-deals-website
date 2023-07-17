import React from 'react'

//Imported Images ===>
import video from '../../assets/video.mp4'
import AtlasBeyaz from '../../assets/AtlasBeyaz.png'

import { useTranslation } from '../../Languages/Translation';

const Home = () => {
  const { translate } = useTranslation();
  return (
    <div className='home flex container'>
        <div className="mainText">
            <h1>{translate('slogan')}</h1>
        </div> 
        <div className="homeImages flex">
          <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          </div>
          {/* <img src={AtlasBeyaz} className="plane" alt="Image" /> */}
          
        </div>
    </div>
  )
}

export default Home