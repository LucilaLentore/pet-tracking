import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PetList from "./components/PetList";

function App() {
  const initialPatients = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients] = useState(initialPatients);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatePatients = patients.filter(actualPatient => actualPatient.id !== id );
    setPatients(updatePatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PetList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </div>
  );
}

export default App;
