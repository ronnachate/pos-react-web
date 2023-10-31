import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './user.css';

const ProductRow = ({ list }) => {
  const [products, setProduct] = useState(list);
  if (!products) {
    return <></>;
  }
  return (
    <>
      {products.map((product, i) => (
        <tr key={i} className="align-middle">
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
};

const Table = ({ list }) => {
  const [products, setProducts] = useState(list);

  return (
    <>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow list={products} />
        </tbody>
      </table>
    </>
  );
};

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: PRODUCTS };
  }
  componentDidMount() {

  }

  render() {
    return (
      <>
        <Helmet>
          <title>Product list</title>
        </Helmet>
        <div className="container-fluid">
          <div className="d-flex justify-content-end flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Create
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <Table list={this.state.products} />
          </div>
        </div>
      </>
    );
  }
}

export default User;

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
