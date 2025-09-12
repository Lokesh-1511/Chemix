import React from 'react';
import '../styles/ConditionsPanel.css';

const ConditionsPanel = ({ conditions, onConditionChange, conditionOptions }) => {
  return (
    <div className="conditions-panel">
      <h3 className="conditions-title">Reaction Conditions</h3>
      
      <div className="condition-group">
        <label className="condition-label">
          🌡️ Temperature
        </label>
        <select 
          className="condition-select"
          value={conditions.temperature}
          onChange={(e) => onConditionChange('temperature', e.target.value)}
        >
          {conditionOptions.temperature.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="condition-group">
        <label className="condition-label">
          🗜️ Pressure
        </label>
        <select 
          className="condition-select"
          value={conditions.pressure}
          onChange={(e) => onConditionChange('pressure', e.target.value)}
        >
          {conditionOptions.pressure.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="condition-group">
        <label className="condition-label">
          ⚗️ Catalyst
        </label>
        <select 
          className="condition-select"
          value={conditions.catalyst}
          onChange={(e) => onConditionChange('catalyst', e.target.value)}
        >
          {conditionOptions.catalyst.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="conditions-info">
        <small>
          Conditions affect reaction success rate and products formed. 
          Experiment with different combinations!
        </small>
      </div>
    </div>
  );
};

export default ConditionsPanel;