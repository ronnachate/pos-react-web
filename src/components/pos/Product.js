import React, { useState } from 'react';
import SearchBox from './product/SearchBox';
import Categories from './product/Categories';
import ProductList from './product/ProductList';
import ProductDetail from './product/ProductDetail';

import './product.css';
const Products = ({ categories }) => {
  const [products, setProducts] = useState(MOCK_PRODUCT);
  const [product, setProduct] = useState(MOCK_PRODUCT[0]);
  return (
    <div className="pos_product_section">
      <Categories categories={categories} />
      <SearchBox />
      {product ?  <ProductDetail product={product} /> : <ProductList products={products} /> }
    </div>
  );
};

export default Products;

const MOCK_PRODUCT = [
  {
    name: 'อเมริกาโน่เย็น',
    price: 50,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
  {
    name: 'เอสเปรสโซ่ร้อน',
    price: 45,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
  {
    name: 'ลาเต้ร้อน',
    price: 55,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
  {
    name: 'คาปูชิโน่ร้อน',
    price: 55,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
  {
    name: 'มอคค่าร้อน',
    price: 60,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
  {
    name: 'Best Buddy stout',
    price: 170,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
  {
    name: 'Best Buddy Rosse',
    price: 170,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
  {
    name: 'Wizard WeizenXIPA',
    price: 195,
    rates: [
      {
          id : 1,
          name : 'Normal Price',
          price : 55.00,
      },
      {   id: 2,
          name : 'Member Price',
          price : 50.00,
      },
      {   id: 3,
          name : 'Internal Price',
          price : 45.00,
      }
    ]
  },
];
