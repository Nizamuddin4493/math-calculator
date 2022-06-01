import React from 'react';
import { Link } from 'react-router-dom';
import deleteCross from './images/delete-cross.png';
import home from './images/home.png';
import left from './images/left.png';
import right from './images/right.png';
import searchingBar3 from './images/searching-bar3.png';

function Header() {
  return (
    <>
      <nav>
        <div className="website-top">
          <div className="website-title">
            <h2 className="a-web-page">A Web Page</h2>
          </div>
          <div className="web-content">
            <img src={left} alt="left arrow" className="arrows" />
            <img src={right} alt="right arrow" className="arrows" />
            <img src={deleteCross} alt="delete" className="cross" />
            <img src={home} alt="home" className="home" />
            <div className="address-bar">
              <p className="address">https://</p>
            </div>
            <img src={searchingBar3} alt="search" className="search" />
          </div>
        </div>
        <div className="navigation">
          <div className="nav-title">
            <h2>Math Magicians</h2>
          </div>
          <div className="nav-links">
            <div className="link-container link-border">
              <h4 className="nav-link-item list-action">
                <Link to="/">Home</Link>
              </h4>
            </div>
            <div className="link-container link-border">
              <h4 className="nav-link-item right add-action">
                <Link to="/calDesign">Calculator</Link>
              </h4>
            </div>
            <div className="link-container">
              <h4 className="nav-link-item contact-action">
                <Link to="/quote">Quote</Link>
              </h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
