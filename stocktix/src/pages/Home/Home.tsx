import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/global.css';
import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import EventCard from '../../components/EventCard/EventCard';

type props = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Home: React.FC<props> = (props) => {
  // const navigate = useNavigate();

  // const onButtonClick = () => {
  //   navigate('/login');
  // };
  const [searchQuery, setSearchQuery] = useState<string>('');

  const events = [ // Populate with backend data
    {
      title: 'Project Glow',
      date: 'May 31 & June 1, 2025',
      venue: 'RFK Festival Grounds',
      location: 'Washington D.C.',
      image: 'https://edmmaniac.com/wp-content/uploads/2024/07/ProjectGLOWDates2025.png',
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <SearchBar onSearch={setSearchQuery} />
      <div className="events-container">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Home;