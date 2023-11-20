import Form from 'react-bootstrap/Form';

const ProducPriceRate = ({ rate }) => {
  return (
    <div class="d-flex flex-wrap p-2 ms-5 mb-1 me-4 justify-content-between">
      <div class="text-white">
        <Form.Label>{rate.name}</Form.Label>
      </div>
      <div class="right-floated text-white">{rate.price} ฿</div>
    </div>
  );
};

export default ProducPriceRate;
