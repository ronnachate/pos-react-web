import { FaPlus, FaMinus } from 'react-icons/fa';
import './items.css';

const Items = ({ items }) => {
  return (
    <ul className="basket-items">
      {items.map((item, i) => (
        <li>
          <div className="row">
            <div className="col-4">
              <h4>{item.name}</h4>
            </div>
            <div className="col-2 text-center">
              <h3>{item.price}</h3>
            </div>
            <div className="col-3 text-center">
              <h3 className="d-flex align-items-center">
                <FaMinus className="item-decrease" />
                <strong>{item.quantity}</strong>
                <FaPlus className="item-increase" />
              </h3>
            </div>
            <div className="col-3 text-right">
              <h4>{item.price * item.quantity}</h4>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Items;
