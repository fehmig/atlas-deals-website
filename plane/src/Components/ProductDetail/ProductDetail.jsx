import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../NavBar/Navbar2';
import Footer from '../Footer/Footer';
import '../../main.css';
import ProductSlider from '../Products/ProductSlider';

const ProductDetail = ({ travelers }) => {
  const { id } = useParams();
  const product = travelers.find((item) => item.id === parseInt(id));
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Navbar2 />
      <div className="product-detail-container">
        <div className="product-image-container">
          {/* <img src={product.destinationImage} alt={product.travelerName} /> */}
          <ProductSlider images={product?.images} />

        </div>
        <div className="product-info-container">
          <h2>{product.travelerName}</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
