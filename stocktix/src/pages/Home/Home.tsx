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
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);


  const events = [ // Populate with backend data
    {
      title: 'Project Glow',
      date: 'May 31 & June 1, 2025',
      venue: 'RFK Festival Grounds',
      location: 'Washington D.C.',
      image: 'https://edmmaniac.com/wp-content/uploads/2024/07/ProjectGLOWDates2025.png',
    },
  ];

  const handleSearch = (query: string) => {
    const results = events.filter((event) =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(results); // Update the filtered events
    setSearchQuery(query); // Update the search query (for display purposes)
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <div className="events-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))
        ) : searchQuery ? (
          <p>No events found for "{searchQuery}".</p>
        ) : (
          <p>Start searching for events!</p>
        )}
      </div>
    </div>
  );
};

export default Home;