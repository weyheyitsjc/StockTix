import React from 'react';
import { useNavigate } from 'react-router-dom';

type props = {
  loggedIn: boolean;
  email: string;
  setLoggedIn:  React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<props> = (props) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className='mainContainer'>
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type='button'
          onClick={onButtonClick}
          value={props.loggedIn ? 'Log out' : 'Log in'}
        />
      </div>
    </div>
  );
};

export default Home;