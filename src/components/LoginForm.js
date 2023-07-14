import React, { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';  // Import the CSS

function LoginForm({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    if (username === "usuario" && password === "contraseña") {
        setLoggedIn(true);
        navigate('/dashboard');
    } else {
        alert("Credenciales incorrectas");
    }
};


  return (
    <div className="container">
      <div className="text-container">
        <h1 className="taxdown-title">Taxdown</h1>
        <p className="taxdown-text">Te ayudamos a gestionar tus impuestos de manera fácil, rapido y segura</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch({ type: 'LOGIN_REQUEST', payload: { username, password } })
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
