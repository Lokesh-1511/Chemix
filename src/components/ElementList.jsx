import React from 'react';
import '../styles/ElementList.css';

const ElementList = ({ elements, onDragStart }) => {
  // Filter only unlocked elements
  const unlockedElements = elements.filter(element => element.unlocked);

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData('application/json', JSON.stringify(element));
    e.dataTransfer.effectAllowed = 'copy';
    if (onDragStart) {
      onDragStart(element);
    }
  };

  return (
    <div className="element-list">
      <h3 className="element-list-title">Available Elements & Compounds</h3>
      <div className="element-grid">
        {unlockedElements.map(element => (
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
      
      {unlockedElements.length === 0 && (
        <div className="no-elements">
          <p>No elements available. Complete reactions to unlock more!</p>
        </div>
      )}
    </div>
  );
};

export default ElementList;