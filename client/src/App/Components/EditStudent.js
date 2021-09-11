import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import DBService from "../Utils/DBService";

<<<<<<< HEAD
export default function EditStudent({ modal, toggle,user }) {

  console.log(user,"From modal")

  const [values, setValues] = useState({
    name: "",
    sub1: "",
    sub2: "",
    sub3: "",
    psno: "",
  });


  if(user){
        setValues({
          name: user.name,
          sub1: user.subject1,
          sub2: user.subject2,
          sub3: user.subject3,
          psno: user.ps,
        });
  }
=======
export default function EditStudent({ modal, toggle, user, fetchData}) {
  const [values, setValues] = useState({
    name: user.name,
    subject1: user.subject1,
    subject2: user.subject2,
    subject3: user.subject3,
    ps: user.ps,
  });

  useEffect(()=>{
    
    setValues({
      name: user.name,
      subject1: user.subject1,
      subject2: user.subject2,
      subject3: user.subject3,
      ps: user.ps,
    })
  },[user])
>>>>>>> master

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleDelete=()=>{
    //handleDelete
    let db = new DBService()
    db.delete(user._id).then(() => {
      fetchData()
    })
    toggle()
  }

  const handleSubmit = () => {
    //handle submit
    console.log(values);
    values.total = parseInt(values.subject1) + parseInt(values.subject2) + parseInt(values.subject3);
    values.avg = ( values.total )/3
    values.result = values.avg >= 35 ? "Pass" : "Fail"
    let db = new DBService()
    db.update(values, user._id).then(() => {
      fetchData()
    })
    toggle()
  };

  return (
<<<<<<< HEAD
    <Modal isOpen={modal} toggle={toggle} external={false} >
=======
    <Modal isOpen={modal} toggle={toggle} external={true}>
>>>>>>> master
      <ModalHeader toggle={toggle}>Edit Associate</ModalHeader>
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
                    type="text"
                    className="form-control"
                    id="subject1"
                    placeholder="Associate's ps"
                    name="subject1"
                    value={values.subject1}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingps">React</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="subject2"
                    placeholder="Associate's ps"
                    name="subject2"
                    value={values.subject2}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="floatingps">MongoDB</label>
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
                  <label htmlFor="floatingps">JavaScript</label>
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
