import Form from 'react-bootstrap/Form';

const ProducPriceRate = ({ rate }) => {
  return (
    <div className="d-flex p-2 ms-5 mb-1 me-4 justify-content-between">
      <div className="text-white">
        <Form.Label>{rate.name}</Form.Label>
      </div>
      <div className="text-white price-text">{rate.price} ฿</div>
    </div>
  );
};

export default ProducPriceRate;
