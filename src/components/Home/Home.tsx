import './Home.css';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { data } from '../../Data';
import { IProduct } from '../../types';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>(data);

  return (
    <div className="home">
      REPUBLIC DEMOCRATIC OF CONGO (RDC), HEART OF AFRICA
      {products.map((product) => {
        if (product.slug === 'art-1') {
          return (
            <React.Fragment>
              <div className="africa-image">
                <img src="/images/bijoux_5.jpg" alt="" className="bijoux_5" />
                <img src="/images/bijoux_8.jpg" alt="" className="bijoux_8" />
              </div>

              <div className="new-in">
                NECKLACES, BRACELETS OR EARRINGS - OUR JEWELLERY
                <div className="new-products">
                  <Link to="/">
                    <img
                      src="/images/bijoux_15.jpg"
                      alt=""
                      className="bijoux"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src="/images/bijoux_12.jpg"
                      alt=""
                      className="bijoux"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src="/images/bijoux_11.jpg"
                      alt=""
                      className="bijoux"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src="/images/bijoux_13.jpg"
                      alt=""
                      className="bijoux"
                    />
                  </Link>
                </div>
              </div>

              <div className="new-in">
                ARTS
                <div className="new-products">
                  <Link to="/">
                    <img src="/images/bijoux_7.jpg" alt="" className="bijoux" />
                  </Link>
                  <Link to="/">
                    <img
                      src="/images/bijoux_10.jpg"
                      alt=""
                      className="bijoux"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src="/images/bijoux_14.jpg"
                      alt=""
                      className="bijoux"
                    />
                  </Link>
                </div>
              </div>

              <div className="hand-made-by">
                <div className="hand-made-text">
                  HANDMADE IN REPUBLIC DEMOCRATIC OF CONGO (RDC)
                  <br /> Whether necklaces, bracelets or earrings – our
                  jewellery is carefully handcrafted with loving attention to
                  detail in our workshop in Stuttgart, RDC.{' '}
                  <Link to={`/${product.slug}`} className="find-more">
                    Find out more {'>'}
                  </Link>
                </div>
                <div className="hand-made-image">
                  <img src="/images/bijoux_1.jpg" alt="" className="bijoux-1" />
                </div>
              </div>

              <div className="new-in">
                @COEUR_DE_L'AFRIQUE_RDC
                <div className="new-products">
                  <Link to="/">
                    <img src="/images/bijoux_4.jpg" alt="" className="bijoux" />
                  </Link>
                  <Link to="/">
                    <img src="/images/bijoux_6.jpg" alt="" className="bijoux" />
                  </Link>
                  <Link to="/">
                    <img src="/images/bijoux_7.jpg" alt="" className="bijoux" />
                  </Link>
                  <Link to="/">
                    <img src="/images/bijoux_9.jpg" alt="" className="bijoux" />
                  </Link>
                </div>
              </div>

              <p className="welcome">
                DISCOVER NOW: TIMELESSLY BEAUTIFUL NECKLACES, BRACELETS,
                EARRINGS, RINGS AND ARTS
                <br />
                <strong>
                  Welcome to the official COEUR DE L'Afrique online shop
                </strong>
              </p>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default Home;
