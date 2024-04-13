import React from 'react';
import { Link } from 'react-router-dom';

const JoinActivity = () => {
  return (
    <div>
      <h3>Categories:</h3>
      {/* Render buttons for each activity */}
      <div>
        <Link to="/activities">
          <button>Save Nature</button>
        </Link>
        <Link to="/activities">
          <button>Be Productive</button>
        </Link>
        <Link to="/activities">
          <button>Have fun</button>
        </Link>
        <Link to="/activities">
          <button>Get Sportive</button>
        </Link>
      </div>
    </div>
  );
}

export default JoinActivity;
