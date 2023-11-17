import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';

import './searchbox.css';
const SearchBox = () => {
  return (
    <InputGroup className="ms-4 mt-3 mb-3 pos-search-input-group">
      <Form.Control
        aria-label="seach product"
        placeholder="search for product"
      />
      <InputGroup.Text>ค้นหา</InputGroup.Text>
    </InputGroup>
  );
};

export default SearchBox;
