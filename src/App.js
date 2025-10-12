import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Learn from './pages/Learn.jsx';
import About from './pages/About.jsx';
import PeriodicTable from './pages/PeriodicTable.jsx';
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
            <Route path="/periodic" element={<PeriodicTable />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;