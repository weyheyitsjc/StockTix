import React, { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/global.css';
import './SignUp.css';


type props = {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp: React.FC<props> = (props) =>  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState<string[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const onButtonClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;
    setNameError('');
    setEmailError('');
    setPasswordError([]);
    setConfirmPasswordError('');

    if (name == '') {
      setNameError('Please enter a name.');
    }

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    const passwordErrors: string[] = [];
    if (password.length < 8) {
      passwordErrors.push('Password must be at least 8 characters long.');
      valid = false;
    }

    if (!/\d/.test(password)) {
      passwordErrors.push('Password must contain at least one number.');
      valid = false;
    }
    
    if (password != confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      valid = false;
    } 
    
    if (valid) {
      props.setLoggedIn(true);
      navigate('/');
    };
  };

  return (
    <div className={'signup-container'}>
      <div className={'signup-box'}>
        <img src='/StockTixLogo.png' alt='StockTix Logo' className='logo'/>
        <h2>Sign up for StockTix</h2>
        <form>
          <input
            type='text'
            placeholder='Name'
            onChange={(ev) => setName(ev.target.value)}
            className={'input-field'}
          />
          <label className='errorLabel'>{nameError}</label>
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={(ev) => setEmail(ev.target.value)}
            className={'input-field'}
          />
          <label className='errorLabel'>{emailError}</label>
          <input
            type='password'
            value={password}
            placeholder='Password'
            onChange={(ev) => setPassword(ev.target.value)}
            className={'input-field'}
          />
          {passwordError.length > 0 && (
            <ul className='errorLabel'>
              {passwordError.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
          <input
            type='password'
            value={confirmPassword}
            placeholder='Comfirm Password'
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            className={'input-field'}
          />
          <label className='errorLabel'>{confirmPasswordError}</label>
          <button
            type='submit'
            className='signup-button'
            onClick={onButtonClick}
          >
            Log In
          </button>
        </form>
        <p className='signup-text'>
          Have an account? <a href="/login" className="login-link">Log In</a>
        </p>
        <div className="divider">
            <hr />
        </div>
        <button className="google-login-button">
            <img src="" alt="Google Logo" className="google-logo" />
            Log in with Google
        </button>
    </div>
  </div>
  );
};

export default SignUp;