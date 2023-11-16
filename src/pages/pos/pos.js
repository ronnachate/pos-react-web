import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import './pos.css';
import { Container } from 'react-bootstrap';

import Items from '../../components/pos/Items';
import ItemHeader from '../../components/pos/ItemHeader';
import OrderSummry from '../../components/pos/OrderSummary';

const POS = () => {
  const [items, setItems] = useState(MOCK_ITEMS);
  return (
    <>
      <div className="pos_container">
        <div className="order_section">
          <div className="basket_item_container">
            <ItemHeader />
            <Items items={items} />
            <OrderSummry />
          </div>
        </div>
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
