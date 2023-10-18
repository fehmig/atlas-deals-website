import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnaSayfa from '../AnaSayfa';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import { TranslationProvider } from './Languages/Translation';
import { travelers } from './Components/Products/Products';

const App = () => {

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
