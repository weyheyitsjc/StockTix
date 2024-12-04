import React, { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type props = {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<props> = (props) =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    };

    

    props.setLoggedIn(true);
    navigate('/');
    };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>StockTix Logo</div>
      </div>
      <div>
        Sign in to StockTix
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