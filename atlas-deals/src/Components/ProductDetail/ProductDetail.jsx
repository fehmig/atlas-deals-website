import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar2 from '../NavBar/Navbar2';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import '../../main.css';
import ProductSlider from '../Products/ProductSlider';
import RelatedProducts from '../Products/RelatedProducts';
import { TranslationProvider, useTranslation } from '../../Languages/Translation';
import AfyonViolet from '../../assets/AfyonViolet.png'
import AleksandırBlack from '../../assets/AleksandırBlack.png'
import AncientRed from '../../assets/AncientRed.png'
import CreamDarkBeige from '../../assets/CreamDarkBeige.png'
import DarkBeige from '../../assets/DarkBeige.png'
import Emperador from '../../assets/Emperador.png'
import KırmızıTravertine from '../../assets/KırmızıTravertine.png'
import Leylak from '../../assets/Leylak.png'
import Limestone from '../../assets/Limestone.png'
import NocheTravertine from '../../assets/NocheTravertine.png'
import PetrolYesili from '../../assets/PetrolYesili.png'
import Polisandro from '../../assets/Polisandro.png'
import PolisandroCrossCut from '../../assets/PolisandroCrossCut.png'
import RossoLevante from '../../assets/RossoLevante.png'
import SarıTravertine from '../../assets/SarıTravertine.png'
import TeosGreen from '../../assets/TeosGreen.png'
import TundraGrey from '../../assets/TundraGrey.png'
import SilverGriTravertine from '../../assets/SilverGriTravertine.png'
import Sofita from '../../assets/Sofita.png'

const ProductDetail = ({ travelers }) => {
  const { id } = useParams();
  const product = travelers.find((item) => item.id === parseInt(id));
  const [loading, setLoading] = useState(true);
 
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedGemstone, setSelectedGemstone] = useState(null);
  

  
  const { translate, setLanguage } = useTranslation();
  
  const [activeGemstoneIndex, setActiveGemstoneIndex] = useState(0);

  const gemstoneImages = [
    NocheTravertine, KırmızıTravertine,SilverGriTravertine,SarıTravertine, AfyonViolet, AleksandırBlack, AncientRed, CreamDarkBeige, DarkBeige, Emperador, Leylak, Limestone, PetrolYesili,
    Polisandro, PolisandroCrossCut,RossoLevante, TeosGreen, TundraGrey,Sofita

  ];
  const handleGemstoneClick = (index) => {
    setSelectedGemstone(index);
    setModalOpen(true);
  };
  

  useEffect(() => {
    // 2 saniye sonra loading durumunu kapat
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  const whatsappNumber = '+905075723127';

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const getImageNameWithoutExtension = (imageUrl) => {
    const imageName = imageUrl.split('/').pop(); // Get the last part of the URL (the image name)
    return imageName.substring(0, imageName.length - 4); // Remove the last 4 characters
  };
  return (
    <>
      <Navbar2 />
      <div className="product-detail-container">
      {modalOpen && selectedGemstone !== null && (
        <div className="gemstone-modal-overlay">
          <div className="gemstone-modal-content">
          <h3 className="gemstone-modal-title">{getImageNameWithoutExtension(gemstoneImages[selectedGemstone])}</h3>
            <img src={gemstoneImages[selectedGemstone]} alt="Gemstone" />
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}

        <div className="product-image-container">
          {/* <img src={product.destinationImage} alt={product.travelerName} /> */}
          <ProductSlider images={product?.images} />
        </div>
        <div className="product-info-container">
          <h2 style={{marginTop:'10%'}}>{product.travelerName}</h2>
          <div className="product-details">
           <p style={{fontSize:20}}>{translate('stoneS')}:</p> 
          <div className="gemstone-options">
      {gemstoneImages.map((gemstone, index) => (
        <div
          key={index}
          className={`gemstone-option ${activeGemstoneIndex === index ? 'active' : ''}`}
          onClick={() => handleGemstoneClick(index)}
        >
          <img src={gemstone} alt="Gemstone" />
        </div>
      ))}
    </div>

  
          </div>
          <button className="ask-price-button" onClick={handleWhatsappClick}>
            <FaWhatsapp style={{ width: 30, height: 30 }} className="whatsapp-icon" />
            {translate('ask')}
          </button>
        </div>
      </div>
      <RelatedProducts travelers={travelers} /> {/* RelatedProducts bileşenini ekliyoruz */}
      <Footer />
    </>
  );
};

export default ProductDetail;
