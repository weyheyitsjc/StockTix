import React, { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/global.css';
import './Login.css';


type props = {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<props> = (props) =>  {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const navigate = useNavigate();

  const onButtonClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      props.setLoggedIn(true);
      navigate('/');
    };
  };

  return (
    <div className={'login-container'}>
      <div className={'login-box'}>
        <img src='/StockTixLogo.png' alt='StockTix Logo' className='logo'/>
        <h2>Sign in to StockTix</h2>
        <form>
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
          <button
            type='submit'
            className='login-button'
            onClick={onButtonClick}
          >
            Log In
          </button>
        </form>
        <p className='signup-text'>
          Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
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

export default Login;