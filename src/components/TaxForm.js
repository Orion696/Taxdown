import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchFormFieldsRequest, submitFormRequest } from '../redux/actions/formActions';
import '../styles/TaxForm.css';


function TaxForm({ dispatch, fields }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = React.useState({});
  
    useEffect(() => {
      dispatch(fetchFormFieldsRequest(id));
    }, [dispatch, id]);

    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(submitFormRequest(formValues));
      setFormValues({});
      window.alert('Formulario enviado correctamente');
      navigate('/dashboard');
    };
  
    return (
      <div className="form-container">
        <h2 className="form-title">Formulario para el impuesto {id}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map(field => (
            <div key={field.id}>
              <label>{field.label}:</label>
              <input
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                maxLength={20}
                value={formValues[field.id] || ''}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
}

const mapStateToProps = state => ({
  fields: state.form.fields
});

export default connect(mapStateToProps)(TaxForm);
