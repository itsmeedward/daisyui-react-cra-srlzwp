import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';
import { Route, Routes } from 'react-router-dom';
import Faq from './pages/faq';
import Services from './pages/services';

const App = (props) => {
  return (
    <div>
      <Header />

      <Main/>

      <Footer />
    </div>
  );
};
export default App;
