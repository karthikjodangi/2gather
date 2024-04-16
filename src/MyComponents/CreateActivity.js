import React, { useState } from 'react';
import Activities from './Activities';
import { useNavigate } from 'react-router-dom';
import "./Create-JoinActivity.css"

const CreateActivity = () => {
  const [selectedCategory] = useState(null);
  const navigate=useNavigate()



  return (
    <div>
      <h3 className='text-secondary'>Categories to Join:</h3>
      
      <div className="button-container">
        <button className="green-button" onClick={() => navigate('/activities/save-nature')}>Save Nature</button>
        <button className="blue-button" onClick={() => navigate('/activities/be-productive')}>Be Productive</button>
        <button className="orange-button" onClick={() => navigate('/activities/have-fun')}>Have fun</button>
        <button className="red-button" onClick={() => navigate('/activities/get-sportive')}>Get Sportive</button>
        <button className="purple-button" onClick={() => navigate('/activities/travel-outdoor')}>Travel/Outdoor</button>
        <button className="teal-button" onClick={() => navigate('/activities/indoor')}>Indoor</button>
      </div>

      <Activities selectedCategory={selectedCategory} />
    </div>
  );
}

export default CreateActivity;
