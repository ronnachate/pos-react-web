import React, { useState } from 'react';
import SearchBox from './product/SearchBox';
import Categories from './product/Categories';
import ProductList from './product/ProductList';

import './product.css';
const Products = ({ categories }) => {
  const [products, setProducts] = useState(MOCK_PRODUCT);
  return (
    <div className="pos_product_section">
      <Categories categories={categories} />
      <SearchBox />
      <ProductList products={products} />
    </div>
  );
};

export default Products;

const MOCK_PRODUCT = [
  {
    name: 'อเมริกาโน่เย็น',
    price: 50,
  },
  {
    name: 'เอสเปรสโซ่ร้อน',
    price: 45,
  },
  {
    name: 'ลาเต้ร้อน',
    price: 55,
  },
  {
    name: 'คาปูชิโน่ร้อน',
    price: 55,
  },
  {
    name: 'มอคค่าร้อน',
    price: 60,
  },
  {
    name: 'Best Buddy stout',
    price: 170,
  },
  {
    name: 'Best Buddy Rosse',
    price: 170,
  },
  {
    name: 'Wizard WeizenXIPA',
    price: 195,
  },
];
