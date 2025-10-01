import React from 'react';
import '../styles/ConditionsPanel.css';

const ConditionsPanel = ({ 
  conditions, 
  onConditionChange, 
  conditionOptions, 
  autoDiscovery, 
  onAutoDiscoveryToggle 
}) => {
  return (
    <div className="conditions-panel">
      <div className="conditions-header">
        <h3 className="conditions-title">Reaction Conditions</h3>
        <div className="auto-discovery-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={autoDiscovery}
              onChange={(e) => onAutoDiscoveryToggle(e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">
              {autoDiscovery ? '🔍 Auto-Discovery Mode' : '⚙️ Precise Conditions'}
            </span>
          </label>
        </div>
      </div>
      
      <div className="discovery-mode-info">
        {autoDiscovery ? (
          <div className="info-card discovery">
            <p>🧪 <strong>Auto-Discovery Mode:</strong> Explore what compounds can be formed without worrying about specific conditions!</p>
          </div>
        ) : (
          <div className="info-card precise">
            <p>⚗️ <strong>Precise Mode:</strong> Set exact conditions to simulate realistic chemical reactions.</p>
          </div>
        )}
      </div>
      
      <div className={`conditions-controls ${autoDiscovery ? 'disabled' : ''}`}>
        <div className="condition-group">
          <label className="condition-label">
            🌡️ Temperature
          </label>
          <select 
            className="condition-select temperature"
            value={conditions.temperature}
            onChange={(e) => onConditionChange('temperature', e.target.value)}
            disabled={autoDiscovery}
            title={autoDiscovery ? 'Disabled in auto-discovery mode' : `Current: ${conditionOptions.temperature.find(opt => opt.value === conditions.temperature)?.range || 'Unknown'}`}
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
            disabled={autoDiscovery}
            title={autoDiscovery ? 'Disabled in auto-discovery mode' : `Current: ${conditionOptions.pressure.find(opt => opt.value === conditions.pressure)?.range || 'Unknown'}`}
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
            disabled={autoDiscovery}
            title={autoDiscovery ? 'Disabled in auto-discovery mode' : (conditionOptions.catalyst.find(opt => opt.value === conditions.catalyst)?.description || 'No description')}
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
            disabled={autoDiscovery}
            title={autoDiscovery ? 'Disabled in auto-discovery mode' : (conditionOptions.environment?.find(opt => opt.value === (conditions.environment || 'air'))?.description || 'Standard conditions')}
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
      </div>

      <div className={`conditions-summary ${autoDiscovery ? 'discovery-mode' : ''}`}>
        {autoDiscovery ? (
          <div className="discovery-summary">
            <h4>🔍 Discovery Mode Active</h4>
            <p>Conditions will be automatically optimized to find possible reactions!</p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div className="conditions-help">
        <h4>💡 Tips:</h4>
        <ul>
          {autoDiscovery ? (
            <>
              <li>In discovery mode, any possible reaction will succeed</li>
              <li>Perfect for exploring chemical combinations</li>
              <li>Switch to precise mode for realistic conditions</li>
              <li>Great for learning what compounds can be formed!</li>
            </>
          ) : (
            <>
              <li>Different reactions require specific conditions</li>
              <li>Catalysts can dramatically speed up reactions</li>
              <li>Temperature and pressure affect reaction rates</li>
              <li>Some reactions only work in specific environments</li>
              <li>Experiment with different combinations!</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ConditionsPanel;