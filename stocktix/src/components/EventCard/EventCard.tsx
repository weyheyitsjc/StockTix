import React from 'react';
import './EventCard.css';

interface EventCardProps {
  title: string;
  date: string;
  venue: string;
  location: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, venue, location, image }) => {
  return (
    <div className="event-card">
      <div className="event-card-image-container">
        <img src={image} alt={title} className="event-image" />
      </div>
      <div className="event-info">
        <h2>{title}</h2>
        <p>
          <strong>When:</strong> {date}
        </p>
        <p>
          <strong>Venue:</strong> {venue}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <button className="view-event">View Event</button>
      </div>
    </div>
  );
};

export default EventCard;