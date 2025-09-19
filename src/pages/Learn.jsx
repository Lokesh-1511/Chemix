import React, { useState } from 'react';
import ElementList from '../components/ElementList.jsx';
import ReactionZone from '../components/ReactionZone.jsx';
import ConditionsPanel from '../components/ConditionsPanel.jsx';
import ResultCard from '../components/ResultCard.jsx';
import { reactionRules, conditionOptions } from '../data/chemistryData';
import '../styles/Learn.css';

const Learn = ({ availableElements, unlockCompound }) => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [reactionResult, setReactionResult] = useState(null);
  const [conditions, setConditions] = useState({
    temperature: 'medium',
    pressure: 'normal',
    catalyst: 'none'
  });

  const handleConditionChange = (conditionType, value) => {
    setConditions(prev => ({
      ...prev,
      [conditionType]: value
    }));
  };

  const processReaction = (elements) => {
    // TODO: Replace with AI-powered reaction prediction system
    // Future improvements:
    // 1. Use machine learning models for reaction prediction
    // 2. Connect to real chemistry databases (ChemSpider, PubChem)
    // 3. Add thermodynamic feasibility calculations
    // 4. Include reaction kinetics and mechanism details
    const reactantIds = elements.map(el => el.id).sort();
    
    // Find matching reaction rule
    const matchingRule = reactionRules.find(rule => {
      const ruleReactants = rule.reactants.sort();
      return JSON.stringify(reactantIds) === JSON.stringify(ruleReactants);
    });

    if (matchingRule) {
      // Check if conditions are appropriate for this reaction
      const conditionSuccess = checkReactionConditions(matchingRule, conditions);
      
      if (conditionSuccess) {
        // Find the products in our available elements
        const products = matchingRule.products.map(productId => 
          availableElements.find(el => el.id === productId)
        ).filter(Boolean);

        // Unlock new compounds
        const newlyUnlocked = [];
        products.forEach(product => {
          if (!product.unlocked) {
            unlockCompound(product.id);
            newlyUnlocked.push(product);
          }
        });

        setReactionResult({
          success: true,
          equation: matchingRule.equation,
          explanation: matchingRule.explanation,
          conditions: conditions,
          newCompounds: newlyUnlocked,
          products: products
        });
      } else {
        setReactionResult({
          success: false,
          reason: `This reaction requires ${matchingRule.conditions.temperature} temperature${matchingRule.conditions.catalyst ? ` and ${matchingRule.conditions.catalyst} catalyst` : ''}.`,
          conditions: conditions
        });
      }
    } else {
      setReactionResult({
        success: false,
        reason: 'These elements do not react under current conditions. Try different combinations!',
        conditions: conditions
      });
    }

    // Clear the reaction zone after processing
    setSelectedElements([]);
  };

  // TODO: Replace with more sophisticated condition checking
  const checkReactionConditions = (rule, currentConditions) => {
    // Simple condition checking - can be made more complex
    if (rule.conditions.temperature && rule.conditions.temperature !== currentConditions.temperature) {
      // Allow some flexibility in temperature requirements
      const tempOrder = ['freezing', 'low', 'medium', 'high'];
      const requiredIndex = tempOrder.indexOf(rule.conditions.temperature);
      const currentIndex = tempOrder.indexOf(currentConditions.temperature);
      
      if (Math.abs(currentIndex - requiredIndex) > 1) {
        return false;
      }
    }

    if (rule.conditions.catalyst && rule.conditions.catalyst !== currentConditions.catalyst) {
      return false;
    }

    return true;
  };

  const closeResult = () => {
    setReactionResult(null);
  };

  return (
    <div className="learn-page">
      <div className="learn-header">
        <h1 className="page-title">Chemistry Laboratory</h1>
        <p className="page-subtitle">
          Drag elements to the reaction zone and experiment with different conditions!
        </p>
      </div>

      <div className="learn-content">
        <div className="left-panel">
          <ElementList 
            elements={availableElements}
            onDragStart={(element) => console.log('Dragging:', element.name)}
          />
        </div>

        <div className="center-panel">
          <ReactionZone 
            onReaction={processReaction}
            selectedElements={selectedElements}
            setSelectedElements={setSelectedElements}
          />
        </div>

        <div className="right-panel">
          <ConditionsPanel 
            conditions={conditions}
            onConditionChange={handleConditionChange}
            conditionOptions={conditionOptions}
          />
        </div>
      </div>

      <div className="learn-stats">
        <div className="stat-card">
          <div className="stat-number">{availableElements.filter(el => el.unlocked).length}</div>
          <div className="stat-label">Unlocked</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{availableElements.filter(el => !el.unlocked).length}</div>
          <div className="stat-label">To Discover</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{reactionRules.length}</div>
          <div className="stat-label">Known Reactions</div>
        </div>
      </div>

      {reactionResult && (
        <ResultCard 
          reaction={reactionResult}
          onClose={closeResult}
        />
      )}
    </div>
  );
};

export default Learn;