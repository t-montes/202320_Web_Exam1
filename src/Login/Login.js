import "./Login.css"
import React, { useState, useEffect, useContext } from 'react';
import AppContext from "../AppContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const { loggedIn, changeLoggedIn } = useContext(AppContext);

    const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
    const [validationStates, setValidationStates] = useState({emailState:true, passwordState:true})
    const [authError, setAuthError] = useState(false);
    
    const handleFormChange = ((e) => {
      switch(e.target.name){
        case "password":
          setValidationStates({...validationStates, passwordState: validatePassword(e.target.value)});
          break;
        default:
          break;
      }
      setFormValues({...formValues, [e.target.name]: e.target.value});
    });
  
    const clickSubmit = (() => {
      const emailState = validateEmail(formValues.email);
      const passwordState = validatePassword(formValues.password);
      setValidationStates({
        emailState, passwordState
      });
      if (emailState && passwordState) {
        changeLoggedIn();
        window.location.href = "/coffee";
      }
    });
  
    const validateEmail = ((email) => {
      const re = /\S+@\S+\.\S+/;
      const isValid = re.test(email);
      console.log("validateEmail", isValid);
      return isValid;
    });
  
    const validatePassword = ((password) => {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
      const isValid = re.test(password);
      console.log("validatePassword", isValid);
      return isValid;
    });
  
    return (
        <div className="Login">
            <h2>Inicio de sesión</h2>
            <div className="Login-form">
                <Form>
                    <Form.Group className="mb-6" controlId="formBasicEmail">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleFormChange} name="email" className={
                        (!validationStates.emailState && "invalid")+" login-input"}/>
                        { !validationStates.emailState && <Form.Text className="text-muted">The email is not valid</Form.Text>}
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleFormChange} name="password" className={
                        (!validationStates.passwordState && "invalid")+" login-input"}/>
                        { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
                    </Form.Group>
                        <Button variant="primary" onClick={clickSubmit}>
                            Ingresar
                        </Button>
                        <Button variant="secondary" href="/">
                            Cancelar
                        </Button>
                    <p className={authError ? "" : "hidden"}>Error de autenticación. Revise sus credenciales</p>
                </Form>
            </div>
        </div>
    );
}

export default Login;