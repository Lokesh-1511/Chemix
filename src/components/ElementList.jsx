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

  // Touch support for mobile drag-and-drop
  const handleTouchStart = (e, element) => {
    const touch = e.touches[0];
    const card = e.currentTarget;
    
    // Store element data for touch drag
    card.dataset.elementData = JSON.stringify(element);
    
    // Create a visual clone for dragging
    const clone = card.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.pointerEvents = 'none';
    clone.style.opacity = '0.8';
    clone.style.zIndex = '10000';
    clone.style.transform = 'scale(1.1)';
    clone.style.transition = 'none';
    clone.id = 'drag-clone';
    
    // Position the clone at touch point
    clone.style.left = `${touch.clientX - 40}px`;
    clone.style.top = `${touch.clientY - 40}px`;
    
    document.body.appendChild(clone);
    
    // Add visual feedback to original card
    card.style.opacity = '0.5';
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const clone = document.getElementById('drag-clone');
    
    if (clone) {
      clone.style.left = `${touch.clientX - 40}px`;
      clone.style.top = `${touch.clientY - 40}px`;
    }
  };

  const handleTouchEnd = (e, element) => {
    const card = e.currentTarget;
    const clone = document.getElementById('drag-clone');
    const touch = e.changedTouches[0];
    
    // Remove clone
    if (clone) {
      clone.remove();
    }
    
    // Restore original card opacity
    card.style.opacity = '1';
    
    // Find the element at touch point
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Check if dropped on reaction zone
    if (dropTarget) {
      const dropArea = dropTarget.closest('.drop-area');
      if (dropArea) {
        // Trigger custom event for drop
        const dropEvent = new CustomEvent('touchdrop', {
          detail: { element: element }
        });
        dropArea.dispatchEvent(dropEvent);
      }
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
            onTouchStart={(e) => handleTouchStart(e, element)}
            onTouchMove={handleTouchMove}
            onTouchEnd={(e) => handleTouchEnd(e, element)}
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