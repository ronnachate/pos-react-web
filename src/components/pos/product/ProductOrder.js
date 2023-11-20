import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './product-order.css';

const ProductOrder = () => {
  return (
    <Col lg={8} className="product-order">
      <Card className="product-order-detail ms-1 w-100 h-100">
        <Card.Body className="">
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductOrder;