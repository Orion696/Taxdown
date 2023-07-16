import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../styles/Submissions.css';
import { deleteFormSubmission, editFormSubmission } from '../redux/actions/formActions';

function Submissions() {
  const { id } = useParams();
  const submissions = useSelector(state => state.form.submissions[id] || []);
  const dispatch = useDispatch();

  const [nameFilter, setNameFilter] = useState('');
  const [surnameFilter, setSurnameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentSubmission, setCurrentSubmission] = useState(null);

  const filteredSubmissions = submissions.filter(submission => {
    const nameMatch = !nameFilter || submission.name.toLowerCase().includes(nameFilter.toLowerCase());
    const surnameMatch = !surnameFilter || submission.surname.toLowerCase().includes(surnameFilter.toLowerCase());
    const ageMatch = !ageFilter || submission.age === ageFilter;

    return nameMatch && surnameMatch && ageMatch;
  });

  const handleDelete = (submissionId) => {
    dispatch(deleteFormSubmission(id, submissionId));
  };

  const handleEdit = (submission) => {
    setEditing(true);
    setCurrentSubmission(submission);
  };

  const handleUpdate = () => {
    dispatch(editFormSubmission(id, currentSubmission.id, currentSubmission));
    setEditing(false);
    setCurrentSubmission(null);
  };

  const handleCloseModal = () => {
    setEditing(false);
    setCurrentSubmission(null);
  };

  return (
    <div>
      <h1 className="submissions-title">Envíos de formulario</h1>
      <div className="filter-container">
        <label>Nombre:</label>
        <input
          type="text"
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
          className="small-input"
        />
        <label>Apellido:</label>
        <input
          type="text"
          value={surnameFilter}
          onChange={e => setSurnameFilter(e.target.value)}
          className="small-input"
        />
        <label>Edad:</label>
        <input
          type="text"
          value={ageFilter}
          onChange={e => setAgeFilter(e.target.value)}
          className="small-input"
        />
      </div>
      <table className="sub-table">
        <thead>
          <tr>
            <th>Envío</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredSubmissions.map((submission, index) => (
            <tr key={submission.id}>
              <td>{submissions.indexOf(submission) + 1}</td>
              <td>{submission.name}</td>
              <td>{submission.surname}</td>
              <td>{submission.age}</td>
              <td>
                <div className="container-edit">
                  <button className="btn btn-editar" onClick={() => handleEdit(submission)}>Editar</button>
                  <button className="btn btn-eliminar" onClick={() => handleDelete(submission.id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/dashboard" className="dashboard-link">Dashboard</Link>

      <Modal
        isOpen={editing}
        onRequestClose={handleCloseModal}
        contentLabel="Editar Envío"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Editar Envío</h2>
        <form className="edit-form">
          <label>Nombre:</label>
          <input
            type="text"
            value={currentSubmission?.name || ''}
            onChange={e => setCurrentSubmission({ ...currentSubmission, name: e.target.value })}
          />
          <label>Apellido:</label>
          <input
            type="text"
            value={currentSubmission?.surname || ''}
            onChange={e => setCurrentSubmission({ ...currentSubmission, surname: e.target.value })}
          />
          <label>Edad:</label>
          <input
            type="text"
            value={currentSubmission?.age || ''}
            onChange={e => setCurrentSubmission({ ...currentSubmission, age: e.target.value })}
          />
          <div className="button-group">
            <button className="btn btn-save" onClick={handleUpdate}>Guardar</button>
            <button className="btn btn-cancel" onClick={handleCloseModal}>Cancelar</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Submissions;
