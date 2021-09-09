import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import DBService from "../Utils/DBService";

export default function AddStudent({ modal, toggle, fetchData }) {
  const [values, setValues] = useState({
    name: "",
    subject1: "",
    subject2: "",
    subject3: "",
    ps: "",
    avg: "",
    result: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //handle submit
    console.log(values);
    values.total = parseInt(values.subject1) + parseInt(values.subject2) + parseInt(values.subject3);
    values.avg = ( values.total )/3
    values.result = values.avg >= 35 ? "Pass" : "Fail"
    let db = new DBService()
    db.create(values).then(()=>{
      fetchData()
    })
    toggle()    
    setValues({
      name: "",
      subject1: "",
      subject2: "",
      subject3: "",
      ps: "",
    })
    
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} external={false}>
        <ModalHeader toggle={toggle}>Add Associate</ModalHeader>
        <ModalBody>
          <div className="w-100">
            <form className="container">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="ps"
                  placeholder="Associate's ps"
                  name="ps"
                  value={values.ps}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="ps">PS number</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Associate's ps"
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
                      type="password"
                      className="form-control"
                      id="subject1"
                      placeholder="Associate's ps"
                      name="subject1"
                      value={values.subject1}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingPs">React</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="subject2"
                      placeholder="Associate's ps"
                      name="subject2"
                      value={values.subject2}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingPs">MongoDB</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject3"
                      placeholder="Associate's ps"
                      name="subject3"
                      value={values.subject3}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingPs">JavaScript</label>
                  </div>
                </div>
              </div>
              <div className="container text-center">
                <Button
                  color="primary"
                  className="mt-4"
                  block
                  onClick={() => handleSubmit()}
                >
                  Add Associate
                </Button>
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
