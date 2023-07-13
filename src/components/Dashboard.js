import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';
import { fetchTaxes } from '../redux/actions/taxActions';
import '../styles/Dashboard.css';  // Import the CSS

function Dashboard({ taxes, fetchTaxes }) {
  useEffect(() => {
    fetchTaxes();
  }, [fetchTaxes]);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Impuestos Activos</h3>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {taxes && taxes.map(tax => (
            <tr key={tax.id}>
              <td>{tax.id}</td>
              <td>{tax.name}</td>
              <td>{tax.year}</td>
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
