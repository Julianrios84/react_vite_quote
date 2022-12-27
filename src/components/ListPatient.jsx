import Patient from './Patient';

export const ListPatient = ({ patients, setUpdatePatient, removePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-noto-sans font-black text-3xl text-center">
            Manage your {''}
          </h2>
          <p className="text-indigo-600 font-bold text-2xl text-center mb-10">
            patients and appointments
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setUpdatePatient={setUpdatePatient}
              removePatient={removePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-noto-sans font-black text-3xl text-center">
            No patients {''}
          </h2>
          <p className="text-indigo-600 font-bold text-2xl text-center mb-10">
            Start adding patients and appear in this place
          </p>
        </>
      )}
    </div>
  );
};
