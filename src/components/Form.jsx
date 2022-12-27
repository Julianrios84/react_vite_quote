import { useEffect, useState } from 'react';
import Error from './Error';

const Form = ({ patients, setPatients, updatePatient, setUpdatePatient }) => {
  const [patient, setPatient] = useState({
    id: '',
    pet: '',
    owner: '',
    email: '',
    admission: '',
    symptom: '',
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patients).length > 0) {
      setPatient(updatePatient);
    }
  }, [updatePatient]);

  const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleChange = (e) => {
    patient[e.target.name] = e.target.value;
    setPatient({ ...patient, patient });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        patient.pet,
        patient.owner,
        patient.email,
        patient.admission,
        patient.symptom,
      ].includes('')
    ) {
      console.log('Field empty...');
      setError(true);
      return;
    }

    setError(false);

    if (updatePatient.id) {
      const update = patients.map((item) =>
        item.id === updatePatient.id ? patient : item
      );
      setPatients(update);
      setUpdatePatient({});
    } else {
      patient.id = generateId();
      setPatients([...patients, patient]);
    }

    setPatient({
      id: '',
      pet: '',
      owner: '',
      email: '',
      admission: '',
      symptom: '',
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-noto-sans font-bold text-3xl text-center">
        add patients and {''}
      </h2>
      <p className="text-indigo-600 font-bold text-2xl text-center mb-10">
        manage them
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message="All fields are required" />}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 capitalize font-bold"
          >
            Pet name
          </label>
          <input
            id="pet"
            name="pet"
            type="text"
            placeholder="Enter pet name..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.pet}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 capitalize  font-bold"
          >
            Owner name
          </label>
          <input
            id="owner"
            name="owner"
            type="text"
            placeholder="Enter owner's name..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.owner}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 capitalize  font-bold"
          >
            Contact email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter owner's email..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="admission"
            className="block text-gray-700 capitalize  font-bold"
          >
            Date of admission
          </label>
          <input
            id="admission"
            name="admission"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.admission}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 capitalize  font-bold"
          >
            Symptom
          </label>
          <textarea
            id="symptom"
            name="symptom"
            placeholder="Describe the symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={patient.symptom}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer translate-all rounded-md"
          value={patient.id ? 'update patient' : 'create patient'}
        />
      </form>
    </div>
  );
};

export default Form;
