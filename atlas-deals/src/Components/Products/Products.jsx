import React , {useEffect} from 'react'
import sehpa1 from '../../assets/sehpa1.jpeg'
import sehpa2 from '../../assets/sehpa2.jpeg'
import sehpa3 from '../../assets/sehpa3.jpeg'
import sehpa4 from '../../assets/sehpa4.jpeg'
import sehpa5 from '../../assets/sehpa5.jpeg'
import sehpa7 from '../../assets/sehpa7.jpeg'
import sehpa8 from '../../assets/sehpa8.jpeg'
import sehpa9 from '../../assets/sehpa9.jpeg'
import sehpa10 from '../../assets/sehpa10.jpeg'
import sehpa12 from '../../assets/sehpa12.jpeg'
import sehpa13 from '../../assets/sehpa13.jpeg'
import sehpa14 from '../../assets/sehpa14.jpeg'
import sehpa15 from '../../assets/sehpa15.jpeg'
import sehpa16 from '../../assets/sehpa16.jpeg'
import sehpa17 from '../../assets/sehpa17.jpeg'
import sehpa18 from '../../assets/sehpa18.jpeg'
import sehpa19 from '../../assets/sehpa19.jpeg'
import AtlasBeyaz from '../../assets/stone.png'

 // import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from '../../Languages/Translation';
import { Link } from 'react-router-dom'

const travelers = [
    {
     id: 1,
     destinationImage: sehpa1,
     images: [sehpa1, sehpa1, sehpa1, ] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 1',
   
    },
    {
     id: 2,
     destinationImage: sehpa2,
     images: [sehpa2, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 2',
     
    },
    {
     id: 3,
     destinationImage: sehpa3,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: ' ÜRÜN 3',
  
    },
    {
     id: 4,
     destinationImage: sehpa4,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 5',
    
    },
    {
     id: 5,
     destinationImage: sehpa5,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 6',
     
    },
    {
     id: 6,
     destinationImage: sehpa7,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 7',
     
    },
    {
     id: 7,
     destinationImage: sehpa8,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 8',
     
    },
    {
     id: 8,
     destinationImage: sehpa9,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 9',
     
    },
    {
     id: 9,
     destinationImage: sehpa10,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 10',
     
    },
    {
     id: 10,
     destinationImage: sehpa12,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 11',
     
    },
    {
     id: 11,
     destinationImage: sehpa13,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 12',
    
    },
    {
     id: 12,
     destinationImage: sehpa14,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
 
    },
    {
     id: 13,
     destinationImage: sehpa15,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 13',

    },
    {
     id: 14,
     destinationImage: sehpa16,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 14',
   
    },
    {
     id: 15,
     destinationImage: sehpa17,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 15',
    
    },
    {
     id: 16,
     destinationImage: sehpa18,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 16',
   
    },
  
 ]
 
 export { travelers };
 

const Products = () => {

  
   
     useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  const { translate } = useTranslation();
  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
            <h2 data-aos="fade-down" data-aos-duration="2500">{translate('tables')}</h2>

            <div className="travelersContainer grid">
                {
                    travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) =>{
                        return(
                            <div  key={id} className="singleTraveler">
                                  <Link to={`/products/${id}`}><img src={destinationImage} className='destinationImage'/></Link> 
                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerImage} className='travelerImage'/>
                                    </div>
                                    <div className="travelerName">
                                        <span>{travelerName}</span>
                                        <Link to={`/products/${id}`}> <p className='details-font'>{translate('details')}</p></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Products