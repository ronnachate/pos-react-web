import { Button } from 'react-bootstrap';
import './control-button.css';
const ControlButtons = (props) => {
  return (
    <div className="basket-control-btn">
      <div className="row">
        <Button variant="danger" className="col-6">ยกเลิก</Button>
        <Button variant="success" className="col-6">ยืนยันรายการ</Button>
      </div>
    </div>
  );
};

export default ControlButtons;