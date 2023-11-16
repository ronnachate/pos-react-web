import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import NewTableForm from './NewTableForm';

const TableSelector = (props) => {
    const [isNewTable, setIsNewTable] = useState(false);
  return (
    <>
      <div className="table-selector">
        <div className="row basket-order-prop">
          <div className="col-6 text-center">
            <lable>โต้ะ</lable>
          </div>
          <div className="col-6">
            <Form.Select>
              <option value="">เลือกโต้ะ</option>
              <option value="3142">TAT</option>
            </Form.Select>
          </div>
        </div>
      </div>
      {isNewTable ? <NewTableForm /> : null}
    </>
  );
};

export default TableSelector;
