import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFormFieldsRequest, submitFormRequest } from '../redux/actions/formActions';

function TaxForm({ dispatch, fields }) {
    const { id } = useParams();
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

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(submitFormRequest(formValues));
    };
  
    return (
      <div>
        <h2>Formulario de impuestos para el impuesto {id}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map(field => (
            <div key={field.id}>
              <label>{field.label}:</label>
              <input
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                maxLength={field.maxLength || undefined}
                value={formValues[field.id] || ''}
                onChange={handleChange}
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
