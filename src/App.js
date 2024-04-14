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
                  <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                      <div className="col-10 col-sm-8 col-lg-6">
                        <img src="serene.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
                      </div>
                      <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Let's get <span className="green-text">GREEN</span> 2Gather</h1>
                        <p className="lead">Join the fun on our app! Gather your crew for eco-adventures, from tree planting to beach cleanups. Save cash by teaming up with pals for group activities and enjoy making a positive impact on nature. Create or join groups focusing on sustainable development goals. Let's have a blast while saving the planet and our wallets! 🌿👫💰 <span className="blue-text">#SustainableSquadGoals</span></p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                          <button type="button" className={`btn btn-primary btn-lg px-4 me-md-2 ${choice === 'create' ? 'active' : ''}`}
                            onClick={() => handleChoice('create')}>Create Activity</button>
                          <button type="button" className={`btn btn-outline-secondary btn-lg px-4 ${choice === 'join' ? 'active' : ''}`}
                            onClick={() => handleChoice('join')}>Join Activity</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Render the appropriate component based on the user's choice */}
                  <div className={`activity-view ${choice}`}>
                    {choice === 'create' && <CreateActivity />}
                    {choice === 'join' && <JoinActivity />}
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
