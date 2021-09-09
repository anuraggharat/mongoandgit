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

    const [sortby,setSortby] = useState('');
    const [display, setDisplay] = useState("");
    const [value,setValue]=useState('')




      const handleSort = (e) => {
        
        setSortby(e.target.value);
      };

      const handleDisplay =(e)=>{
        setDisplay(e.target.value);

      }

      const handleChange=(e)=>{
        setValue(e.target.value)
      }



    const sendData=()=>{
    console.log(sortby);
    console.log(display);
    console.log(value);
      }



    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
      <div>
        <Navbar user="Team3" />
        <AddStudent toggle={toggle} modal={modal} />
        <div className="container mt-4">
          <div className="container">
            <form>
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

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      defaultValue={sortby}
                      onChange={handleSort}
                    >
                      <option selected>Sort By</option>
                      <option value="$min">Min</option>
                      <option value="$max">Max</option>
                      <option value="$avg">Avg</option>
                      <option value="$gt">Greater than</option>
                      <option value="$lt">Less than</option>
                      <option value="TOP">Top n</option>
                      <option value="BOTTOM">Bottom n</option>
                    </select>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      defaultValue={display}
                      onChange={handleDisplay}
                    >
                      <option selected>Display By</option>
                      <option value="sub1">Sub1</option>
                      <option value="sub2">Sub2</option>
                      <option value="sub3">Sub3</option>
                      <option value="avg">Avg</option>
                      <option value="result">Result</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 p-0">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Value"
                      value={value}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      id="button-addon2"
                      onClick={()=>sendData()}
                    >
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
