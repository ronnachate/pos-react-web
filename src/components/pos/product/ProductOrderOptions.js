import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ProductOrderOptions = ({ options }) => {
  return (
    <>
      <Card.Text>Option</Card.Text>
      {options.map((option) => (
        <div className="form-group row option-row">
          <Form.Label className="col-sm-4 col-form-label">
            {option.name}
          </Form.Label>
          <div className="col-sm-8">
            <Form.Select aria-label={ `เลือก${option.name}`} size="sm">
              {option.selections.map((selection) => (
                <option value={selection.id}>{selection.name}</option>
              ))}
            </Form.Select>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductOrderOptions;
