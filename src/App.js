import React, { useState } from 'react';
import Header from './MyComponents/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './MyComponents/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './MyComponents/About';
import MyActivities from './MyComponents/MyActivities';
import Buddies from './MyComponents/Buddies';
import CreateActivity from './MyComponents/CreateActivity';
import JoinActivity from './MyComponents/JoinActivity';
import Activities from './MyComponents/Activities';
import './App.css'; // Import your CSS file for custom styling
import Login from './MyComponents/Login';

const App = () => {
  const [choice, setChoice] = useState(null); // State to hold the user's choice

  // Function to handle user's choice
  const handleChoice = (chosenOption) => {
    setChoice(chosenOption);
  };

  return (
    <div className="app-container">
      <Header />

      <Router>
        <div className="content-container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <div className="content">
                    {/* Display options to create or join an activity */}
                    <div className="options">
                      <button
                        className={choice === 'create' ? 'active' : ''}
                        onClick={() => handleChoice('create')}
                      >
                        Create Activity
                      </button>
                      <button
                        className={choice === 'join' ? 'active' : ''}
                        onClick={() => handleChoice('join')}
                      >
                        Join Activity
                      </button>
                    </div>
                    {/* Render the appropriate component based on the user's choice */}
                    <div className={`activity-view ${choice}`}>
                      {choice === 'create' && <CreateActivity />}
                      {choice === 'join' && <JoinActivity />}
                    </div>
                  </div>
                </>
              }
            />
            <Route exact path="/myactivities" element={<MyActivities />} />
            <Route path="/buddies" element={<Buddies />} />
            <Route path="/about" element={<About />} />
            <Route path="/authentication" element={<Login />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
