import "./Login.css"
import React, { useState, useContext } from 'react';
import AppContext from "../AppContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const { getLoggedIn, changeLoggedIn } = useContext(AppContext);

    const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
    const [authError, setAuthError] = useState(false);
    
    const handleFormChange = ((e) => {
      setFormValues({...formValues, [e.target.name]: e.target.value});
    });
  
    const clickSubmit = (() => {

      getLoggedIn(formValues.email, formValues.password)
      .then((data) => {
        if (data) {
          changeLoggedIn(true);
          setAuthError(false);
          window.location.href = "/coffee";
        } else {
          setAuthError(true);
        }
      });
    });
  
    return (
        <div className="Login">
            <h4 className="bold">Inicio de sesión</h4>
            <div className="Login-form">
                <Form>
                    <Form.Group className="mb-6" controlId="formBasicEmail">
                        <Form.Label className="bold">Nombre de usuario</Form.Label>
                        <Form.Control type="email" onChange={handleFormChange} name="email" className={
                        (authError && "invalid")+" Login-input"}/>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="bold">Contraseña</Form.Label>
                        <Form.Control type="password" onChange={handleFormChange} name="password" className={
                        (authError && "invalid")+" Login-input"}/>
                    </Form.Group>
                    <div className="Login-buttons">
                        <Button variant="primary" onClick={clickSubmit} className="Login-submit Login-button">
                            Ingresar
                        </Button>
                        <Button variant="secondary" href="/" className="Login-cancel Login-button">
                            Cancelar
                        </Button>
                    </div>
                    <p className={(authError ? "" : "hidden")+" Login-error"}>Error de autenticación. Revise sus credenciales</p>
                </Form>
            </div>
        </div>
    );
}

export default Login;