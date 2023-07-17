import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !modalOpen,
    autoplaySpeed: 2000, // Otomatik geçiş hızı (ms cinsinden)
    beforeChange: (current, next) => {
      setActiveImageIndex(next);
    },
    swipe: true, 
    draggable: true, 
  };

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const openModal = () => {
    setModalOpen(true);
    sliderRef.current.slickPause(); // Slider'ı durdur
  };


  const closeModal = () => {
    setModalOpen(false);
    setZoomLevel(1);
    sliderRef.current.slickPlay(); // Slider'ı başlat
  };

  const handleImageWheel = (e) => {
    const zoomAmount = e.deltaY > 0 ? -0.1 : 0.1; // Tekerleği aşağı kaydırdıkça küçült
    setZoomLevel((prevZoomLevel) => {
      const newZoomLevel = prevZoomLevel + zoomAmount;
      if (newZoomLevel < 0.1) return 0.1; // En küçük yakınlaştırma seviyesi
      if (newZoomLevel > 3) return 3; // En büyük yakınlaştırma seviyesi
      return newZoomLevel;
    });
  };

  const handleImageMouseDown = (e) => {
    setDragging(true);
    setDragStartX(e.clientX);
  };

  const handleImageMouseMove = (e) => {
    if (dragging) {
      const distanceX = e.clientX - dragStartX;
      const slideWidth = sliderRef.current.clientWidth;
      const slidesCount = images.length;
      const slideOffset = distanceX / slideWidth;
      const slideIndex = activeImageIndex - Math.round(slideOffset * slidesCount);
      sliderRef.current.slickGoTo(slideIndex);
    }
  };

  const handleImageMouseUp = () => {
    setDragging(false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      // ESC tuşuna basıldığında modalı kapat
      closeModal();
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(activeImageIndex);
    }
  }, [activeImageIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown); // Klavye olayını dinle
    return () => {
      document.removeEventListener('keydown', handleKeyDown); // Temizleme işlevi
    };
  }, []);

  return (
    <div className="product-slider-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{
                width: 600,
                height: 300,
                margin: 'auto',
                objectFit: 'cover',
                justifyContent: 'center',
                marginTop: '25%',
                cursor: 'pointer',
              }}
              src={image}
              alt="Slide"
              onClick={openModal}
              onWheel={handleImageWheel}
              onMouseDown={handleImageMouseDown}
              onMouseMove={handleImageMouseMove}
              onMouseUp={handleImageMouseUp}
            />
          </div>
        ))}
      </Slider>
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${activeImageIndex === index ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt="Thumbnail" />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <div
              className="modal-image-container"
              onMouseDown={handleImageMouseDown}
              onMouseMove={handleImageMouseMove}
              onMouseUp={handleImageMouseUp}
            >
              <img
                className="modal-image"
                src={images[activeImageIndex]}
                alt="Modal"
                style={{ transform: `scale(${zoomLevel})` }} // Yakınlaştırma için transform stilini kullan
                onWheel={handleImageWheel}
              />
            </div>
            <div className="modal-thumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`modal-thumbnail ${activeImageIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image} alt="Thumbnail" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
