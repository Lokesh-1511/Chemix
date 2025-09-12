import React from 'react';
import '../styles/ResultCard.css';

const ResultCard = ({ reaction, onClose }) => {
  if (!reaction) return null;

  return (
    <div className="result-overlay">
      <div className="result-card">
        <div className="result-header">
          <h3 className="result-title">Reaction Result</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="result-content">
          {reaction.success ? (
            <>
              <div className="success-indicator">
                <div className="success-icon">✅</div>
                <p className="success-message">Reaction Successful!</p>
              </div>

              <div className="reaction-equation">
                <h4>Chemical Equation:</h4>
                <div className="equation">{reaction.equation}</div>
              </div>

              <div className="reaction-explanation">
                <h4>What happened:</h4>
                <p>{reaction.explanation}</p>
              </div>

              {reaction.newCompounds && reaction.newCompounds.length > 0 && (
                <div className="new-compounds">
                  <h4>🎉 New Compounds Unlocked:</h4>
                  <div className="unlocked-list">
                    {reaction.newCompounds.map(compound => (
                      <div key={compound.id} className="unlocked-compound">
                        <span className="compound-symbol">{compound.symbol}</span>
                        <span className="compound-name">{compound.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="conditions-used">
                <h4>Conditions Used:</h4>
                <div className="condition-tags">
                  <span className="condition-tag">🌡️ {reaction.conditions.temperature}</span>
                  <span className="condition-tag">🗜️ {reaction.conditions.pressure}</span>
                  <span className="condition-tag">⚗️ {reaction.conditions.catalyst}</span>
                </div>
              </div>

              {/* Placeholder for Lottie animation */}
              <div className="animation-placeholder">
                <div className="placeholder-content">
                  <div className="molecules-animation">
                    <div className="molecule">🔴</div>
                    <div className="bond">—</div>
                    <div className="molecule">🔵</div>
                    <div className="arrow">→</div>
                    <div className="molecule">🟣</div>
                  </div>
                  <small>Animation placeholder - Replace with Lottie animation</small>
                </div>
              </div>
            </>
          ) : (
            <div className="failure-content">
              <div className="failure-indicator">
                <div className="failure-icon">❌</div>
                <p className="failure-message">No Reaction Occurred</p>
              </div>
              
              <div className="failure-explanation">
                <p>{reaction.reason || 'These elements do not react under the current conditions. Try different combinations or adjust the reaction conditions.'}</p>
              </div>

              <div className="suggestions">
                <h4>💡 Suggestions:</h4>
                <ul>
                  <li>Try different temperature or pressure settings</li>
                  <li>Add a catalyst to help the reaction</li>
                  <li>Try different element combinations</li>
                  <li>Some reactions require specific conditions to occur</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="result-footer">
          <button className="try-again-button" onClick={onClose}>
            Try Another Reaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;