import React,{useState} from 'react'
import EditStudent from './EditStudent';

export default function AllAsso({data, fetchData}) {

    const [modal, setModal] = useState(-1);
    const toggle = () => setModal(-1);

    return (
      <div className="container p-0 mt-5">
        <h3>All Associates</h3>
        <table className="table m-0">
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
            {data.map((user, idx) => (
              <tr key={idx} onClick={() => setModal(idx)}>
                <td>{user.name}</td>
                <td>{user.subject1}</td>
                <td>{user.subject2}</td>
                <td>{user.subject3}</td>
                <td>{user.avg}</td>
                <td>{user.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {modal !=-1 && 
        <EditStudent toggle={toggle} modal={modal !== -1} user={data[modal]} fetchData ={fetchData} />}
      </div>
    );
}
