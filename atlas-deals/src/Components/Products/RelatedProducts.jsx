import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { shuffle } from 'lodash'; // lodash kütüphanesinden shuffle fonksiyonunu kullanacağız
import { TranslationProvider, useTranslation } from '../../Languages/Translation';

const RelatedProducts = ({ travelers }) => {
  // Rastgele ürünleri almak için shuffle fonksiyonunu kullanıyoruz
  const randomProducts = shuffle(travelers).slice(0, 4); // 4 adet rastgele ürün alıyoruz


  const { translate, setLanguage } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguage(language);
  };

  return (
    <div className="related-products-container">
      <h3 style={{textAlign:'center'}}>{translate('related')}</h3>
      <div className="related-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: '20px' }}>
        {randomProducts.map((product) => (
          <div key={product.id} className="related-product">
            <Link to={`/products/${product.id}`}>
              <img src={product.destinationImage} alt={product.travelerName} />
            </Link>
            <div className="related-product-details">
             
              {/* <Link to={`/products/${product.id}`}> <h4>{product.travelerName}</h4></Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
