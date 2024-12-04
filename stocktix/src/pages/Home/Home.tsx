import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/global.css';

type props = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<props> = (props) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className='mainContainer'>
      <div className={'titleContainer'}>
        <div>StockTix Logo</div>
      </div>
      <div>Sign in to StockTix</div>
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