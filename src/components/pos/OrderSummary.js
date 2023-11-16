import OrderAmount from './OrderAmount';
import OrderTypeSelector from './OrderTypeSelector';
import TableSelector from './TableSelector';
import ControlButtons from './ControlButtons';

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
