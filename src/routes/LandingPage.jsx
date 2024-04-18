import "./LandingPage.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

   

    function checkPassword() {
        if (password.length === 0) {
            setErrorMessage('Lösenordsfältet kan inte vara tomt.');
        } else if (password !== 'Doris') {
            setErrorMessage('Fel lösenord.');
        }
        else {
            setErrorMessage('');
        }
    }

    function validateForm() {
        checkPassword()
    }



   
    const isSubmitDisabled = password.length === 0 || password !== 'doris'

    

    return (
        <div className="loggin-form">
            <div className="input">
            <input
                type="password"
                placeholder="Lösenord"
                aria-label="Lösenord"
                onChange={(event) => setPassword(event.target.value)}/>
                <p className="password-error">{errorMessage}</p>
            </div>
            <div className="submit-container">
            <Link to={isSubmitDisabled ? "#" : "/Lista"}>
                <button className="submit" onClick={validateForm} disabled={isSubmitDisabled}>Logga in</button>
            </Link>
            </div>
        </div>
            

       
    );
}

export default LandingPage;

