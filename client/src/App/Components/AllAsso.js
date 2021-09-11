import React,{useState} from 'react'
import EditStudent from './EditStudent';

export default function AllAsso({data}) {

        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
        const [current,setCurrent]=useState(null)

    const openmodal=(user)=>{
      setCurrent(user)
      toggle()
    }

    return (
      <div className="container p-0 mt-5">
        <EditStudent toggle={toggle} modal={modal} />
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
            <tr>
              <td>{"Anurag Gharat"}</td>
              <td>90</td>
              <td>90</td>
              <td>90</td>
              <td>90</td>
              <td>90</td>
            </tr>

            {data.map((user) => (
              <tr key={user._id} onClick={(user) => openmodal(user)}>
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
      </div>
    );
}
