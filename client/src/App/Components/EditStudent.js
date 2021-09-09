import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

export default function EditStudent({ modal, toggle,user }) {
    console.log('====================================');
    console.log(user);
    console.log('====================================');
  const [values, setValues] = useState({
    name:user.name,
    sub1: user.subject1,
    sub2: user.subject2,
    sub3: user.subject3,
    psno: user.ps,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleDelete=()=>{
    //handleDelete
  }

  const handleSubmit = () => {
    //handle submit

    console.log(values);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} external={false}>
      <ModalHeader toggle={toggle}>Edit Associate</ModalHeader>
      <ModalBody>
        <div className="w-100">
          <form className="container">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="psno"
                placeholder="Associate's psno"
                name="psno"
                value={values.psno}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="psno">PS number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Associate's psno"
                name="name"
                value={values.name}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="name">Associates Name</label>
            </div>
            <div className="row">
              <p>Enter Marks</p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="sub1"
                    placeholder="Associate's psno"
                    name="sub1"
                    value={values.sub1}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingPsno">React</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="sub2"
                    placeholder="Associate's psno"
                    name="sub2"
                    value={values.sub2}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingPsno">MongoDB</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="sub3"
                    placeholder="Associate's psno"
                    name="sub3"
                    value={values.sub3}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingPsno">JavaScript</label>
                </div>
              </div>
            </div>
            <div className="container d-flex justify-content-evenly">
              <Button
                color="primary"
                className="mt-4"
                block
                onClick={() => handleSubmit()}
              >
                Update
              </Button>
              <Button
                color="danger"
                className="mt-4"
                block
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            </div>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
}
