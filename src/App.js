import React, { useState } from 'react'
import Header from './MyComponents/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './MyComponents/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './MyComponents/About';
import MyActivities from './MyComponents/MyActivities';
import Buddies from './MyComponents/Buddies';
import CreateActivity from './MyComponents/CreateActivity';
import JoinActivity from './MyComponents/JoinActivity';
import Activities from './MyComponents/Activities';

const App = () => {
  const [choice, setChoice] = useState(null); // State to hold the user's choice

  // Function to handle user's choice
  const handleChoice = (chosenOption) => {
    setChoice(chosenOption);
  };
  return (
    <div>
      <Header />

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={
              <>
                <div className="content">
                  {/* Display options to create or join an activity */}
                  <div className="options">
                    <button onClick={() => handleChoice('create')}>Create Activity</button>
                    <button onClick={() => handleChoice('join')}>Join Activity</button>
                  </div>
                  {/* Render the appropriate component based on the user's choice */}
                  {choice === 'create' && <CreateActivity />}
                  {choice === 'join' && <JoinActivity />}
                </div>
              </>
            } />
            <Route exact path="/myactivities" element={<MyActivities />} />
            <Route path="/buddies" element={<Buddies />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  )
}

export default App
