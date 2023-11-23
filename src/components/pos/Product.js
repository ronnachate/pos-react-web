import React, { useState } from 'react';
import SearchBox from './product/SearchBox';
import Categories from './product/Categories';
import ProductList from './product/ProductList';
import ProductDetail from './product/ProductDetail';

import './product.css';
const Products = ({ categories }) => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [product, setProduct] = useState(MOCK_PRODUCT);
  return (
    <div className="pos_product_section">
      <Categories categories={categories} />
      <SearchBox />
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Products;

const MOCK_PRODUCT = {
  name: 'อเมริกาโน่เย็น',
  price: 50,
  rates: [
    {
      id: 1,
      name: 'Normal Price',
      price: 55.0,
    },
    { id: 2, name: 'Member Price', price: 50.0 },
    { id: 3, name: 'Internal Price', price: 45.0 },
  ],
  options: [
    {
      id: 1,
      name: 'ระดับคั่ว',
      selections: [
        {
          id: 1,
          name: 'คั่วอ่อน',
          price: 0,
        },
        {
          id: 2,
          name: 'คั่วกลาง',
          price: 0,
        },
        {
          id: 3,
          name: 'คั่วเข้ม',
          price: 0,
        },
      ],
    },
    {
      id: 2,
      name: 'ระดับความหวาน',
      selections: [
        {
          id: 1,
          name: 'ไม่หวาน',
          price: 0,
        },
        {
          id: 2,
          name: 'หวานน้อย',
          price: 0,
        },
        {
          id: 3,
          name: 'หวานมาก',
          price: 5,
        },
      ],
    },
  ],
  addons: [
    {
      id: 1,
      name: 'เพิ่มช็อต',
      price: 10,
    },
    {
      id: 2,
      name: 'น้ำผึ้ง',
      price: 5,
    },
    {
      id: 3,
      name: 'ไซรัป',
      price: 5,
    },
    {
      id: 4,
      name: 'เมล็ดพิเศษ',
      price: 20,
    },
    {
      id: 5,
      name: 'เมล็ดพิเศษ',
      price: 30,
    },
  ],
};

const MOCK_PRODUCTS = [
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
