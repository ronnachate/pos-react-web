import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ProductOrderAddons = ({ addons }) => {
  return (
    <>
      <Card.Text className=" mt-5">Addon</Card.Text>
      {addons.map((addon) => (
        <Form.Check // prettier-ignore
          type="checkbox"
          label={`${addon.name} (+${addon.price} ฿)`}
        />
      ))}
    </>
  );
};

export default ProductOrderAddons;
