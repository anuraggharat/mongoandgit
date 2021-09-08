import { useState } from "react";
import * as Realm from "realm-web";
import './App.css';
import Dashboard from "./App/Components/Dashboard";

const REALM_APP_ID = "scenario-jsktu";
const app = new Realm.App({ id: REALM_APP_ID });


function UserDetail({ user, getData,data }) {
  getData();
  return (
    <Dashboard user={user} data={data} />
  );
}

function Login({ setUser }) {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}

const App = () => {

  //A state that sets a user
  const [user, setUser] = useState(app.currentUser);
  const [data,setData] = useState(null)

  const getData = async () => {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const associates = mongodb.db("academy").collection("associates");
    const obj = await associates.find({});
    console.log('====================================');
    console.log(obj);
    console.log('====================================');
    //setData(obj)
  }

  return (
    <>  {user ? <UserDetail user={user} getData={getData} data={data}/> : <Login setUser={setUser} />}
      </>
  );
}

export default App;
