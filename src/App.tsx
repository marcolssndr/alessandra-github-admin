import React, {useState} from 'react';
import './App.css';
import { Login } from './components/pages/login/Login';
import { TypeStudent } from './types/types';
import { DettaglioStudente } from "./components/detail/DettaglioStudente"
import { Navbar } from './components/navbar/Navbar';
function App() {
  //*******
  const myStudent: TypeStudent = {
    name: "Marco",
    surname: "Alessandra",
    login: "marcolssndr",
    classe: "Full-Stack Developer 2",
    repos: null
  }

  //Variabile di stato seza Type
  const [student, setStudent] = useState(myStudent);

  return (
    <div className="App">
      <Navbar />
      <Login />
      <DettaglioStudente {...student}/>
    </div>
  );
}

export default App;