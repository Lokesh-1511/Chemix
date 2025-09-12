// Mock data for chemistry elements and reactions
// TODO: Replace with real chemistry database or AI-powered system

export const initialElements = [
  { id: 'H2', symbol: 'H₂', name: 'Hydrogen', type: 'element', unlocked: true },
  { id: 'O2', symbol: 'O₂', name: 'Oxygen', type: 'element', unlocked: true },
  { id: 'Na', symbol: 'Na', name: 'Sodium', type: 'element', unlocked: true },
  { id: 'Cl2', symbol: 'Cl₂', name: 'Chlorine', type: 'element', unlocked: true },
  { id: 'C', symbol: 'C', name: 'Carbon', type: 'element', unlocked: true },
];

export const compounds = [
  { id: 'H2O', symbol: 'H₂O', name: 'Water', type: 'compound', unlocked: false },
  { id: 'NaCl', symbol: 'NaCl', name: 'Salt', type: 'compound', unlocked: false },
  { id: 'HCl', symbol: 'HCl', name: 'Hydrochloric Acid', type: 'compound', unlocked: false },
  { id: 'CO2', symbol: 'CO₂', name: 'Carbon Dioxide', type: 'compound', unlocked: false },
  { id: 'H2O2', symbol: 'H₂O₂', name: 'Hydrogen Peroxide', type: 'compound', unlocked: false },
];

// Hardcoded reaction rules - TODO: Replace with AI or comprehensive database
export const reactionRules = [
  {
    id: 'water_formation',
    reactants: ['H2', 'O2'],
    products: ['H2O'],
    equation: '2H₂ + O₂ → 2H₂O',
    explanation: 'Hydrogen gas combines with oxygen gas to form water in a highly exothermic reaction.',
    conditions: {
      temperature: 'high', // Requires high temperature or spark
      catalyst: null
    }
  },
  {
    id: 'salt_formation',
    reactants: ['Na', 'Cl2'],
    products: ['NaCl'],
    equation: '2Na + Cl₂ → 2NaCl',
    explanation: 'Sodium metal reacts vigorously with chlorine gas to form sodium chloride (table salt).',
    conditions: {
      temperature: 'medium',
      catalyst: null
    }
  },
  {
    id: 'hydrochloric_acid',
    reactants: ['H2', 'Cl2'],
    products: ['HCl'],
    equation: 'H₂ + Cl₂ → 2HCl',
    explanation: 'Hydrogen and chlorine gases combine to form hydrochloric acid gas.',
    conditions: {
      temperature: 'high',
      catalyst: null
    }
  },
  {
    id: 'carbon_dioxide',
    reactants: ['C', 'O2'],
    products: ['CO2'],
    equation: 'C + O₂ → CO₂',
    explanation: 'Carbon burns in oxygen to produce carbon dioxide gas.',
    conditions: {
      temperature: 'high',
      catalyst: null
    }
  },
  {
    id: 'hydrogen_peroxide',
    reactants: ['H2O', 'O2'],
    products: ['H2O2'],
    equation: '2H₂O + O₂ → 2H₂O₂',
    explanation: 'Water can be oxidized with oxygen to form hydrogen peroxide under specific conditions.',
    conditions: {
      temperature: 'medium',
      catalyst: 'platinum'
    }
  }
];

export const conditionOptions = {
  temperature: [
    { value: 'freezing', label: 'Freezing (< 0°C)', modifier: 0.5 },
    { value: 'low', label: 'Low (0-25°C)', modifier: 0.7 },
    { value: 'medium', label: 'Medium (25-100°C)', modifier: 1.0 },
    { value: 'high', label: 'High (> 100°C)', modifier: 1.5 }
  ],
  pressure: [
    { value: 'low', label: 'Low Pressure', modifier: 0.8 },
    { value: 'normal', label: 'Normal Pressure', modifier: 1.0 },
    { value: 'high', label: 'High Pressure', modifier: 1.2 }
  ],
  catalyst: [
    { value: 'none', label: 'No Catalyst', modifier: 1.0 },
    { value: 'platinum', label: 'Platinum', modifier: 2.0 },
    { value: 'enzyme', label: 'Enzyme (placeholder)', modifier: 1.5 }
  ]
};