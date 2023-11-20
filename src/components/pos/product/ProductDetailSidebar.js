import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './product-detail-sidebar.css';
const ProductDetailSidebar = ({ product }) => {
  return (
    <Col lg={4} className="product-detail-sidebar">
      <Card className="product-sidebar-detail w-100 h-100">
        <Card.Body className="p-0 w-100 h-100">
          <Card.Img
            variant="top"
            src="https://nerf.prionize.com/static/product/01040060-f812-4c78-badb-e524b590e734.png"
          />
          <Card.Text className="product-name ms-3">{product.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductDetailSidebar;
