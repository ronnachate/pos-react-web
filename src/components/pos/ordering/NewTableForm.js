import Form from 'react-bootstrap/Form';

const NewTableForm = () => {
  return (
    <div className="table-box">
      <div className="row order-prop">
        <div className="col-6 text-center">
          <lable>โต้ะ</lable>
        </div>
        <div className="col-6">
          <Form.Text className="form-control" id="tableName" />
        </div>
      </div>
      <div className="row order-prop">
        <div className="col-12 text-center">
          <textarea
            className="order-note"
            placeholder="note..."
            id="orderNote"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NewTableForm;
