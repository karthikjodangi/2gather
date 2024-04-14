import React from 'react';
import { Link } from 'react-router-dom';
import './Create-JoinActivity.css'; 

const JoinActivity = () => {
  return (
    <div>

      <h3 className='text-secondary'>Categories to Join:</h3>
      
      <div className="button-container">
        <Link to="/activities">
          <button className="orange-button">Save Nature</button>
        </Link>
        <Link to="/activities">
          <button className="red-button">Be Productive</button>
        </Link>
        <Link to="/activities">
          <button className="teal-button">Have fun</button>
        </Link>
        <Link to="/activities">
          <button className="purple-button">Get Sportive</button>
        </Link>
        <Link to="/activities">
          <button className="blue-button">Travel/Outdoor</button>
        </Link>
        <Link to="/activities">
          <button className="green-button">Indoor </button>
        </Link>
      </div>
    </div>
  );
}

export default JoinActivity;
