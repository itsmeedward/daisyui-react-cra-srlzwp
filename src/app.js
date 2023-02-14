import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './pages/main';
import {
  BrowseRouter as Router,
  BrowserRouter,
  link,
  Route,
} from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path="Main" />
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
