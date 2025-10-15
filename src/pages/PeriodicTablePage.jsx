import React, { useState } from 'react';
import { periodicElements, tableConfig } from '../data/periodicTableData';
import '../styles/PeriodicTablePage.css';

const PeriodicTablePage = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  // Build a lookup map for quick element access
  const elementMap = new Map();
  periodicElements.forEach(el => {
    // Skip f-block from main grid
    if (el.category !== 'lanthanide' && el.category !== 'actinide') {
      elementMap.set(`${el.period}-${el.group}`, el);
    }
  });

  // Get lanthanides and actinides for separate rows
  const lanthanides = periodicElements.filter(el => el.category === 'lanthanide');
  const actinides = periodicElements.filter(el => el.category === 'actinide');

  const renderCell = (period, group) => {
    const element = elementMap.get(`${period}-${group}`);
    
    if (!element) {
      return <div key={`${period}-${group}`} className="periodic-cell empty" />;
    }

    return (
      <div key={`${period}-${group}`} className="periodic-cell">
        <button
          className={`element-button ${element.category.replace(/\s+/g, '-')}`}
          onClick={() => setSelectedElement(element)}
          aria-label={`${element.name}, atomic number ${element.atomicNumber}`}
        >
          <span className="element-number">{element.atomicNumber}</span>
          <span className="element-symbol">{element.symbol}</span>
        </button>
      </div>
    );
  };

  const renderFBlockElement = (element) => (
    <button
      key={element.atomicNumber}
      className={`element-button fblock ${element.category.replace(/\s+/g, '-')}`}
      onClick={() => setSelectedElement(element)}
      aria-label={`${element.name}, atomic number ${element.atomicNumber}`}
    >
      <span className="element-number">{element.atomicNumber}</span>
      <span className="element-symbol">{element.symbol}</span>
    </button>
  );

  return (
    <div className="periodic-table-page">
      <div className="page-content">
        <header className="page-header">
          <h1>Interactive Periodic Table</h1>
          <p>Explore all 118 elements. Click any element to view details.</p>
        </header>

        <div className="periodic-table-card">
          {/* Main periodic table grid */}
          <div className="main-grid">
            {Array.from({ length: tableConfig.periods }, (_, p) =>
              Array.from({ length: tableConfig.groups }, (_, g) =>
                renderCell(p + 1, g + 1)
              )
            )}
          </div>

          {/* Category legend */}
          <div className="category-legend">
            <span className="legend-badge alkali-metal">Alkali Metal</span>
            <span className="legend-badge alkaline-earth-metal">Alkaline Earth</span>
            <span className="legend-badge transition-metal">Transition Metal</span>
            <span className="legend-badge post-transition-metal">Post-Transition</span>
            <span className="legend-badge metalloid">Metalloid</span>
            <span className="legend-badge nonmetal">Nonmetal</span>
            <span className="legend-badge halogen">Halogen</span>
            <span className="legend-badge noble-gas">Noble Gas</span>
            <span className="legend-badge lanthanide">Lanthanide</span>
            <span className="legend-badge actinide">Actinide</span>
          </div>

          {/* f-block section */}
          <div className="fblock-section">
            <div className="fblock-row">
              <h3 className="fblock-title">Lanthanides</h3>
              <div className="fblock-elements">
                {lanthanides.map(renderFBlockElement)}
              </div>
            </div>
            <div className="fblock-row">
              <h3 className="fblock-title">Actinides</h3>
              <div className="fblock-elements">
                {actinides.map(renderFBlockElement)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Element details modal */}
      {selectedElement && (
        <div className="modal-overlay" onClick={() => setSelectedElement(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className={`modal-header ${selectedElement.category.replace(/\s+/g, '-')}`}>
              <div className="modal-symbol">{selectedElement.symbol}</div>
              <div className="modal-info">
                <h2>{selectedElement.name}</h2>
                <p>Atomic Number: {selectedElement.atomicNumber}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="info-row">
                <strong>Category:</strong>
                <span>{selectedElement.category}</span>
              </div>
              <div className="info-row">
                <strong>Uses:</strong>
                <p>{selectedElement.uses || 'Information not available'}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="close-button"
                onClick={() => setSelectedElement(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodicTablePage;
