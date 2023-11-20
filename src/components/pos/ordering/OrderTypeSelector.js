import Form from 'react-bootstrap/Form';

const OrderTypeSelector = () => {
  return (
    <div className="row basket-order-prop">
      <div className="col-6 text-center">
        <Form.Label>ประเภท</Form.Label>
      </div>
      <div className="col-6">
        <Form.Select>
          <option value="1">ทานที่ร้าน</option>
          <option value="2">สั่งกลับบ้าน</option>
          <option value="3">จัดส่งเอง</option>
          <option value="4">Grab</option>
          <option value="5">Food Panda</option>
          <option value="6">LineMan</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default OrderTypeSelector;