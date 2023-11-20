import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';

import './product-list.css';

const ProductList = ({ products }) => {
  return (
    <>
      <div className="pos-product-list">
        <Row>
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
