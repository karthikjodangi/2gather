import React from 'react';
import { Link } from 'react-router-dom';
import "./Create-JoinActivity.css"

const CreateActivity = () => {
  return (
    <div>
      <h3 className='text-primary'>Categories to Add:</h3>
      
      <div className="button-container">
        <Link to="/activities">
          <button className="green-button">Save Nature</button>
        </Link>
        <Link to="/activities">
          <button className="blue-button">Be Productive</button>
        </Link>
        <Link to="/activities">
          <button className="orange-button">Have fun</button>
        </Link>
        <Link to="/activities">
          <button className="red-button">Get Sportive</button>
        </Link>
        <Link to="/activities">
          <button className="purple-button">Travel/Outdoor</button>
        </Link>
        <Link to="/activities">
          <button className="teal-button">Indoor </button>
        </Link>
      </div>
    </div>
  );
}

export default CreateActivity;
