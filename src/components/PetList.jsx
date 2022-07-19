import PetDetail from "./PetDetail";

const PetList = ({ patients, setPatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}{" "}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>

          {patients.map((patient) => (
            <PetDetail key={patient.id} patient={patient} setPatient={setPatient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza a agregar pacientes {""}{" "}
            <span className="font-bold text-indigo-600">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PetList;
