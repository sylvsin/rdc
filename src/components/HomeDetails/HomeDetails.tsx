import './HomeDetails.css';

import React, { useState } from 'react';

import {
  Link,
  useParams,
} from 'react-router-dom';

import { data } from '../../Data';
import { IProduct } from '../../types';

const HomeDetails: React.FC = () => {
  const params = useParams();
  const [products, setProducts] = useState<IProduct[]>(data);

  return (
    <div className="home-details">
      {products.map((product) => {
        if (product.slug === 'art-1') {
          return (
            <React.Fragment>
              <Link to="/">
                <img src="/images/bijoux_2.jpg" alt="" className="find-more" />
              </Link>

              <Link to="/">
                <img src="/images/bijoux_3.jpg" alt="" className="find-more" />
              </Link>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default HomeDetails;
