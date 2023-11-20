import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import './product-order.css';

const ProductOrder = () => {
  return (
    <Col lg={8} className="product-order">
      <Form>
        <Card className="product-order-detail ms-1 w-100 h-100 text-white text-white">
          <Card.Body className="">
            <Card.Text className="ms-3">Option</Card.Text>
              <div className="form-group row option-row">
                <Form.Label className="col-sm-4 col-form-label">
                  คั่ว
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Select aria-label="เลือกความหวาน" size="sm">
                    <option value="1">เข้ม</option>
                    <option value="2">กลาง</option>
                    <option value="3">อ่อน</option>
                  </Form.Select>
                </div>
              </div>
              <div className="form-group row option-row mt-3">
                <Form.Label  className="col-sm-4 col-form-label">
                  ระดับความหวาน
                </Form.Label>
                <div className="col-sm-8">
                  <Form.Select aria-label="เลือกความหวาน" size="sm">
                    <option value="1">ไม่หวาน</option>
                    <option value="2">หวานน้อย</option>
                    <option value="3">หวานมาก</option>
                  </Form.Select>
                </div>
              </div>
            <Card.Text className="ms-3 mt-5">Addon</Card.Text>
            <Form.Check // prettier-ignore
              type="checkbox"
              label="เพิ่มช๊อต"
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="น้ำผึ้ง"
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="ไซรัป"
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="เมล็ดพิเศษ"
            />
            <Form.Check // prettier-ignore
              type="checkbox"
              label="เมล็ดพิเศษ"
            />
          </Card.Body>
        </Card>
      </Form>
    </Col>
  );
};

export default ProductOrder;
