import OrderAmount from './order/OrderAmount';
import OrderTypeSelector from './order/OrderTypeSelector';
import TableSelector from './order/TableSelector';
import ControlButtons from './order/ControlButtons';

import './order-summary.css';

const OrderSummary = () => {
  return (
    <div className="basket-order_summary">
      <OrderAmount />
      <OrderTypeSelector />
      <TableSelector />
      <ControlButtons />
    </div>
  );
};

export default OrderSummary;
