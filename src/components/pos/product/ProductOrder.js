import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductOrderOptions from './ProductOrderOptions';
import ProductOrderAddons from './ProductOrderAddons';

import './product-order.css';

const ProductOrder = ({ product }) => {
  return (
    <Col lg={8} className="product-order">
      <Form>
        <Card className="product-order-detail ms-1 w-100 h-100 text-white text-white">
          <Card.Body className="">
            <ProductOrderOptions options={product.options} />
            <ProductOrderAddons addons={product.addons} />
          </Card.Body>
          <Card.Footer className="text-rigth">
            <div className="d-flex justify-content-between">
              <Form.Label className="col-sm-4 col-form-label">
                Total <span className="ms-1 total-text">60 ฿</span>
              </Form.Label>
              <Button variant="success" size="xs">
                เพิ่ม
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Form>
    </Col>
  );
};

export default ProductOrder;
