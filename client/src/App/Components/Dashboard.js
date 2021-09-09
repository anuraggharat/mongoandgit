import React,{useEffect, useState} from 'react'
import DBService from '../Utils/DBService';
import AddStudent from './AddStudent'
import AllAsso from './AllAsso';
import Navbar from './Navbar'


export default function Dashboard() {

    const [data, setData] = useState([]);
    useEffect(()=>{
      async function fetchData(){
        let db = new DBService()
        let docs = await db.find()
        setData(docs)
      }
      fetchData();
    }, [])

    // console.log('====================================');
    // console.log(user);
    // console.log('====================================');


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [edit,setEdit]=useState()
    return (
      <div>
        <Navbar user="Team3" />
        <AddStudent toggle={toggle} modal={modal} />
        <div className="container mt-4">
          <div className="container">
            <div className="row mb-3 justify-content-between">
              <div className="col-lg-4 p-0">
                <div
                  className="btn-group w-100"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => toggle()}
                  >
                    Add
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Generate
                  </button>

                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      className="btn btn-outline-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort By
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li>
                        <a class="dropdown-item" href="#">
                          Sub1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Sub2
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Sub3
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Avg
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Result
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      className="btn btn-outline-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Display
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li>
                        <a class="dropdown-item" href="#">
                          Min
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Max
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Avg
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Greater than
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Less than
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Top n
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Botttom n
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-0">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Value"
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Calculate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-0">
            <table className="table table-success table-striped m-0">
              <thead>
                <tr className="bg-light">
                  <th scope="col">Name</th>
                  <th scope="col">React</th>
                  <th scope="col">MongoDB</th>
                  <th scope="col">JavaScript</th>
                  <th scope="col">Average</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"Anurag Gharat"}</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>{"Anurag Gharat"}</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>{"Anurag Gharat"}</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>{"Anurag Gharat"}</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>{"Anurag Gharat"}</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                  <td>90</td>
                </tr>
              </tbody>
            </table>
          </div>
            <AllAsso data={data} />
         </div>
      </div>
    );
}
