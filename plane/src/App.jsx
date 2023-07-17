import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnaSayfa from '../AnaSayfa';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import sehpa1 from '../src/assets/sehpa1.jpeg'
import sehpa2 from '../src/assets/sehpa2.jpeg'
import sehpa3 from '../src/assets/sehpa3.jpeg'
import sehpa4 from '../src/assets/sehpa4.jpeg'
import sehpa5 from '../src/assets/sehpa5.jpeg'
import sehpa7 from '../src/assets/sehpa7.jpeg'
import sehpa8 from '../src/assets/sehpa8.jpeg'
import sehpa9 from '../src/assets/sehpa9.jpeg'
import sehpa10 from '../src/assets/sehpa10.jpeg'
import sehpa12 from '../src/assets/sehpa12.jpeg'
import sehpa13 from '../src/assets/sehpa13.jpeg'
import sehpa14 from '../src/assets/sehpa14.jpeg'
import sehpa15 from '../src/assets/sehpa15.jpeg'
import sehpa16 from '../src/assets/sehpa16.jpeg'
import sehpa17 from '../src/assets/sehpa17.jpeg'
import sehpa18 from '../src/assets/sehpa18.jpeg'

import AtlasBeyaz from '../src/assets/AtlasBeyaz.png'
import { TranslationProvider } from './Languages/Translation';

const App = () => {


  const travelers = [
    {
     id: 1,
     destinationImage: sehpa1,
     images: [sehpa1, sehpa1, sehpa1, ] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 1',
     socialLink: 'Details →'
    },
    {
     id: 2,
     destinationImage: sehpa2,
     images: [sehpa2, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 2',
     socialLink: 'Details → '
    },
    {
     id: 3,
     destinationImage: sehpa3,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: ' ÜRÜN 3',
     socialLink: 'Details →'
    },
    {
     id: 4,
     destinationImage: sehpa4,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 5,
     destinationImage: sehpa5,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 6,
     destinationImage: sehpa7,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 7,
     destinationImage: sehpa8,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 8,
     destinationImage: sehpa9,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 9,
     destinationImage: sehpa10,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 10,
     destinationImage: sehpa12,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 11,
     destinationImage: sehpa13,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 12,
     destinationImage: sehpa14,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 13,
     destinationImage: sehpa15,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 14,
     destinationImage: sehpa16,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 15,
     destinationImage: sehpa17,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
    {
     id: 16,
     destinationImage: sehpa18,
     images: [sehpa1, sehpa1, sehpa1] ,
     travelerImage: AtlasBeyaz,
     travelerName: 'ÜRÜN 4',
     socialLink: 'Details →'
    },
  
 ]
 



  return (
    <TranslationProvider>
    <Router>
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route
          path="/products/:id"
          element={<ProductDetail travelers={travelers} />}
        />
      </Routes>
    </Router>
    </TranslationProvider>
  );
};

export default App;
