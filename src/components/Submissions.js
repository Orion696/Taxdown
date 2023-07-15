import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import '../styles/Submissions.css';

function Submissions() {
  const { id } = useParams();
  const submissions = useSelector(state => state.form.submissions[id] || []);
  const [nameFilter, setNameFilter] = useState('');
  const [surnameFilter, setSurnameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  const filteredSubmissions = submissions.filter(submission => {
    const nameMatch = !nameFilter || submission.name.toLowerCase().includes(nameFilter.toLowerCase());
    const surnameMatch = !surnameFilter || submission.surname.toLowerCase().includes(surnameFilter.toLowerCase());
    const ageMatch = !ageFilter || submission.age === ageFilter;

    return nameMatch && surnameMatch && ageMatch;
  });

  return (
    <div className="submissions-container">
      <h1 className="submissions-title">Envíos de formulario</h1>
      <div className="filter-container">
        <label>Nombre:</label>
        <input
          type="text"
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
        />
        <label>Apellido:</label>
        <input
          type="text"
          value={surnameFilter}
          onChange={e => setSurnameFilter(e.target.value)}
        />
        <label>Edad:</label>
        <input
          type="text"
          value={ageFilter}
          onChange={e => setAgeFilter(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Envío</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission, index) => (
            <tr key={submission.id}>
              <td>{submissions.indexOf(submission) + 1}</td>
              <td>{submission.name}</td>
              <td>{submission.surname}</td>
              <td>{submission.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
    </div>
  );
}

export default Submissions;
