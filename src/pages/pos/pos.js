import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './pos.css';
import { Container } from 'react-bootstrap';

import Items from '../../components/pos/ordering/Items';
import ItemHeader from '../../components/pos/ordering/ItemHeader';
import Ordering from '../../components/pos/Ordering';
import Products from '../../components/pos/Product';

const POS = () => {
  const [items, setItems] = useState(MOCK_ITEMS);
  const [categories, setCategories] = useState(MOCK_CATE_GORIES);
  return (
    <>
      <div className="pos_container">
        <Ordering items={items}/>
        <Products categories={categories}/>
      </div>
    </>
  );
};

export default POS;

const MOCK_ITEMS = [
  {
    name: 'อเมริกาโน่เย็น',
    price: 55,
    quantity: 1,
  },
  {
    name: 'ยากิโซบะ',
    price: 89,
    quantity: 1,
  },
];

const MOCK_CATE_GORIES = [
  {
    name: 'Hot Coffee',
    image_path: 'https://via.placeholder.com/150',
  },
  {
    name: 'Cold Coffee',
    image_path: 'https://via.placeholder.com/150',
  },
  {
    name: 'MainDish',
    image_path: 'https://via.placeholder.com/150',
  },
  {
    name: 'A La Carte',
    image_path: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dessert',
    image_path: 'https://via.placeholder.com/150',
  },
  {
    name: 'Beverage',
    image_path: 'https://via.placeholder.com/150',
  },
];
