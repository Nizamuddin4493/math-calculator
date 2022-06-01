import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import CalDesign from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Headers from './components/Header';
import Footer from './components/Footer';

class App extends PureComponent {
  render() {
    return (
      <>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calDesign" element={<CalDesign />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
