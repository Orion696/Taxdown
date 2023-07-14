import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTaxes } from '../redux/actions/taxActions';
import '../styles/Dashboard.css';

function Dashboard({ taxes, fetchTaxes }) {
  useEffect(() => {
    fetchTaxes();
  }, [fetchTaxes]);

  return (
    <div>
      <h1 className="dashboard-title">Dashboard</h1>
      <h3 className="taxes-title">Impuestos Activos</h3>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Año</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {taxes && taxes.map(tax => (
            <tr key={tax.id}>
              <td>{tax.id}</td>
              <td>{tax.name}</td>
              <td>{tax.year}</td>
              <td>
                <Link to={`/taxes/${tax.id}/form`}>Agregar entradas</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  taxes: state.taxes.taxes
});

const mapDispatchToProps = dispatch => ({
  fetchTaxes: () => dispatch(fetchTaxes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);