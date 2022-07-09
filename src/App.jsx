import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Form from './components/Form';
import PetList from './components/PetList';

function App() {
  const [patient, setPatient] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      
      <div className="mt-12 md:flex">
        <Form patient={patient} setPatient={setPatient}/>
        <PetList />
      </div>

    </div>
  );
};

export default App;
