import './item-header.css';

const ItemHeader = () => {
  return (
    <div className="basket-item-header">
      <div className="row align-items-center">
        <div className="col-4">
          <h2>#</h2>
        </div>
        <div className="col-2 text-center">
          <h2>ราคา</h2>
        </div>
        <div className="col-3 text-center">
          <h2>จำนวน</h2>
        </div>
        <div className="col-3 text-right">
          <h2>รวม</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemHeader;
