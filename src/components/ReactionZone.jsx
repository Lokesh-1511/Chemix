import React, { useRef, useState, useEffect } from 'react';
import '../styles/ReactionZone.css';

const ReactionZone = ({ onReaction, selectedElements, setSelectedElements }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    
    try {
      const elementData = JSON.parse(e.dataTransfer.getData('application/json'));
      
      // Prevent duplicate elements in the reaction zone
      if (!selectedElements.find(el => el.id === elementData.id)) {
        setSelectedElements(prev => [...prev, elementData]);
      }
    } catch (error) {
      console.error('Error parsing dropped element data:', error);
    }
  };

  // Touch drop handler
  const handleTouchDrop = (e) => {
    const element = e.detail.element;
    
    // Prevent duplicate elements in the reaction zone
    if (!selectedElements.find(el => el.id === element.id)) {
      setSelectedElements(prev => [...prev, element]);
      
      // Visual feedback
      setDragOver(true);
      setTimeout(() => setDragOver(false), 300);
    }
  };

  // Ref for drop area to attach touch listener reliably
  const dropAreaRef = useRef(null);

  // Add touch drop event listener
  useEffect(() => {
    const node = dropAreaRef.current;
    if (!node) return;
    node.addEventListener('touchdrop', handleTouchDrop);
    return () => {
      node.removeEventListener('touchdrop', handleTouchDrop);
    };
  }, [dropAreaRef, selectedElements]);

  const removeElement = (elementId) => {
    setSelectedElements(prev => prev.filter(el => el.id !== elementId));
  };

  const handleReact = () => {
    if (selectedElements.length >= 2) {
      onReaction(selectedElements);
    }
  };

  const clearReaction = () => {
    setSelectedElements([]);
  };

  return (
    <div className="reaction-zone">
      <h3 className="reaction-zone-title">Reaction Zone</h3>
      
      <div 
        className={`drop-area ${dragOver ? 'drag-over' : ''} ${selectedElements.length > 0 ? 'has-elements' : ''}`}
        ref={dropAreaRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedElements.length === 0 ? (
          <div className="drop-placeholder">
            <div className="drop-icon">🧪</div>
            <p>Drag elements here to create reactions</p>
            <small>You need at least 2 elements to react</small>
          </div>
        ) : (
          <div className="selected-elements">
            {selectedElements.map((element, index) => (
              <div key={`${element.id}-${index}`} className="selected-element">
                <div className={`element-card ${element.type}`}>
                  <div className="element-symbol">{element.symbol}</div>
                  <button 
                    className="remove-element"
                    onClick={() => removeElement(element.id)}
                    title="Remove element"
                  >
                    ×
                  </button>
                </div>
                {index < selectedElements.length - 1 && (
                  <div className="reaction-arrow">+</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="reaction-controls">
        <button 
          className="react-button"
          onClick={handleReact}
          disabled={selectedElements.length < 2}
        >
          🔥 React!
        </button>
        
        <button 
          className="clear-button"
          onClick={clearReaction}
          disabled={selectedElements.length === 0}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ReactionZone;