import { useState } from "react";
import * as Realm from "realm-web";
import './App.css';

const REALM_APP_ID = "<YOUR_REALM_APP_ID>";
const app = new Realm.App({ id: REALM_APP_ID });


function UserDetail({ user, demo }) {
  demo();
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
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
  
  const [user, setUser] = useState(app.currentUser);

  const demo = async () => {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const listingsAndReviews = mongodb.db("sample_airbnb").collection("listingsAndReviews");
    const obj = await listingsAndReviews.findOne();
    console.log(obj);
  }

  return (
    <div className="App">
      <div className="App-header">
        {user ? <UserDetail user={user} demo={demo}/> : <Login setUser={setUser} />}
      </div>
    </div>
  );
}

export default App;
