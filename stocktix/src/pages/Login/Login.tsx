import React, { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props: {setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; setEmail: React.Dispatch<SetStateAction<string>>;}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/home', {state: {loggedIn: true}})
  
    // Authentication calls will be made here...
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder='Email'
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder='Enter your password here'
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className='errorLabel'>{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type='button' onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  );
};

export default Login;