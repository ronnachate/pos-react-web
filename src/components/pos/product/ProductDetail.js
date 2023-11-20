import Row from 'react-bootstrap/Row';
import ProductDetailSidebar from './ProductDetailSidebar';
import ProductOrder from './ProductOrder';

import './product-detail.css';

const ProductDetail = ({ product }) => {
  return (
    <Row className="product-detail w-100">
      <ProductDetailSidebar product={product}/>
      <ProductOrder product={product} />
    </Row>
  );
};

export default ProductDetail;
