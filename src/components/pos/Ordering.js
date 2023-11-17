import OrderAmount from './ordering/OrderAmount';
import OrderTypeSelector from './ordering/OrderTypeSelector';
import TableSelector from './ordering/TableSelector';
import ControlButtons from './ordering/ControlButtons';

import './order-summary.css';

const Ordering = () => {
  return (
    <div className="basket-order_summary">
      <OrderAmount />
      <OrderTypeSelector />
      <TableSelector />
      <ControlButtons />
    </div>
  );
};

export default Ordering;
