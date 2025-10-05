// Mock data for chemistry elements and reactions
// TODO: Replace with real chemistry database or AI-powered system
// Future integration points:
// 1. Connect to ChemSpider or PubChem API for real chemical data
// 2. Implement AI-powered reaction prediction using ML models
// 3. Add thermodynamic calculations for reaction feasibility
// 4. Include 3D molecular structure visualization

export const initialElements = [
  // Basic Elements (unlocked at start)
  { id: 'H2', symbol: 'H₂', name: 'Hydrogen', type: 'element', group: 'nonmetal', unlocked: true },
  { id: 'O2', symbol: 'O₂', name: 'Oxygen', type: 'element', group: 'nonmetal', unlocked: true },
  { id: 'N2', symbol: 'N₂', name: 'Nitrogen', type: 'element', group: 'nonmetal', unlocked: true },
  { id: 'C', symbol: 'C', name: 'Carbon', type: 'element', group: 'nonmetal', unlocked: true },
  
  // Metals (unlocked at start)
  { id: 'Na', symbol: 'Na', name: 'Sodium', type: 'element', group: 'alkali-metal', unlocked: true },
  { id: 'K', symbol: 'K', name: 'Potassium', type: 'element', group: 'alkali-metal', unlocked: true },
  { id: 'Ca', symbol: 'Ca', name: 'Calcium', type: 'element', group: 'alkaline-earth', unlocked: true },
  { id: 'Mg', symbol: 'Mg', name: 'Magnesium', type: 'element', group: 'alkaline-earth', unlocked: true },
  { id: 'Al', symbol: 'Al', name: 'Aluminum', type: 'element', group: 'metal', unlocked: true },
  { id: 'Fe', symbol: 'Fe', name: 'Iron', type: 'element', group: 'transition-metal', unlocked: true },
  { id: 'Cu', symbol: 'Cu', name: 'Copper', type: 'element', group: 'transition-metal', unlocked: true },
  { id: 'Zn', symbol: 'Zn', name: 'Zinc', type: 'element', group: 'transition-metal', unlocked: true },
  
  // Halogens (unlocked at start)
  { id: 'F2', symbol: 'F₂', name: 'Fluorine', type: 'element', group: 'halogen', unlocked: true },
  { id: 'Cl2', symbol: 'Cl₂', name: 'Chlorine', type: 'element', group: 'halogen', unlocked: true },
  { id: 'Br2', symbol: 'Br₂', name: 'Bromine', type: 'element', group: 'halogen', unlocked: true },
  { id: 'I2', symbol: 'I₂', name: 'Iodine', type: 'element', group: 'halogen', unlocked: true },
  
  // Other important elements
  { id: 'S', symbol: 'S', name: 'Sulfur', type: 'element', group: 'nonmetal', unlocked: true },
  { id: 'P', symbol: 'P', name: 'Phosphorus', type: 'element', group: 'nonmetal', unlocked: true },
  { id: 'Si', symbol: 'Si', name: 'Silicon', type: 'element', group: 'metalloid', unlocked: true },
  // Additional common elements
  { id: 'He', symbol: 'He', name: 'Helium', type: 'element', group: 'noble-gas', unlocked: true },
  { id: 'Ne', symbol: 'Ne', name: 'Neon', type: 'element', group: 'noble-gas', unlocked: false },
  { id: 'Ar', symbol: 'Ar', name: 'Argon', type: 'element', group: 'noble-gas', unlocked: false },
  { id: 'Li', symbol: 'Li', name: 'Lithium', type: 'element', group: 'alkali-metal', unlocked: true },
  { id: 'Be', symbol: 'Be', name: 'Beryllium', type: 'element', group: 'alkaline-earth', unlocked: false },
  { id: 'Ti', symbol: 'Ti', name: 'Titanium', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Cr', symbol: 'Cr', name: 'Chromium', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Mn', symbol: 'Mn', name: 'Manganese', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Co', symbol: 'Co', name: 'Cobalt', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Ag', symbol: 'Ag', name: 'Silver', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Au', symbol: 'Au', name: 'Gold', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Pb', symbol: 'Pb', name: 'Lead', type: 'element', group: 'post-transition-metal', unlocked: false },
  { id: 'Hg', symbol: 'Hg', name: 'Mercury', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Sn', symbol: 'Sn', name: 'Tin', type: 'element', group: 'post-transition-metal', unlocked: false },
  { id: 'B', symbol: 'B', name: 'Boron', type: 'element', group: 'metalloid', unlocked: false },
  // Additional elements for breadth
  { id: 'Sc', symbol: 'Sc', name: 'Scandium', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'V', symbol: 'V', name: 'Vanadium', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Sr', symbol: 'Sr', name: 'Strontium', type: 'element', group: 'alkaline-earth', unlocked: false },
  { id: 'Rb', symbol: 'Rb', name: 'Rubidium', type: 'element', group: 'alkali-metal', unlocked: false },
  { id: 'Cs', symbol: 'Cs', name: 'Cesium', type: 'element', group: 'alkali-metal', unlocked: false },
  { id: 'Pt', symbol: 'Pt', name: 'Platinum', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Pd', symbol: 'Pd', name: 'Palladium', type: 'element', group: 'transition-metal', unlocked: false },
  { id: 'Se', symbol: 'Se', name: 'Selenium', type: 'element', group: 'nonmetal', unlocked: false },
  { id: 'Te', symbol: 'Te', name: 'Tellurium', type: 'element', group: 'metalloid', unlocked: false },
  { id: 'U', symbol: 'U', name: 'Uranium', type: 'element', group: 'actinide', unlocked: false },
  { id: 'Li+', symbol: 'Li⁺', name: 'Lithium Ion', type: 'ion', group: 'ion', unlocked: false }
];


export const compounds = [
  // Basic compounds
  { id: 'H2O', symbol: 'H₂O', name: 'Water', type: 'compound', category: 'molecular', unlocked: false },
  { id: 'CO2', symbol: 'CO₂', name: 'Carbon Dioxide', type: 'compound', category: 'molecular', unlocked: false },
  { id: 'NH3', symbol: 'NH₃', name: 'Ammonia', type: 'compound', category: 'molecular', unlocked: false },
  { id: 'CH4', symbol: 'CH₄', name: 'Methane', type: 'compound', category: 'molecular', unlocked: false },
  { id: 'H2O2', symbol: 'H₂O₂', name: 'Hydrogen Peroxide', type: 'compound', category: 'molecular', unlocked: false },
  
  // Ionic compounds - Salts
  { id: 'NaCl', symbol: 'NaCl', name: 'Sodium Chloride (Salt)', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'KCl', symbol: 'KCl', name: 'Potassium Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'CaCl2', symbol: 'CaCl₂', name: 'Calcium Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'MgCl2', symbol: 'MgCl₂', name: 'Magnesium Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'AlCl3', symbol: 'AlCl₃', name: 'Aluminum Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'FeCl3', symbol: 'FeCl₃', name: 'Iron(III) Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'CuCl2', symbol: 'CuCl₂', name: 'Copper(II) Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'ZnCl2', symbol: 'ZnCl₂', name: 'Zinc Chloride', type: 'compound', category: 'ionic', unlocked: false },
  
  // Fluorides
  { id: 'NaF', symbol: 'NaF', name: 'Sodium Fluoride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'CaF2', symbol: 'CaF₂', name: 'Calcium Fluoride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'AlF3', symbol: 'AlF₃', name: 'Aluminum Fluoride', type: 'compound', category: 'ionic', unlocked: false },
  
  // Bromides and Iodides
  { id: 'NaBr', symbol: 'NaBr', name: 'Sodium Bromide', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'KBr', symbol: 'KBr', name: 'Potassium Bromide', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'NaI', symbol: 'NaI', name: 'Sodium Iodide', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'KI', symbol: 'KI', name: 'Potassium Iodide', type: 'compound', category: 'ionic', unlocked: false },
  
  // Acids
  { id: 'HCl', symbol: 'HCl', name: 'Hydrochloric Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'HF', symbol: 'HF', name: 'Hydrofluoric Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'HBr', symbol: 'HBr', name: 'Hydrobromic Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'HI', symbol: 'HI', name: 'Hydroiodic Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'H2SO4', symbol: 'H₂SO₄', name: 'Sulfuric Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'H3PO4', symbol: 'H₃PO₄', name: 'Phosphoric Acid', type: 'compound', category: 'acid', unlocked: false },
  
  // Oxides
  { id: 'CO', symbol: 'CO', name: 'Carbon Monoxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'SO2', symbol: 'SO₂', name: 'Sulfur Dioxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'SO3', symbol: 'SO₃', name: 'Sulfur Trioxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'Al2O3', symbol: 'Al₂O₃', name: 'Aluminum Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'Fe2O3', symbol: 'Fe₂O₃', name: 'Iron(III) Oxide (Rust)', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'CuO', symbol: 'CuO', name: 'Copper(II) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'ZnO', symbol: 'ZnO', name: 'Zinc Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'SiO2', symbol: 'SiO₂', name: 'Silicon Dioxide (Quartz)', type: 'compound', category: 'oxide', unlocked: false },
  
  // Hydroxides
  { id: 'NaOH', symbol: 'NaOH', name: 'Sodium Hydroxide', type: 'compound', category: 'base', unlocked: false },
  { id: 'KOH', symbol: 'KOH', name: 'Potassium Hydroxide', type: 'compound', category: 'base', unlocked: false },
  { id: 'Ca(OH)2', symbol: 'Ca(OH)₂', name: 'Calcium Hydroxide', type: 'compound', category: 'base', unlocked: false },
  { id: 'Mg(OH)2', symbol: 'Mg(OH)₂', name: 'Magnesium Hydroxide', type: 'compound', category: 'base', unlocked: false },
  // Additional common compounds
  { id: 'H2CO3', symbol: 'H₂CO₃', name: 'Carbonic Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'Na2CO3', symbol: 'Na₂CO₃', name: 'Sodium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CaCO3', symbol: 'CaCO₃', name: 'Calcium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'K2SO4', symbol: 'K₂SO₄', name: 'Potassium Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Na2SO4', symbol: 'Na₂SO₄', name: 'Sodium Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'NaHCO3', symbol: 'NaHCO₃', name: 'Sodium Bicarbonate (Baking Soda)', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CaCO3', symbol: 'CaCO₃', name: 'Calcium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'C2H5OH', symbol: 'C₂H₅OH', name: 'Ethanol', type: 'compound', category: 'organic', unlocked: false },
  { id: 'CH3COOH', symbol: 'CH₃COOH', name: 'Acetic Acid', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H6', symbol: 'C₆H₆', name: 'Benzene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H4', symbol: 'C₂H₄', name: 'Ethylene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H6', symbol: 'C₂H₆', name: 'Ethane', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C3H8', symbol: 'C₃H₈', name: 'Propane', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H12O6', symbol: 'C₆H₁₂O₆', name: 'Glucose', type: 'compound', category: 'organic', unlocked: false },
  { id: 'HNO3', symbol: 'HNO₃', name: 'Nitric Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'KOH', symbol: 'KOH', name: 'Potassium Hydroxide', type: 'compound', category: 'base', unlocked: false },
  { id: 'NH4Cl', symbol: 'NH₄Cl', name: 'Ammonium Chloride', type: 'compound', category: 'salt', unlocked: false },
  { id: 'AgCl', symbol: 'AgCl', name: 'Silver Chloride', type: 'compound', category: 'salt', unlocked: false },
  { id: 'AgNO3', symbol: 'AgNO₃', name: 'Silver Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'PbS', symbol: 'PbS', name: 'Lead(II) Sulfide (Galena)', type: 'compound', category: 'salt', unlocked: false },
  { id: 'FeSO4', symbol: 'FeSO₄', name: 'Iron(II) Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Fe3O4', symbol: 'Fe₃O₄', name: 'Magnetite', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'Na2O', symbol: 'Na₂O', name: 'Sodium Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'K2O', symbol: 'K₂O', name: 'Potassium Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'SO3', symbol: 'SO₃', name: 'Sulfur Trioxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'NO2', symbol: 'NO₂', name: 'Nitrogen Dioxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'N2O', symbol: 'N₂O', name: 'Nitrous Oxide (Laughing Gas)', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'H2S', symbol: 'H₂S', name: 'Hydrogen Sulfide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'NaOH', symbol: 'NaOH', name: 'Sodium Hydroxide', type: 'compound', category: 'base', unlocked: false },
  // More compounds
  { id: 'CH3COONa', symbol: 'CH₃COONa', name: 'Sodium Acetate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CH3COOC2H5', symbol: 'CH₃COOC₂H₅', name: 'Ethyl Acetate', type: 'compound', category: 'organic', unlocked: false },
  { id: 'NaNO3', symbol: 'NaNO₃', name: 'Sodium Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'NH4NO3', symbol: 'NH₄NO₃', name: 'Ammonium Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'O3', symbol: 'O₃', name: 'Ozone', type: 'compound', category: 'molecular', unlocked: false },
  { id: 'C6H5OH', symbol: 'C₆H₅OH', name: 'Phenol', type: 'compound', category: 'organic', unlocked: false },
  { id: 'CH3COCH3', symbol: 'CH₃COCH₃', name: 'Acetone', type: 'compound', category: 'organic', unlocked: false },
  { id: 'CH3CHO', symbol: 'CH₃CHO', name: 'Acetaldehyde', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C3H6', symbol: 'C₃H₆', name: 'Propene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C4H10', symbol: 'C₄H₁₀', name: 'Butane', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H5NO2', symbol: 'C₆H₅NO₂', name: 'Nitrobenzene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'Na2S', symbol: 'Na₂S', name: 'Sodium Sulfide', type: 'compound', category: 'salt', unlocked: false },
  { id: 'H2SO3', symbol: 'H₂SO₃', name: 'Sulfurous Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'ClO2', symbol: 'ClO₂', name: 'Chlorine Dioxide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'HClO4', symbol: 'HClO₄', name: 'Perchloric Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'K2CO3', symbol: 'K₂CO₃', name: 'Potassium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Li2CO3', symbol: 'Li₂CO₃', name: 'Lithium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'PbO', symbol: 'PbO', name: 'Lead(II) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'CuSO4', symbol: 'CuSO₄', name: 'Copper(II) Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'H2CO', symbol: 'H₂CO', name: 'Formaldehyde', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H2', symbol: 'C₂H₂', name: 'Acetylene', type: 'compound', category: 'gas', unlocked: false },
  { id: 'H2S2O8', symbol: 'H₂S₂O₈', name: 'Peroxydisulfate', type: 'compound', category: 'oxidizer', unlocked: false },
];

// Hardcoded reaction rules - TODO: Replace with AI or comprehensive database
export const reactionRules = [
  // Basic synthesis reactions
  {
    id: 'water_formation',
    reactants: ['H2', 'O2'],
    products: ['H2O'],
    equation: '2H₂ + O₂ → 2H₂O',
    explanation: 'Hydrogen gas combines with oxygen gas to form water in a highly exothermic reaction. This is one of the most important chemical reactions.',
    type: 'synthesis',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'ammonia_synthesis',
    reactants: ['N2', 'H2'],
    products: ['NH3'],
    equation: 'N₂ + 3H₂ → 2NH₃',
    explanation: 'The Haber process combines nitrogen and hydrogen to produce ammonia, essential for fertilizers.',
    type: 'synthesis',
    conditions: {
      temperature: 'high',
      pressure: 'high',
      catalyst: 'iron'
    }
  },
  {
    id: 'methane_combustion',
    reactants: ['CH4', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    explanation: 'Methane burns in oxygen to produce carbon dioxide and water, releasing energy.',
    type: 'combustion',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: null
    }
  },
  
  // Halogen reactions with metals
  {
    id: 'sodium_chloride_formation',
    reactants: ['Na', 'Cl2'],
    products: ['NaCl'],
    equation: '2Na + Cl₂ → 2NaCl',
    explanation: 'Sodium metal reacts vigorously with chlorine gas to form sodium chloride (table salt).',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'potassium_chloride_formation',
    reactants: ['K', 'Cl2'],
    products: ['KCl'],
    equation: '2K + Cl₂ → 2KCl',
    explanation: 'Potassium reacts with chlorine to form potassium chloride, similar to sodium but more vigorous.',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'calcium_chloride_formation',
    reactants: ['Ca', 'Cl2'],
    products: ['CaCl2'],
    equation: 'Ca + Cl₂ → CaCl₂',
    explanation: 'Calcium reacts with chlorine to form calcium chloride, used as a drying agent.',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'magnesium_chloride_formation',
    reactants: ['Mg', 'Cl2'],
    products: ['MgCl2'],
    equation: 'Mg + Cl₂ → MgCl₂',
    explanation: 'Magnesium burns in chlorine to form magnesium chloride.',
    type: 'synthesis',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'aluminum_chloride_formation',
    reactants: ['Al', 'Cl2'],
    products: ['AlCl3'],
    equation: '2Al + 3Cl₂ → 2AlCl₃',
    explanation: 'Aluminum reacts with chlorine to form aluminum chloride, used in organic chemistry.',
    type: 'synthesis',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: null
    }
  },
  
  // Fluoride formations
  {
    id: 'sodium_fluoride_formation',
    reactants: ['Na', 'F2'],
    products: ['NaF'],
    equation: '2Na + F₂ → 2NaF',
    explanation: 'Sodium reacts violently with fluorine to form sodium fluoride, used in toothpaste.',
    type: 'synthesis',
    conditions: {
      temperature: 'low',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'calcium_fluoride_formation',
    reactants: ['Ca', 'F2'],
    products: ['CaF2'],
    equation: 'Ca + F₂ → CaF₂',
    explanation: 'Calcium reacts with fluorine to form calcium fluoride (fluorite).',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  },
  
  // Bromide and Iodide formations
  {
    id: 'sodium_bromide_formation',
    reactants: ['Na', 'Br2'],
    products: ['NaBr'],
    equation: '2Na + Br₂ → 2NaBr',
    explanation: 'Sodium reacts with bromine to form sodium bromide.',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'potassium_iodide_formation',
    reactants: ['K', 'I2'],
    products: ['KI'],
    equation: '2K + I₂ → 2KI',
    explanation: 'Potassium reacts with iodine to form potassium iodide, used in medicine.',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  },
  
  // Acid formations
  {
    id: 'hydrochloric_acid_formation',
    reactants: ['H2', 'Cl2'],
    products: ['HCl'],
    equation: 'H₂ + Cl₂ → 2HCl',
    explanation: 'Hydrogen and chlorine gases combine to form hydrochloric acid gas.',
    type: 'synthesis',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'hydrofluoric_acid_formation',
    reactants: ['H2', 'F2'],
    products: ['HF'],
    equation: 'H₂ + F₂ → 2HF',
    explanation: 'Hydrogen and fluorine react explosively to form hydrofluoric acid.',
    type: 'synthesis',
    conditions: {
      temperature: 'low',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'hydrobromic_acid_formation',
    reactants: ['H2', 'Br2'],
    products: ['HBr'],
    equation: 'H₂ + Br₂ → 2HBr',
    explanation: 'Hydrogen and bromine combine to form hydrobromic acid.',
    type: 'synthesis',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: 'platinum'
    }
  },
  
  // Oxide formations
  {
    id: 'carbon_dioxide_formation',
    reactants: ['C', 'O2'],
    products: ['CO2'],
    equation: 'C + O₂ → CO₂',
    explanation: 'Carbon burns in oxygen to produce carbon dioxide gas.',
    type: 'combustion',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'carbon_monoxide_formation',
    reactants: ['C', 'O2'],
    products: ['CO'],
    equation: '2C + O₂ → 2CO',
    explanation: 'Carbon burns in limited oxygen to produce toxic carbon monoxide.',
    type: 'combustion',
    conditions: {
      temperature: 'high',
      pressure: 'low',
      catalyst: null
    }
  },
  {
    id: 'sulfur_dioxide_formation',
    reactants: ['S', 'O2'],
    products: ['SO2'],
    equation: 'S + O₂ → SO₂',
    explanation: 'Sulfur burns in air to form sulfur dioxide, a pollutant gas.',
    type: 'combustion',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'aluminum_oxide_formation',
    reactants: ['Al', 'O2'],
    products: ['Al2O3'],
    equation: '4Al + 3O₂ → 2Al₂O₃',
    explanation: 'Aluminum burns in oxygen to form aluminum oxide (alumina).',
    type: 'synthesis',
    conditions: {
      temperature: 'very_high',
      pressure: 'normal',
      catalyst: null
    }
  },
  {
    id: 'iron_oxide_formation',
    reactants: ['Fe', 'O2'],
    products: ['Fe2O3'],
    equation: '4Fe + 3O₂ → 2Fe₂O₃',
    explanation: 'Iron oxidizes in air to form iron(III) oxide, commonly known as rust.',
    type: 'oxidation',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: 'water'
    }
  },
  
  // Advanced reactions
  {
    id: 'hydrogen_peroxide_formation',
    reactants: ['H2O', 'O2'],
    products: ['H2O2'],
    equation: '2H₂O + O₂ → 2H₂O₂',
    explanation: 'Water can be oxidized with oxygen to form hydrogen peroxide under specific conditions.',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'high',
      catalyst: 'platinum'
    }
  },
  {
    id: 'sulfur_trioxide_formation',
    reactants: ['SO2', 'O2'],
    products: ['SO3'],
    equation: '2SO₂ + O₂ → 2SO₃',
    explanation: 'Sulfur dioxide reacts with oxygen to form sulfur trioxide in the contact process.',
    type: 'synthesis',
    conditions: {
      temperature: 'high',
      pressure: 'normal',
      catalyst: 'vanadium_pentoxide'
    }
  },
  {
    id: 'sulfuric_acid_formation',
    reactants: ['SO3', 'H2O'],
    products: ['H2SO4'],
    equation: 'SO₃ + H₂O → H₂SO₄',
    explanation: 'Sulfur trioxide dissolves in water to form sulfuric acid.',
    type: 'synthesis',
    conditions: {
      temperature: 'medium',
      pressure: 'normal',
      catalyst: null
    }
  }
  ,
  // Additional reaction rules
  {
    id: 'combustion_ethanol',
    reactants: ['C2H5OH', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
    explanation: 'Ethanol combusts in oxygen to produce carbon dioxide and water.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'sodium_bicarbonate_decomposition',
    reactants: ['NaHCO3'],
    products: ['Na2CO3', 'CO2', 'H2O'],
    equation: '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O',
    explanation: 'Heating sodium bicarbonate decomposes it into sodium carbonate, carbon dioxide and water.',
    type: 'decomposition',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'acid_base_neutralization',
    reactants: ['HCl', 'NaOH'],
    products: ['NaCl', 'H2O'],
    equation: 'HCl + NaOH → NaCl + H₂O',
    explanation: 'Strong acid reacts with strong base to form a salt and water.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'saponification',
    reactants: ['CH3COOH', 'NaOH'],
    products: ['CH3COONa', 'H2O'],
    equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
    explanation: 'Acetic acid neutralized by sodium hydroxide to form sodium acetate and water (simple model for saponification).',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'rusting_simple',
    reactants: ['Fe', 'O2', 'H2O'],
    products: ['Fe2O3', 'H2'],
    equation: '4Fe + 3O₂ + xH₂O → 2Fe₂O₃·xH₂O',
    explanation: 'Simplified representation of iron oxidation (rust formation) in presence of water.',
    type: 'oxidation',
    conditions: { temperature: 'medium', pressure: 'normal', catalyst: 'water' }
  },
  {
    id: 'photosynthesis_simple',
    reactants: ['CO2', 'H2O', 'light'],
    products: ['C6H12O6', 'O2'],
    equation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
    explanation: 'Simplified photosynthesis equation (light-driven conversion of carbon dioxide and water into glucose and oxygen).',
    type: 'biochemical',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'light' }
  },
  {
    id: 'esterification_ethanol_acetic',
    reactants: ['C2H5OH', 'CH3COOH'],
    products: ['CH3COOC2H5', 'H2O'],
    equation: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O',
    explanation: 'Acetic acid reacts with ethanol to form ethyl acetate (an ester) and water; reversible reaction, acid-catalyzed.',
    type: 'synthesis',
    conditions: { temperature: 'low', pressure: 'normal', catalyst: 'acid' }
  },
  {
    id: 'silver_chloride_precipitation',
    reactants: ['AgNO3', 'NaCl'],
    products: ['AgCl', 'NaNO3'],
    equation: 'AgNO₃ + NaCl → AgCl(s) + NaNO₃',
    explanation: 'Mixing solutions containing Ag+ and Cl- produces insoluble silver chloride precipitate.',
    type: 'precipitation',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'hydrogenation_ethene',
    reactants: ['C2H4', 'H2'],
    products: ['C2H6'],
    equation: 'C₂H₄ + H₂ → C₂H₆',
    explanation: 'Hydrogenation of ethene to ethane; typically requires a metal catalyst like Pd or Ni.',
    type: 'addition',
    conditions: { temperature: 'medium', pressure: 'elevated', catalyst: 'palladium' }
  },
  {
    id: 'dehydration_ethanol_to_ethylene',
    reactants: ['C2H5OH'],
    products: ['C2H4', 'H2O'],
    equation: 'C₂H₅OH → C₂H₄ + H₂O',
    explanation: 'Dehydration of ethanol to produce ethylene using an acid catalyst (e.g., H₂SO₄).',
    type: 'elimination',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: 'acid' }
  }
  ,
  {
    id: 'propane_combustion',
    reactants: ['C3H8', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    explanation: 'Propane combusts in oxygen producing carbon dioxide and water.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'ammonium_nitrate_formation',
    reactants: ['NH3', 'HNO3'],
    products: ['NH4NO3'],
    equation: 'NH₃ + HNO₃ → NH₄NO₃',
    explanation: 'Neutralization of ammonia with nitric acid forms ammonium nitrate, a common fertilizer.',
    type: 'synthesis',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'sodium_acetate_formation',
    reactants: ['CH3COOH', 'NaOH'],
    products: ['CH3COONa', 'H2O'],
    equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
    explanation: 'Formation of sodium acetate from acetic acid and sodium hydroxide.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'ozone_formation_photochemical',
    reactants: ['O2', 'UV_light'],
    products: ['O3'],
    equation: '3O₂ + UV → 2O₃',
    explanation: 'Photochemical formation of ozone from oxygen under ultraviolet irradiation.',
    type: 'photochemical',
    conditions: { temperature: 'low', pressure: 'normal', catalyst: 'UV_light' }
  },
  {
    id: 'benzene_nitration',
    reactants: ['C6H6', 'HNO3', 'H2SO4'],
    products: ['C6H5NO2', 'H2O'],
    equation: 'C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O',
    explanation: 'Electrophilic aromatic substitution: nitration of benzene to nitrobenzene using nitric and sulfuric acids.',
    type: 'substitution',
    conditions: { temperature: 'low', pressure: 'normal', catalyst: 'H2SO4' }
  },
  {
    id: 'acetylene_hydrogenation_to_ethene',
    reactants: ['C2H2', 'H2'],
    products: ['C2H4'],
    equation: 'C₂H₂ + H₂ → C₂H₄',
    explanation: 'Hydrogenation of acetylene to ethene, typically metal-catalyzed.',
    type: 'addition',
    conditions: { temperature: 'medium', pressure: 'elevated', catalyst: 'nickel' }
  },
  {
    id: 'acetone_oxidation_simple',
    reactants: ['CH3COCH3', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'CH₃COCH₃ + 4O₂ → 3CO₂ + 3H₂O',
    explanation: 'Simplified combustion/oxidation of acetone to carbon dioxide and water.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  }
];

export const conditionOptions = {
  temperature: [
    { value: 'very_low', label: 'Very Low (-100°C to -50°C)', modifier: 0.2, range: '-100 to -50°C' },
    { value: 'freezing', label: 'Freezing (-50°C to 0°C)', modifier: 0.3, range: '-50 to 0°C' },
    { value: 'low', label: 'Low (0°C to 50°C)', modifier: 0.6, range: '0 to 50°C' },
    { value: 'room', label: 'Room Temperature (15°C to 25°C)', modifier: 0.8, range: '15 to 25°C' },
    { value: 'medium', label: 'Medium (50°C to 200°C)', modifier: 1.0, range: '50 to 200°C' },
    { value: 'high', label: 'High (200°C to 500°C)', modifier: 1.4, range: '200 to 500°C' },
    { value: 'very_high', label: 'Very High (500°C to 1000°C)', modifier: 1.8, range: '500 to 1000°C' },
    { value: 'extreme', label: 'Extreme (1000°C+)', modifier: 2.2, range: '1000°C+' }
  ],
  pressure: [
    { value: 'vacuum', label: 'Vacuum (< 0.1 atm)', modifier: 0.4, range: '< 0.1 atm' },
    { value: 'very_low', label: 'Very Low (0.1 - 0.5 atm)', modifier: 0.6, range: '0.1 - 0.5 atm' },
    { value: 'low', label: 'Low Pressure (0.5 - 0.8 atm)', modifier: 0.8, range: '0.5 - 0.8 atm' },
    { value: 'normal', label: 'Atmospheric (1 atm)', modifier: 1.0, range: '1 atm' },
    { value: 'elevated', label: 'Elevated (1 - 5 atm)', modifier: 1.1, range: '1 - 5 atm' },
    { value: 'high', label: 'High Pressure (5 - 20 atm)', modifier: 1.3, range: '5 - 20 atm' },
    { value: 'very_high', label: 'Very High (20 - 100 atm)', modifier: 1.6, range: '20 - 100 atm' },
    { value: 'extreme', label: 'Extreme (100+ atm)', modifier: 2.0, range: '100+ atm' }
  ],
  catalyst: [
    { value: 'none', label: 'No Catalyst', modifier: 1.0, description: 'Reaction proceeds without catalytic assistance' },
    { value: 'heat', label: 'Heat Only', modifier: 1.1, description: 'Thermal energy provides activation' },
    { value: 'light', label: 'Light/UV', modifier: 1.2, description: 'Photochemical activation' },
    { value: 'platinum', label: 'Platinum (Pt)', modifier: 2.0, description: 'Noble metal catalyst for hydrogenation' },
    { value: 'palladium', label: 'Palladium (Pd)', modifier: 1.9, description: 'Transition metal for coupling reactions' },
    { value: 'iron', label: 'Iron (Fe)', modifier: 1.5, description: 'Used in Haber process for ammonia' },
    { value: 'nickel', label: 'Nickel (Ni)', modifier: 1.6, description: 'Hydrogenation and methanation catalyst' },
    { value: 'vanadium_pentoxide', label: 'Vanadium Pentoxide (V₂O₅)', modifier: 1.8, description: 'Contact process for sulfuric acid' },
    { value: 'aluminum_oxide', label: 'Aluminum Oxide (Al₂O₃)', modifier: 1.3, description: 'Solid acid catalyst' },
    { value: 'zeolite', label: 'Zeolite', modifier: 1.7, description: 'Microporous aluminosilicate catalyst' },
    { value: 'enzyme', label: 'Enzyme (Biological)', modifier: 2.5, description: 'Highly specific biological catalyst' },
    { value: 'acid', label: 'Acid Catalyst (H⁺)', modifier: 1.4, description: 'Proton donor for acid-catalyzed reactions' },
    { value: 'base', label: 'Base Catalyst (OH⁻)', modifier: 1.4, description: 'Proton acceptor for base-catalyzed reactions' },
    { value: 'water', label: 'Water (H₂O)', modifier: 1.2, description: 'Facilitates hydrolysis and oxidation' },
    { value: 'electricity', label: 'Electric Current', modifier: 1.8, description: 'Electrochemical activation' }
  ],
  environment: [
    { value: 'air', label: 'Open Air', modifier: 1.0, description: 'Standard atmospheric conditions' },
    { value: 'inert', label: 'Inert Atmosphere (N₂/Ar)', modifier: 1.1, description: 'Prevents unwanted oxidation' },
    { value: 'oxygen_rich', label: 'Oxygen-Rich', modifier: 1.3, description: 'Promotes combustion and oxidation' },
    { value: 'hydrogen_rich', label: 'Hydrogen Atmosphere', modifier: 1.2, description: 'Reducing environment' },
    { value: 'dry', label: 'Anhydrous (Dry)', modifier: 1.1, description: 'Moisture-free conditions' },
    { value: 'aqueous', label: 'Aqueous Solution', modifier: 1.2, description: 'Water-based reaction medium' },
    { value: 'organic_solvent', label: 'Organic Solvent', modifier: 1.1, description: 'Non-polar reaction medium' }
  ]
};