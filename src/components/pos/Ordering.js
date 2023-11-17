import OrderAmount from './ordering/OrderAmount';
import OrderTypeSelector from './ordering/OrderTypeSelector';
import TableSelector from './ordering/TableSelector';
import ControlButtons from './ordering/ControlButtons';
import ItemHeader from './ordering/ItemHeader';
import Items from './ordering/Items';

import './ordering.css';

const Ordering = ({ items }) => {
  return (
    <div className="order_section">
      <div className="basket_item_container">
        <ItemHeader />
        <Items items={items} />
        <div className="basket-order_summary">
          <OrderAmount />
          <OrderTypeSelector />
          <TableSelector />
          <ControlButtons />
        </div>
      </div>
    </div>
  );
};

export default Ordering;
