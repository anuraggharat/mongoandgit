import { useEffect } from "react";
import './App.css';
import Dashboard from "./App/Components/Dashboard";
import DBService from "./App/Utils/DBService.js";


const App = () => {

  useEffect(()=>{
    DBService.connect()
  },[])

  return(
    <>
      <Dashboard />
    </>
  );
}

export default App;
