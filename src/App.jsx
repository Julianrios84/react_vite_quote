import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import { ListPatient } from './components/ListPatient';

function App() {
  const [patients, setPatients] = useState([]);
  const [updatePatient, setUpdatePatient] = useState({});

  useEffect(() => {
    const getPatients = () => {
      const result = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(result);
    };

    getPatients();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const removePatient = (id) => {
    const result = patients.filter((patient) => patient.id !== id);
    setPatients(result);
  };

  return (
    <div className="container xl:px-10 mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          updatePatient={updatePatient}
          setUpdatePatient={setUpdatePatient}
        />
        <ListPatient
          patients={patients}
          setUpdatePatient={setUpdatePatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  );
}

export default App;
