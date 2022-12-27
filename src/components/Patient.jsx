const Patient = ({ patient, setUpdatePatient, removePatient }) => {
  const { pet, owner, email, admission, symptom, id } = patient;

  const handleRemovePatient = () => {
    const confirmSucces = confirm('Do you want to delete this patient?');
    if (confirmSucces) {
      removePatient(id);
    }
  };

  return (
    <div className="mx-5 mb-5 bg-white shadow-md px-5 py-5 rounded-md">
      <p className="font-bold text-gray-700 capitalize">
        Name: {''}
        <span className="font-normal normal-case">{pet}</span>
      </p>
      <p className="font-bold text-gray-700 capitalize">
        Owner: {''}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold text-gray-700 capitalize">
        Contact email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold text-gray-700 capitalize">
        Date of admission: {''}
        <span className="font-normal normal-case">{admission}</span>
      </p>
      <p className="font-bold text-gray-700 capitalize">
        Symptom: {''}
        <span className="font-normal normal-case">{symptom}</span>
      </p>

      <div className="flex justify-end mt-3">
        <button
          className="py-2 px-5 mr-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
          type="button"
          onClick={() => setUpdatePatient(patient)}
        >
          Update
        </button>
        <button
          className="py-2 px-5 mr-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          type="button"
          onClick={handleRemovePatient}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Patient;
