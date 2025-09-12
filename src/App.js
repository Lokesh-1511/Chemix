import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import About from './pages/About';
import { initialElements, compounds } from './data/chemistryData';
import './styles/App.css';

function App() {
  // Global state for unlocked elements and compounds
  const [availableElements, setAvailableElements] = useState([
    ...initialElements,
    ...compounds
  ]);

  // Function to unlock new compounds when they are created
  const unlockCompound = (compoundId) => {
    setAvailableElements(prev => 
      prev.map(element => 
        element.id === compoundId 
          ? { ...element, unlocked: true }
          : element
      )
    );
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/learn" 
              element={
                <Learn 
                  availableElements={availableElements}
                  unlockCompound={unlockCompound}
                />
              } 
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;