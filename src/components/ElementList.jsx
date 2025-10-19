import React, { useState } from 'react';
import '../styles/ElementList.css';

const ElementList = ({ elements, onDragStart }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter only unlocked elements
  const unlockedElements = elements.filter(element => element.unlocked);

  // Apply category filter
  const filteredByCategory = unlockedElements.filter(element => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'elements') return element.type === 'element';
    if (activeFilter === 'ions') return element.type === 'ion';
    if (activeFilter === 'compounds') return element.type === 'compound';
    return true;
  });

  // Apply search filter
  const filteredElements = filteredByCategory.filter(element => 
    element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData('application/json', JSON.stringify(element));
    e.dataTransfer.effectAllowed = 'copy';
    if (onDragStart) {
      onDragStart(element);
    }
  };

  // Count elements by type
  const counts = {
    all: unlockedElements.length,
    elements: unlockedElements.filter(e => e.type === 'element').length,
    ions: unlockedElements.filter(e => e.type === 'ion').length,
    compounds: unlockedElements.filter(e => e.type === 'compound').length,
  };

  return (
    <div className="element-list">
      <h3 className="element-list-title">Available Elements & Compounds</h3>
      
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name or symbol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="filter-buttons">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All ({counts.all})
        </button>
        <button
          className={`filter-btn ${activeFilter === 'elements' ? 'active' : ''}`}
          onClick={() => setActiveFilter('elements')}
        >
          Elements ({counts.elements})
        </button>
        <button
          className={`filter-btn ${activeFilter === 'ions' ? 'active' : ''}`}
          onClick={() => setActiveFilter('ions')}
        >
          Ions ({counts.ions})
        </button>
        <button
          className={`filter-btn ${activeFilter === 'compounds' ? 'active' : ''}`}
          onClick={() => setActiveFilter('compounds')}
        >
          Compounds ({counts.compounds})
        </button>
      </div>

      <div className="element-grid">
        {filteredElements.map(element => (
          <div
            key={element.id}
            className={`element-card ${element.type}`}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
            title={element.name}
          >
            <div className="element-symbol">{element.symbol}</div>
            <div className="element-name">{element.name}</div>
            <div className="element-type">{element.type}</div>
          </div>
        ))}
      </div>
      
      {filteredElements.length === 0 && unlockedElements.length > 0 && (
        <div className="no-elements">
          <p>No items match your search or filter.</p>
        </div>
      )}

      {unlockedElements.length === 0 && (
        <div className="no-elements">
          <p>No elements available. Complete reactions to unlock more!</p>
        </div>
      )}
    </div>
  );
};

export default ElementList;