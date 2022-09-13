import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Admin from './components/Admin/Admin';
import Brand from './components/Brand/Brand';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Jewellery from './components/Jewellery/Jewellery';
import Nav from './components/Nav/Nav';
import New from './components/New/New';
import Search from './components/Search/Search';

library.add(fas);

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <div className="promo">
            <Link to="/" className="newsletter">
              <span>NEWSLETTER SUBSCRIBERS GET 10% OFF</span>
            </Link>
            <span>HANDMADE IN RDC</span>
            <span>FREE DELIVERY ON ORDERS OVER $30</span>
          </div>

          <div className="header-top-bar">
            <div className="header-content">
              <Link to="/">
                <div className="header-left-section">
                  <div className="locator">
                    <FontAwesomeIcon
                      className="fas fa-solid fa-location-dot"
                      icon="location-dot"
                    />
                  </div>
                  <div className="store">Store locator</div>
                </div>
              </Link>
              <Link to="/">
                <div className="header-middle-section.logo-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="232"
                    height="39"
                    viewBox="0 0 232 39">
                    <g>
                      <path
                        d="M190.48,0c-6.2,0-11.23,8.73-11.23,19.49S184.23,39,190.48,39s11.22-8.73,11.22-19.51S196.68,0,190.48,0m.1,37.06c-4.16,0-7.53-7.91-7.53-17.67s3.37-17.67,7.53-17.67,7.52,7.92,7.52,17.67-3.36,17.67-7.52,17.67"
                        fill="#181716"></path>
                      <path
                        d="M70.59,1V2.13a4.71,4.71,0,0,0-2.3.53,4.6,4.6,0,0,0-1.19,3l.24,21s0,7.66,4.91,9.26a5.56,5.56,0,0,0,6.29-2.53c1.65-2.78,2.11-4.82,2.11-9.2V5.65c0-3.11-2.75-3.52-4.32-3.52V1H86V2.13a3.57,3.57,0,0,0-3.3,3.74s-.34,15.74-.34,18.26c0,8.25-3.31,14.66-8.88,14.66-5.27,0-7.61-2.62-8.48-5-1.5-4.06-1.25-7.29-1.25-11.16L63.6,5.07a3,3,0,0,0-1.78-2.8A9.45,9.45,0,0,0,60,2.13V1Z"
                        fill="#181716"></path>
                      <path
                        d="M19.28,1,20,9.36l-1.07.18c-.66-3-1.71-7-5.33-7.64A6.39,6.39,0,0,0,7.5,4.67c-4.79,7.7-4.37,19.82-1,28,1,2,3,4.4,5.39,4.52,4.49.37,6.16-4.81,7.51-8l1,.24a82.89,82.89,0,0,1-1.9,8.43c-3.78,1.45-9.16,1.75-12.42-1-6.81-6.2-7-16.69-5-25.36,1.13-4.23,4-9,8.41-10.61,3-1.33,6.8-.67,9.76.17"
                        fill="#181716"></path>
                      <path
                        d="M111.33,36.25a74.93,74.93,0,0,1-8.19-16.17,9.73,9.73,0,0,0,3.6-3.55,13.25,13.25,0,0,0,.18-12.23A7.19,7.19,0,0,0,100.68.94H89.29V2.13s3.49,0,3.49,3v29a2.7,2.7,0,0,1-1.07,2.52,3.63,3.63,0,0,1-1.91.41v1.21h10V37.07a5.2,5.2,0,0,1-2-.36,2.64,2.64,0,0,1-1.49-2.59V21.47c1.49,0,3.26-.24,4,1.27,1.77,4.33,3.2,8.73,5.62,12.77,1.54,2.59,4.66,3.12,7.3,3.12V37.54a4.57,4.57,0,0,1-1.92-1.29m-15-16.47V3.37s0-.92,1.82-.92a5.89,5.89,0,0,1,5.3,3.05c1.77,3.46,1.65,8.91-.54,12.17-1.48,2.34-4.19,2.25-6.57,2.1"
                        fill="#181716"></path>
                      <path
                        d="M151.49,1V2.13s-3.57.15-3.62,2.69l-.13,28.65a2.55,2.55,0,0,0,1.61,2.63c2,.63,5.47.62,7-.82,1.56-1.83,2.08-3.8,2.72-6,.44.09,1,.25,1,.25l-1.23,8.74H140.62V36.92a3.44,3.44,0,0,0,3.28-1.42,6.28,6.28,0,0,0,.31-2.11c0-.8-.1-28.9-.1-28.9,0-2.37-3.49-2.37-3.49-2.37V1Z"
                        fill="#181716"></path>
                      <path
                        d="M174.17,1V2.13s-3.62,0-3.62,2.78l.06,26.86s0,3.83,1,4.46a4.5,4.5,0,0,0,2.55.69v1.33H163.57V36.92s2.3,0,2.85-.81c.75-1.07.78-2.59.78-4.37l-.06-26.81c0-2.77-2.43-2.8-3.56-2.8V1Z"
                        fill="#181716"></path>
                      <path
                        d="M226.65,29.49c0-8.38-.52-24.62-.52-24.62-.19-2.11-3.89-2.74-3.89-2.74V1H232V2.13s-3.39.32-3.39,2.71l-.29,33.63h-1.49l-15-29.66.31,24.66c0,3.44,4.16,3.42,4.16,3.42v1.35h-9.8V37A3.47,3.47,0,0,0,210,33.46a1.93,1.93,0,0,0,0-.24s.3-17.81.3-27a4.5,4.5,0,0,0-4.2-4.06V1H212Z"
                        fill="#181716"></path>
                      <path
                        d="M124,14.67c-1.62-3.14-5.89-2.6-9.18-2.6v.73c.58,0,1.19.26,1.19.78l.12,11.56c0,1.1-1,1.1-1.42,1.1V27h2.92c2.53,0,5-.33,6.19-2.89a11.32,11.32,0,0,0,.18-9.39m-1.43,4.47c0,6.72-3,7.29-3.81,6.56a1.19,1.19,0,0,1-.4-.81V13.47a.51.51,0,0,1,.36-.34c1.18-.32,3.86.08,3.86,6"
                        fill="#181716"></path>
                      <path
                        d="M135.73,15.41l-.7.1s-.17-2-1.58-2.37c-1-.22-2-.26-2.2.33v5.07a8.29,8.29,0,0,0,2.43-.19c.47-.35.48-1.5.48-1.5h.75l0,4.7h-.7s.07-1.11-.36-1.46a3.94,3.94,0,0,0-2.54-.42v5.45a.75.75,0,0,0,.74.75c1.25,0,2.59.16,3.07-1,.19-.52.58-1.45.71-1.86l.65.16-.52,3.76h-8.33V26.2c.55,0,1.47,0,1.47-1,0-3.92.18-8.12-.17-12-.06-.52-1.06-.54-1.06-.54v-.59h7.73Z"
                        fill="#181716"></path>
                      <path
                        d="M55.2,29.31l-1.1-.16A13.64,13.64,0,0,1,52.27,34c-1.37,2.64-5,2.76-5,2.76H39.9c3.5-3.26,5.89-9.68,6-17h1.42c3.2,0,3.59,2.52,3.59,2.52l.38,1.86h1.06V13.56H51.16L51,15.15c-.49,2.69-3.71,2.45-3.71,2.45H45.78c-.37-6.52-2.6-12.09-5.73-15.13h5.56l2.78.09s3.45.19,4.08,3.09l.75,3.28,1.17-.12L54,.87,37.9.85A7,7,0,0,0,34.61,0c-6.2,0-11.22,8.72-11.22,19.49S28.37,39,34.61,39a6.9,6.9,0,0,0,2.88-.67H53.8Zm-27.82-14c-.13,1.31-.21,2.69-.21,4.11,0-9.73,3.38-17.62,7.55-17.67s7.52,7.93,7.52,17.67S38.9,37.06,34.72,37.08s-7.55-7.94-7.55-17.67a36,36,0,0,0,1.3,9.91,36,36,0,0,1-1.3-9.91C27.17,18,27.25,16.61,27.38,15.3Z"
                        fill="#181716"></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <Link to="/admin">
                <div className="header-right-section">
                  <FontAwesomeIcon
                    className="fas fa-solid fa-file-user"
                    icon="user"
                  />
                </div>
              </Link>
              <Link to="/cart">
                <div className="">
                  <FontAwesomeIcon
                    className="fas fa-cart-plus"
                    icon="cart-plus"
                  />
                </div>
              </Link>
            </div>
          </div>

          <Nav />
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<HomeDetails />} />
            <Route path="/new" element={<New />} />
            <Route path="/jewellery" element={<Jewellery />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
