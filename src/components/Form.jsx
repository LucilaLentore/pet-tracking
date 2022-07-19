import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

const Form = ({ patients, setPatients, patient }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptom, setSymptom] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptom(patient.symptom);
    }
  }, [patient])
  

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, owner, email, date, symptom].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    const patientData = {
      id: generateId(),
      name,
      owner,
      email,
      date,
      symptom,
    };

    setPatients([...patients, patientData]);

    setName('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptom('');
  };

  return(
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {""} <span className="font-bold text-indigo-600">Adminístralos</span></p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >

         { error && <ErrorMessage message='Todos los campos son obligatorios' /> }

        <div className="mt-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota" value={name} onChange={ (e) => setName(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mt-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
          <input id="propietario" type="text" placeholder="Nombre del propietario" value={owner} onChange={ (e) => setOwner(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" type="email" placeholder="Email propietario" value={email} onChange={ (e) => setEmail(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mt-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="alta" type="date" value={date} onChange={ (e) => setDate(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mt-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea id="sintomas" placeholder="Síntomas" value={symptom} onChange={ (e) => setSymptom(e.target.value) } className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" 
          value="Agregar paciente"
        />

      </form>
    </div>
  );
};

export default Form;
