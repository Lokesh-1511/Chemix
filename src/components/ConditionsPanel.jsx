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
          className="condition-select temperature"
          value={conditions.temperature}
          onChange={(e) => onConditionChange('temperature', e.target.value)}
          title={`Current: ${conditionOptions.temperature.find(opt => opt.value === conditions.temperature)?.range || 'Unknown'}`}
        >
          {conditionOptions.temperature.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="condition-info">
          <small>
            {conditionOptions.temperature.find(opt => opt.value === conditions.temperature)?.range}
          </small>
        </div>
      </div>

      <div className="condition-group">
        <label className="condition-label">
          🗜️ Pressure
        </label>
        <select 
          className="condition-select pressure"
          value={conditions.pressure}
          onChange={(e) => onConditionChange('pressure', e.target.value)}
          title={`Current: ${conditionOptions.pressure.find(opt => opt.value === conditions.pressure)?.range || 'Unknown'}`}
        >
          {conditionOptions.pressure.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="condition-info">
          <small>
            {conditionOptions.pressure.find(opt => opt.value === conditions.pressure)?.range}
          </small>
        </div>
      </div>

      <div className="condition-group">
        <label className="condition-label">
          ⚗️ Catalyst
        </label>
        <select 
          className="condition-select catalyst"
          value={conditions.catalyst}
          onChange={(e) => onConditionChange('catalyst', e.target.value)}
          title={conditionOptions.catalyst.find(opt => opt.value === conditions.catalyst)?.description || 'No description'}
        >
          {conditionOptions.catalyst.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="condition-info">
          <small>
            {conditionOptions.catalyst.find(opt => opt.value === conditions.catalyst)?.description}
          </small>
        </div>
      </div>

      <div className="condition-group">
        <label className="condition-label">
          🌍 Environment
        </label>
        <select 
          className="condition-select environment"
          value={conditions.environment || 'air'}
          onChange={(e) => onConditionChange('environment', e.target.value)}
          title={conditionOptions.environment?.find(opt => opt.value === (conditions.environment || 'air'))?.description || 'Standard conditions'}
        >
          {conditionOptions.environment?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="condition-info">
          <small>
            {conditionOptions.environment?.find(opt => opt.value === (conditions.environment || 'air'))?.description}
          </small>
        </div>
      </div>

      <div className="conditions-summary">
        <h4>Current Setup:</h4>
        <div className="summary-tags">
          <span className="summary-tag temperature">
            🌡️ {conditionOptions.temperature.find(opt => opt.value === conditions.temperature)?.label.split(' (')[0]}
          </span>
          <span className="summary-tag pressure">
            🗜️ {conditionOptions.pressure.find(opt => opt.value === conditions.pressure)?.label.split(' (')[0]}
          </span>
          <span className="summary-tag catalyst">
            ⚗️ {conditionOptions.catalyst.find(opt => opt.value === conditions.catalyst)?.label.split(' (')[0]}
          </span>
          <span className="summary-tag environment">
            🌍 {conditionOptions.environment?.find(opt => opt.value === (conditions.environment || 'air'))?.label.split(' (')[0] || 'Air'}
          </span>
        </div>
      </div>

      <div className="conditions-help">
        <h4>💡 Tips:</h4>
        <ul>
          <li>Different reactions require specific conditions</li>
          <li>Catalysts can dramatically speed up reactions</li>
          <li>Temperature and pressure affect reaction rates</li>
          <li>Some reactions only work in specific environments</li>
          <li>Experiment with different combinations!</li>
        </ul>
      </div>
    </div>
  );
};

export default ConditionsPanel;