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
    { id: 'HClO', symbol: 'HClO', name: 'Hypochlorous Acid', type: 'compound', category: 'acid', unlocked: false },
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
  // Additional transition/lanthanide elements and nickel
  ,{ id: 'Ni', symbol: 'Ni', name: 'Nickel', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'La', symbol: 'La', name: 'Lanthanum', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Ce', symbol: 'Ce', name: 'Cerium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Nd', symbol: 'Nd', name: 'Neodymium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Sm', symbol: 'Sm', name: 'Samarium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Eu', symbol: 'Eu', name: 'Europium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Gd', symbol: 'Gd', name: 'Gadolinium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Tb', symbol: 'Tb', name: 'Terbium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Dy', symbol: 'Dy', name: 'Dysprosium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Ho', symbol: 'Ho', name: 'Holmium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Er', symbol: 'Er', name: 'Erbium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Tm', symbol: 'Tm', name: 'Thulium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Yb', symbol: 'Yb', name: 'Ytterbium', type: 'element', group: 'lanthanide', unlocked: false }
  ,{ id: 'Lu', symbol: 'Lu', name: 'Lutetium', type: 'element', group: 'lanthanide', unlocked: false }
  
  // Additional elements to complete periodic table coverage
  ,{ id: 'Y', symbol: 'Y', name: 'Yttrium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Zr', symbol: 'Zr', name: 'Zirconium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Nb', symbol: 'Nb', name: 'Niobium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Mo', symbol: 'Mo', name: 'Molybdenum', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Tc', symbol: 'Tc', name: 'Technetium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Ru', symbol: 'Ru', name: 'Ruthenium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Rh', symbol: 'Rh', name: 'Rhodium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Cd', symbol: 'Cd', name: 'Cadmium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'In', symbol: 'In', name: 'Indium', type: 'element', group: 'post-transition-metal', unlocked: false }
  ,{ id: 'Sb', symbol: 'Sb', name: 'Antimony', type: 'element', group: 'metalloid', unlocked: false }
  ,{ id: 'Ba', symbol: 'Ba', name: 'Barium', type: 'element', group: 'alkaline-earth', unlocked: false }
  ,{ id: 'W', symbol: 'W', name: 'Tungsten', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Re', symbol: 'Re', name: 'Rhenium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Os', symbol: 'Os', name: 'Osmium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Ir', symbol: 'Ir', name: 'Iridium', type: 'element', group: 'transition-metal', unlocked: false }
  ,{ id: 'Tl', symbol: 'Tl', name: 'Thallium', type: 'element', group: 'post-transition-metal', unlocked: false }
  ,{ id: 'Bi', symbol: 'Bi', name: 'Bismuth', type: 'element', group: 'post-transition-metal', unlocked: false }
  ,{ id: 'Po', symbol: 'Po', name: 'Polonium', type: 'element', group: 'metalloid', unlocked: false }
  ,{ id: 'At', symbol: 'At', name: 'Astatine', type: 'element', group: 'halogen', unlocked: false }
  ,{ id: 'Rn', symbol: 'Rn', name: 'Radon', type: 'element', group: 'noble-gas', unlocked: false }
  ,{ id: 'Fr', symbol: 'Fr', name: 'Francium', type: 'element', group: 'alkali-metal', unlocked: false }
  ,{ id: 'Ra', symbol: 'Ra', name: 'Radium', type: 'element', group: 'alkaline-earth', unlocked: false }
  
  // Actinides
  ,{ id: 'Ac', symbol: 'Ac', name: 'Actinium', type: 'element', group: 'actinide', unlocked: false }
  ,{ id: 'Th', symbol: 'Th', name: 'Thorium', type: 'element', group: 'actinide', unlocked: false }
  ,{ id: 'Pa', symbol: 'Pa', name: 'Protactinium', type: 'element', group: 'actinide', unlocked: false }
  ,{ id: 'Np', symbol: 'Np', name: 'Neptunium', type: 'element', group: 'actinide', unlocked: false }
  ,{ id: 'Pu', symbol: 'Pu', name: 'Plutonium', type: 'element', group: 'actinide', unlocked: false }
  ,{ id: 'Am', symbol: 'Am', name: 'Americium', type: 'element', group: 'actinide', unlocked: false }
  ,{ id: 'Cm', symbol: 'Cm', name: 'Curium', type: 'element', group: 'actinide', unlocked: false }
  
  // Additional ions
  ,{ id: 'Na+', symbol: 'Na⁺', name: 'Sodium Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'K+', symbol: 'K⁺', name: 'Potassium Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Ca2+', symbol: 'Ca²⁺', name: 'Calcium Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Mg2+', symbol: 'Mg²⁺', name: 'Magnesium Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Fe2+', symbol: 'Fe²⁺', name: 'Iron(II) Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Fe3+', symbol: 'Fe³⁺', name: 'Iron(III) Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Cu+', symbol: 'Cu⁺', name: 'Copper(I) Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Cu2+', symbol: 'Cu²⁺', name: 'Copper(II) Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Zn2+', symbol: 'Zn²⁺', name: 'Zinc Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Ag+', symbol: 'Ag⁺', name: 'Silver Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Al3+', symbol: 'Al³⁺', name: 'Aluminum Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Cl-', symbol: 'Cl⁻', name: 'Chloride Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'Br-', symbol: 'Br⁻', name: 'Bromide Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'I-', symbol: 'I⁻', name: 'Iodide Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'OH-', symbol: 'OH⁻', name: 'Hydroxide Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'SO42-', symbol: 'SO₄²⁻', name: 'Sulfate Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'NO3-', symbol: 'NO₃⁻', name: 'Nitrate Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'CO32-', symbol: 'CO₃²⁻', name: 'Carbonate Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'PO43-', symbol: 'PO₄³⁻', name: 'Phosphate Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'NH4+', symbol: 'NH₄⁺', name: 'Ammonium Ion', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'H+', symbol: 'H⁺', name: 'Hydrogen Ion (Proton)', type: 'ion', group: 'ion', unlocked: false }
  ,{ id: 'H3O+', symbol: 'H₃O⁺', name: 'Hydronium Ion', type: 'ion', group: 'ion', unlocked: false }
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
  // Industrial salts, oxidizers, minerals, and battery materials
  { id: 'NaClO', symbol: 'NaClO', name: 'Sodium Hypochlorite', type: 'compound', category: 'oxidizer', unlocked: false },
  { id: 'NaClO3', symbol: 'NaClO₃', name: 'Sodium Chlorate', type: 'compound', category: 'oxidizer', unlocked: false },
  { id: 'NaClO4', symbol: 'NaClO₄', name: 'Sodium Perchlorate', type: 'compound', category: 'oxidizer', unlocked: false },
  { id: 'KNO3', symbol: 'KNO₃', name: 'Potassium Nitrate (Saltpeter)', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Al2(SO4)3', symbol: 'Al₂(SO₄)₃', name: 'Aluminium Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CaSO4', symbol: 'CaSO₄', name: 'Calcium Sulfate (Anhydrite/Plaster of Paris)', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CaSO4_2H2O', symbol: 'CaSO₄·2H₂O', name: 'Gypsum (Calcium Sulfate Dihydrate)', type: 'compound', category: 'mineral', unlocked: false },
  { id: 'LiCoO2', symbol: 'LiCoO₂', name: 'Lithium Cobalt Oxide', type: 'compound', category: 'battery', unlocked: false },
  { id: 'LiFePO4', symbol: 'LiFePO₄', name: 'Lithium Iron Phosphate', type: 'compound', category: 'battery', unlocked: false },
  { id: 'C_graphite', symbol: 'C', name: 'Graphite (Carbon)', type: 'compound', category: 'material', unlocked: false },
  { id: 'LiPF6', symbol: 'LiPF₆', name: 'Lithium Hexafluorophosphate (electrolyte salt)', type: 'compound', category: 'electrolyte', unlocked: false },
  { id: 'Na2CO3_2H2O', symbol: 'Na₂CO₃·2H₂O', name: 'Sodium Carbonate Decahydrate (trona-like)', type: 'compound', category: 'salt', unlocked: false },
  { id: 'K2SO4_2H2O', symbol: 'K₂SO₄·2H₂O', name: 'Potassium Sulfate Hydrate', type: 'compound', category: 'salt', unlocked: false },
  // --- Extended set (advanced, industrial, environmental, energy, coordination, organics) ---
  { id: 'HNO2', symbol: 'HNO₂', name: 'Nitrous Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'NO', symbol: 'NO', name: 'Nitric Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'FeCl2', symbol: 'FeCl₂', name: 'Iron(II) Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'Cu2O', symbol: 'Cu₂O', name: 'Copper(I) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'KMnO4', symbol: 'KMnO₄', name: 'Potassium Permanganate', type: 'compound', category: 'oxidizer', unlocked: false },
  { id: 'K2Cr2O7', symbol: 'K₂Cr₂O₇', name: 'Potassium Dichromate', type: 'compound', category: 'oxidizer', unlocked: false },
  { id: 'CuSO4_5H2O', symbol: 'CuSO₄·5H₂O', name: 'Copper(II) Sulfate Pentahydrate', type: 'compound', category: 'hydrate', unlocked: false },
  { id: 'Na2S2O3', symbol: 'Na₂S₂O₃', name: 'Sodium Thiosulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'NaHSO4', symbol: 'NaHSO₄', name: 'Sodium Bisulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'NaNO2', symbol: 'NaNO₂', name: 'Sodium Nitrite', type: 'compound', category: 'salt', unlocked: false },
  { id: 'HClO3', symbol: 'HClO₃', name: 'Chloric Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'HClO2', symbol: 'HClO₂', name: 'Chlorous Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'H2C2O4', symbol: 'H₂C₂O₄', name: 'Oxalic Acid', type: 'compound', category: 'acid', unlocked: false },
  { id: 'SF6', symbol: 'SF₆', name: 'Sulfur Hexafluoride', type: 'compound', category: 'gas', unlocked: false },
  { id: 'CF4', symbol: 'CF₄', name: 'Carbon Tetrafluoride', type: 'compound', category: 'gas', unlocked: false },
  { id: 'C2H2F4', symbol: 'C₂H₂F₄', name: '1,1,1,2-Tetrafluoroethane (HFC-134a)', type: 'compound', category: 'gas', unlocked: false },
  { id: 'Li2O', symbol: 'Li₂O', name: 'Lithium Oxide', type: 'compound', category: 'battery', unlocked: false },
  { id: 'Li2S', symbol: 'Li₂S', name: 'Lithium Sulfide', type: 'compound', category: 'battery', unlocked: false },
  { id: 'LiMn2O4', symbol: 'LiMn₂O₄', name: 'Lithium Manganese Oxide (Spinel)', type: 'compound', category: 'battery', unlocked: false },
  { id: 'LiNiO2', symbol: 'LiNiO₂', name: 'Lithium Nickel Oxide', type: 'compound', category: 'battery', unlocked: false },
  { id: 'LiNiMnCoO2', symbol: 'LiNiMnCoO₂', name: 'Lithium Nickel Manganese Cobalt Oxide (NMC)', type: 'compound', category: 'battery', unlocked: false },
  { id: '(NH4)2SO4', symbol: '(NH₄)₂SO₄', name: 'Ammonium Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'K3PO4', symbol: 'K₃PO₄', name: 'Potassium Phosphate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'C7H8', symbol: 'C₇H₈', name: 'Toluene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H5OC2H5', symbol: 'C₂H₅OC₂H₅', name: 'Diethyl Ether', type: 'compound', category: 'organic', unlocked: false },
  { id: 'SiH4', symbol: 'SiH₄', name: 'Silane', type: 'compound', category: 'gas', unlocked: false },
  { id: 'NH2CONH2', symbol: 'NH₂CONH₂', name: 'Urea', type: 'compound', category: 'organic', unlocked: false },
  { id: 'OH_radical', symbol: '•OH', name: 'Hydroxyl Radical', type: 'compound', category: 'radical', unlocked: false },
  { id: 'NO3_radical', symbol: 'NO₃•', name: 'Nitrate Radical', type: 'compound', category: 'radical', unlocked: false },
  { id: 'H2Se', symbol: 'H₂Se', name: 'Hydrogen Selenide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'Li2CO3', symbol: 'Li₂CO₃', name: 'Lithium Carbonate', type: 'compound', category: 'salt', unlocked: false }, // duplicate safe guard override if existed
  { id: 'PE', symbol: '(C₂H₄)ₙ', name: 'Polyethylene (repeat unit)', type: 'compound', category: 'polymer', unlocked: false },
  { id: 'PP', symbol: '(C₃H₆)ₙ', name: 'Polypropylene (repeat unit)', type: 'compound', category: 'polymer', unlocked: false },
  
  // Additional Inorganic Compounds
  { id: 'BaCl2', symbol: 'BaCl₂', name: 'Barium Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'BaSO4', symbol: 'BaSO₄', name: 'Barium Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'MgSO4', symbol: 'MgSO₄', name: 'Magnesium Sulfate (Epsom Salt)', type: 'compound', category: 'salt', unlocked: false },
  { id: 'ZnSO4', symbol: 'ZnSO₄', name: 'Zinc Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'NiSO4', symbol: 'NiSO₄', name: 'Nickel(II) Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CoSO4', symbol: 'CoSO₄', name: 'Cobalt(II) Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'MnSO4', symbol: 'MnSO₄', name: 'Manganese(II) Sulfate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CrCl3', symbol: 'CrCl₃', name: 'Chromium(III) Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'TiO2', symbol: 'TiO₂', name: 'Titanium Dioxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'MnO2', symbol: 'MnO₂', name: 'Manganese Dioxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'V2O5', symbol: 'V₂O₅', name: 'Vanadium(V) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'Cr2O3', symbol: 'Cr₂O₃', name: 'Chromium(III) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'NiO', symbol: 'NiO', name: 'Nickel(II) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'CoO', symbol: 'CoO', name: 'Cobalt(II) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'SnO2', symbol: 'SnO₂', name: 'Tin(IV) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'PbO2', symbol: 'PbO₂', name: 'Lead(IV) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'HgO', symbol: 'HgO', name: 'Mercury(II) Oxide', type: 'compound', category: 'oxide', unlocked: false },
  { id: 'Ag2O', symbol: 'Ag₂O', name: 'Silver Oxide', type: 'compound', category: 'oxide', unlocked: false },
  
  // More Halides
  { id: 'AgBr', symbol: 'AgBr', name: 'Silver Bromide', type: 'compound', category: 'salt', unlocked: false },
  { id: 'AgI', symbol: 'AgI', name: 'Silver Iodide', type: 'compound', category: 'salt', unlocked: false },
  { id: 'PbCl2', symbol: 'PbCl₂', name: 'Lead(II) Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'PbBr2', symbol: 'PbBr₂', name: 'Lead(II) Bromide', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'PbI2', symbol: 'PbI₂', name: 'Lead(II) Iodide', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'CuBr2', symbol: 'CuBr₂', name: 'Copper(II) Bromide', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'CuI', symbol: 'CuI', name: 'Copper(I) Iodide', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'HgCl2', symbol: 'HgCl₂', name: 'Mercury(II) Chloride', type: 'compound', category: 'ionic', unlocked: false },
  { id: 'Hg2Cl2', symbol: 'Hg₂Cl₂', name: 'Mercury(I) Chloride (Calomel)', type: 'compound', category: 'ionic', unlocked: false },
  
  // Phosphates and Nitrates
  { id: 'Ca3(PO4)2', symbol: 'Ca₃(PO₄)₂', name: 'Calcium Phosphate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Mg3(PO4)2', symbol: 'Mg₃(PO₄)₂', name: 'Magnesium Phosphate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'AlPO4', symbol: 'AlPO₄', name: 'Aluminum Phosphate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Na3PO4', symbol: 'Na₃PO₄', name: 'Sodium Phosphate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Ca(NO3)2', symbol: 'Ca(NO₃)₂', name: 'Calcium Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Mg(NO3)2', symbol: 'Mg(NO₃)₂', name: 'Magnesium Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Al(NO3)3', symbol: 'Al(NO₃)₃', name: 'Aluminum Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Fe(NO3)3', symbol: 'Fe(NO₃)₃', name: 'Iron(III) Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Cu(NO3)2', symbol: 'Cu(NO₃)₂', name: 'Copper(II) Nitrate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'Pb(NO3)2', symbol: 'Pb(NO₃)₂', name: 'Lead(II) Nitrate', type: 'compound', category: 'salt', unlocked: false },
  
  // Sulfides
  { id: 'FeS', symbol: 'FeS', name: 'Iron(II) Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'FeS2', symbol: 'FeS₂', name: 'Iron Disulfide (Pyrite)', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'ZnS', symbol: 'ZnS', name: 'Zinc Sulfide (Sphalerite)', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'CuS', symbol: 'CuS', name: 'Copper(II) Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'Cu2S', symbol: 'Cu₂S', name: 'Copper(I) Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'Ag2S', symbol: 'Ag₂S', name: 'Silver Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'HgS', symbol: 'HgS', name: 'Mercury(II) Sulfide (Cinnabar)', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'CdS', symbol: 'CdS', name: 'Cadmium Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'NiS', symbol: 'NiS', name: 'Nickel(II) Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'CoS', symbol: 'CoS', name: 'Cobalt(II) Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  { id: 'MnS', symbol: 'MnS', name: 'Manganese(II) Sulfide', type: 'compound', category: 'sulfide', unlocked: false },
  
  // Carbonates
  { id: 'MgCO3', symbol: 'MgCO₃', name: 'Magnesium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'BaCO3', symbol: 'BaCO₃', name: 'Barium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'SrCO3', symbol: 'SrCO₃', name: 'Strontium Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'FeCO3', symbol: 'FeCO₃', name: 'Iron(II) Carbonate (Siderite)', type: 'compound', category: 'salt', unlocked: false },
  { id: 'ZnCO3', symbol: 'ZnCO₃', name: 'Zinc Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'PbCO3', symbol: 'PbCO₃', name: 'Lead(II) Carbonate', type: 'compound', category: 'salt', unlocked: false },
  { id: 'CuCO3', symbol: 'CuCO₃', name: 'Copper(II) Carbonate', type: 'compound', category: 'salt', unlocked: false },
  
  // Organic Compounds - Expanded
  { id: 'CH3OH', symbol: 'CH₃OH', name: 'Methanol', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C3H7OH', symbol: 'C₃H₇OH', name: 'Propanol', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C4H9OH', symbol: 'C₄H₉OH', name: 'Butanol', type: 'compound', category: 'organic', unlocked: false },
  { id: 'HCOOH', symbol: 'HCOOH', name: 'Formic Acid', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C3H6O', symbol: 'C₃H₆O', name: 'Propylene Oxide', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H4O', symbol: 'C₂H₄O', name: 'Ethylene Oxide', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H5CH3', symbol: 'C₆H₅CH₃', name: 'Methylbenzene (Toluene)', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H5Cl', symbol: 'C₆H₅Cl', name: 'Chlorobenzene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H5Br', symbol: 'C₆H₅Br', name: 'Bromobenzene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H5I', symbol: 'C₆H₅I', name: 'Iodobenzene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H5NH2', symbol: 'C₆H₅NH₂', name: 'Aniline', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C10H8', symbol: 'C₁₀H₈', name: 'Naphthalene', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C12H22O11', symbol: 'C₁₂H₂₂O₁₁', name: 'Sucrose (Table Sugar)', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H8O7', symbol: 'C₆H₈O₇', name: 'Citric Acid', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C3H6O3', symbol: 'C₃H₆O₃', name: 'Lactic Acid', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C4H4O4', symbol: 'C₄H₄O₄', name: 'Maleic Acid', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C4H6O4', symbol: 'C₄H₆O₄', name: 'Succinic Acid', type: 'compound', category: 'organic', unlocked: false },
  { id: 'CH2Cl2', symbol: 'CH₂Cl₂', name: 'Dichloromethane', type: 'compound', category: 'organic', unlocked: false },
  { id: 'CHCl3', symbol: 'CHCl₃', name: 'Chloroform', type: 'compound', category: 'organic', unlocked: false },
  { id: 'CCl4', symbol: 'CCl₄', name: 'Carbon Tetrachloride', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H5Cl', symbol: 'C₂H₅Cl', name: 'Ethyl Chloride', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H5Br', symbol: 'C₂H₅Br', name: 'Ethyl Bromide', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C2H5I', symbol: 'C₂H₅I', name: 'Ethyl Iodide', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C5H12', symbol: 'C₅H₁₂', name: 'Pentane', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C6H14', symbol: 'C₆H₁₄', name: 'Hexane', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C7H16', symbol: 'C₇H₁₆', name: 'Heptane', type: 'compound', category: 'organic', unlocked: false },
  { id: 'C8H18', symbol: 'C₈H₁₈', name: 'Octane', type: 'compound', category: 'organic', unlocked: false },
  
  // Complex Coordination Compounds
  { id: '[Fe(CN)6]4-', symbol: '[Fe(CN)₆]⁴⁻', name: 'Ferrocyanide Ion', type: 'compound', category: 'coordination', unlocked: false },
  { id: '[Fe(CN)6]3-', symbol: '[Fe(CN)₆]³⁻', name: 'Ferricyanide Ion', type: 'compound', category: 'coordination', unlocked: false },
  { id: '[Cu(NH3)4]2+', symbol: '[Cu(NH₃)₄]²⁺', name: 'Tetraamminecopper(II) Ion', type: 'compound', category: 'coordination', unlocked: false },
  { id: '[Ag(NH3)2]+', symbol: '[Ag(NH₃)₂]⁺', name: 'Diamminesilver(I) Ion', type: 'compound', category: 'coordination', unlocked: false },
  
  // Industrial Gases
  { id: 'CO', symbol: 'CO', name: 'Carbon Monoxide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'N2O4', symbol: 'N₂O₄', name: 'Dinitrogen Tetroxide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'N2O5', symbol: 'N₂O₅', name: 'Dinitrogen Pentoxide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'SO', symbol: 'SO', name: 'Sulfur Monoxide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'CS2', symbol: 'CS₂', name: 'Carbon Disulfide', type: 'compound', category: 'gas', unlocked: false },
  { id: 'PH3', symbol: 'PH₃', name: 'Phosphine', type: 'compound', category: 'gas', unlocked: false },
  { id: 'AsH3', symbol: 'AsH₃', name: 'Arsine', type: 'compound', category: 'gas', unlocked: false },
  { id: 'B2H6', symbol: 'B₂H₆', name: 'Diborane', type: 'compound', category: 'gas', unlocked: false },
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
  ,
  // Product + single element reactions
  {
    id: 'sodium_water_reaction',
    reactants: ['H2O', 'Na'],
    products: ['NaOH', 'H2'],
    equation: '2Na + 2H₂O → 2NaOH + H₂↑',
    explanation: 'Sodium metal reacts vigorously with water to form sodium hydroxide and hydrogen gas.',
    type: 'single_displacement',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'carbon_dioxide_reduction_carbon',
    reactants: ['CO2', 'C'],
    products: ['CO'],
    equation: 'CO₂ + C → 2CO',
    explanation: 'At high temperatures, carbon reduces carbon dioxide to carbon monoxide (Boudouard reaction direction).',
    type: 'redox',
    conditions: { temperature: 'very_high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'hydrochloric_acid_with_sodium',
    reactants: ['HCl', 'Na'],
    products: ['NaCl', 'H2'],
    equation: '2Na + 2HCl → 2NaCl + H₂',
    explanation: 'Active metal sodium displaces hydrogen from hydrochloric acid.',
    type: 'single_displacement',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'sulfuric_acid_copper_reaction',
    reactants: ['H2SO4', 'Cu'],
    products: ['CuSO4', 'H2'],
    equation: 'Cu + H₂SO₄ → CuSO₄ + H₂',
    explanation: 'Simplified representation: copper reacts with acid to form copper(II) sulfate and hydrogen (note: needs hot conc. acid for typical lab; model simplified).',
    type: 'single_displacement',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'hematite_reduction_hydrogen',
    reactants: ['Fe2O3', 'H2'],
    products: ['Fe', 'H2O'],
    equation: 'Fe₂O₃ + 3H₂ → 2Fe + 3H₂O',
    explanation: 'Hydrogen reduces iron(III) oxide to iron with formation of water vapor.',
    type: 'redox',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'glucose_combustion',
    reactants: ['C6H12O6', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
    explanation: 'Combustion of glucose with oxygen to carbon dioxide and water.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  }
,

  {
    id: 'chloralkali_electrolysis',
    reactants: ['NaCl', 'H2O', 'electricity'],
    products: ['NaOH', 'Cl2', 'H2'],
    equation: '2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂ (electrolysis)',
    explanation: 'Electrolysis of brine produces sodium hydroxide, chlorine gas, and hydrogen gas.',
    type: 'electrolysis',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'electricity' }
  },
  {
    id: 'hypochlorite_formation',
    reactants: ['Cl2', 'NaOH'],
    products: ['NaCl', 'NaClO', 'H2O'],
    equation: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O',
    explanation: 'Chlorine reacts with cold dilute sodium hydroxide to produce sodium hypochlorite (bleach).',
    type: 'synthesis',
    conditions: { temperature: 'low', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'potassium_nitrate_formation',
    reactants: ['NaNO3', 'KCl'],
    products: ['KNO3', 'NaCl'],
    equation: 'NaNO₃ + KCl → KNO₃ + NaCl (metathesis)',
    explanation: 'Metathesis / salt-exchange reaction producing potassium nitrate and sodium chloride.',
    type: 'metathesis',
    conditions: { temperature: 'medium', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'gypsum_hydration',
    reactants: ['CaSO4', 'H2O'],
    products: ['CaSO4_2H2O'],
    equation: 'CaSO₄ + 2H₂O → CaSO₄·2H₂O',
    explanation: 'Hydration of calcium sulfate forms gypsum (dihydrate).',
    type: 'hydration',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'water' }
  },
  {
    id: 'co2_capture_by_naoh',
    reactants: ['CO2', 'NaOH'],
    products: ['Na2CO3', 'H2O'],
    equation: '2NaOH + CO₂ → Na₂CO₃ + H₂O',
    explanation: 'Sodium hydroxide captures carbon dioxide forming sodium carbonate; used in CO₂ scrubbing.',
    type: 'capture',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  // --- New reaction rules for extended compounds ---
  {
    id: 'nitric_oxide_formation',
    reactants: ['N2', 'O2'],
    products: ['NO'],
    equation: 'N₂ + O₂ → 2NO',
    explanation: 'High-temperature formation of nitric oxide in combustion environments.',
    type: 'synthesis',
    conditions: { temperature: 'very_high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'nitric_oxide_oxidation',
    reactants: ['NO', 'O2'],
    products: ['NO2'],
    equation: '2NO + O₂ → 2NO₂',
    explanation: 'Oxidation of nitric oxide to nitrogen dioxide in air.',
    type: 'oxidation',
    conditions: { temperature: 'medium', pressure: 'normal', catalyst: null }
  },
  {
    id: 'nitrous_acid_formation',
    reactants: ['NO2', 'H2O'],
    products: ['HNO2', 'HNO3'],
    equation: '2NO₂ + H₂O → HNO₂ + HNO₃',
    explanation: 'Disproportionation of nitrogen dioxide in water producing nitrous and nitric acids.',
    type: 'disproportionation',
    conditions: { temperature: 'low', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'fecl2_chlorination',
    reactants: ['FeCl2', 'Cl2'],
    products: ['FeCl3'],
    equation: '2FeCl₂ + Cl₂ → 2FeCl₃',
    explanation: 'Oxidation of iron(II) chloride to iron(III) chloride by chlorine.',
    type: 'redox',
    conditions: { temperature: 'medium', pressure: 'normal', catalyst: null }
  },
  {
    id: 'lithium_oxide_formation',
    reactants: ['Li', 'O2'],
    products: ['Li2O'],
    equation: '4Li + O₂ → 2Li₂O',
    explanation: 'Lithium metal reacts with oxygen forming lithium oxide (battery context).',
    type: 'synthesis',
    conditions: { temperature: 'medium', pressure: 'normal', catalyst: null }
  },
  {
    id: 'lithium_carbonate_from_oxide',
    reactants: ['Li2O', 'CO2'],
    products: ['Li2CO3'],
    equation: 'Li₂O + CO₂ → Li₂CO₃',
    explanation: 'Carbonation of lithium oxide forming lithium carbonate.',
    type: 'synthesis',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'copper_sulfate_pentahydrate_formation',
    reactants: ['CuSO4', 'H2O'],
    products: ['CuSO4_5H2O'],
    equation: 'CuSO₄ + 5H₂O → CuSO₄·5H₂O',
    explanation: 'Hydration of anhydrous copper(II) sulfate produces the blue pentahydrate crystals.',
    type: 'hydration',
    conditions: { temperature: 'low', pressure: 'normal', catalyst: 'water' }
  },
  {
    id: 'kmno4_decomposition',
    reactants: ['KMnO4'],
    products: ['K2MnO4', 'MnO2', 'O2'],
    equation: '2KMnO₄ → K₂MnO₄ + MnO₂ + O₂',
    explanation: 'Thermal decomposition of potassium permanganate releasing oxygen (simplified).',
    type: 'decomposition',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'nitrous_acid_neutralization',
    reactants: ['HNO2', 'NaOH'],
    products: ['NaNO2', 'H2O'],
    equation: 'HNO₂ + NaOH → NaNO₂ + H₂O',
    explanation: 'Neutralization of nitrous acid by sodium hydroxide giving sodium nitrite.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'calcium_hydroxide_co2_capture',
    reactants: ['Ca(OH)2', 'CO2'],
    products: ['CaCO3', 'H2O'],
    equation: 'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O',
    explanation: 'Carbon dioxide reacts with calcium hydroxide forming insoluble calcium carbonate (limewater test).',
    type: 'capture',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'silane_combustion',
    reactants: ['SiH4', 'O2'],
    products: ['SiO2', 'H2O'],
    equation: 'SiH₄ + 2O₂ → SiO₂ + 2H₂O',
    explanation: 'Pyrophoric silane combusts spontaneously in air forming silica and water.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'toluene_combustion',
    reactants: ['C7H8', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'C₇H₈ + 9O₂ → 7CO₂ + 4H₂O',
    explanation: 'Complete combustion of toluene produces carbon dioxide and water.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  
  // Additional Metal Oxide Formations
  {
    id: 'magnesium_oxide_formation',
    reactants: ['Mg', 'O2'],
    products: ['MgO'],
    equation: '2Mg + O₂ → 2MgO',
    explanation: 'Magnesium burns brilliantly in air to form magnesium oxide.',
    type: 'synthesis',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'zinc_oxide_formation',
    reactants: ['Zn', 'O2'],
    products: ['ZnO'],
    equation: '2Zn + O₂ → 2ZnO',
    explanation: 'Zinc metal oxidizes in air forming white zinc oxide.',
    type: 'synthesis',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'copper_oxide_formation',
    reactants: ['Cu', 'O2'],
    products: ['CuO'],
    equation: '2Cu + O₂ → 2CuO',
    explanation: 'Copper forms black copper(II) oxide when heated in air.',
    type: 'synthesis',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'titanium_oxide_formation',
    reactants: ['Ti', 'O2'],
    products: ['TiO2'],
    equation: 'Ti + O₂ → TiO₂',
    explanation: 'Titanium metal reacts with oxygen forming titanium dioxide (white pigment).',
    type: 'synthesis',
    conditions: { temperature: 'very_high', pressure: 'normal', catalyst: null }
  },
  
  // Acid-Base Reactions
  {
    id: 'hcl_naoh_neutralization',
    reactants: ['HCl', 'NaOH'],
    products: ['NaCl', 'H2O'],
    equation: 'HCl + NaOH → NaCl + H₂O',
    explanation: 'Strong acid-base neutralization producing salt and water.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'h2so4_naoh_neutralization',
    reactants: ['H2SO4', 'NaOH'],
    products: ['Na2SO4', 'H2O'],
    equation: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O',
    explanation: 'Sulfuric acid reacts with sodium hydroxide forming sodium sulfate.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'hno3_koh_neutralization',
    reactants: ['HNO3', 'KOH'],
    products: ['KNO3', 'H2O'],
    equation: 'HNO₃ + KOH → KNO₃ + H₂O',
    explanation: 'Nitric acid neutralized by potassium hydroxide produces potassium nitrate.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'h3po4_naoh_neutralization',
    reactants: ['H3PO4', 'NaOH'],
    products: ['Na3PO4', 'H2O'],
    equation: 'H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O',
    explanation: 'Phosphoric acid (triprotic) neutralized by sodium hydroxide.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'acetic_acid_naoh',
    reactants: ['CH3COOH', 'NaOH'],
    products: ['CH3COONa', 'H2O'],
    equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
    explanation: 'Acetic acid (weak) neutralized by strong base forming sodium acetate.',
    type: 'acid_base',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  
  // Precipitation Reactions
  {
    id: 'silver_chloride_precipitation',
    reactants: ['AgNO3', 'NaCl'],
    products: ['AgCl', 'NaNO3'],
    equation: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
    explanation: 'Silver nitrate reacts with sodium chloride forming white precipitate of silver chloride.',
    type: 'precipitation',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'barium_sulfate_precipitation',
    reactants: ['BaCl2', 'Na2SO4'],
    products: ['BaSO4', 'NaCl'],
    equation: 'BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl',
    explanation: 'Barium chloride and sodium sulfate form insoluble barium sulfate (used in medical imaging).',
    type: 'precipitation',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'lead_iodide_precipitation',
    reactants: ['Pb(NO3)2', 'KI'],
    products: ['PbI2', 'KNO3'],
    equation: 'Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃',
    explanation: 'Lead(II) nitrate and potassium iodide produce beautiful yellow precipitate of lead(II) iodide.',
    type: 'precipitation',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'calcium_carbonate_precipitation',
    reactants: ['CaCl2', 'Na2CO3'],
    products: ['CaCO3', 'NaCl'],
    equation: 'CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl',
    explanation: 'Calcium chloride and sodium carbonate produce calcium carbonate precipitate.',
    type: 'precipitation',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  
  // Organic Combustion Reactions
  {
    id: 'ethanol_combustion',
    reactants: ['C2H5OH', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
    explanation: 'Ethanol burns in oxygen producing carbon dioxide and water (biofuel).',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'propane_combustion',
    reactants: ['C3H8', 'O2'],
    products: ['CO2', 'H2O'],
    equation: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    explanation: 'Propane (LPG) combusts completely in oxygen.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'butane_combustion',
    reactants: ['C4H10', 'O2'],
    products: ['CO2', 'H2O'],
    equation: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O',
    explanation: 'Butane combusts producing carbon dioxide and water vapor.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'benzene_combustion',
    reactants: ['C6H6', 'O2'],
    products: ['CO2', 'H2O'],
    equation: '2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O',
    explanation: 'Benzene burns with a sooty flame due to high carbon content.',
    type: 'combustion',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'acetylene_combustion',
    reactants: ['C2H2', 'O2'],
    products: ['CO2', 'H2O'],
    equation: '2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O',
    explanation: 'Acetylene combustion produces very high temperatures (oxy-acetylene torch).',
    type: 'combustion',
    conditions: { temperature: 'very_high', pressure: 'normal', catalyst: null }
  },
  
  // Decomposition Reactions
  {
    id: 'hydrogen_peroxide_decomposition',
    reactants: ['H2O2'],
    products: ['H2O', 'O2'],
    equation: '2H₂O₂ → 2H₂O + O₂',
    explanation: 'Hydrogen peroxide decomposes into water and oxygen gas (catalyzed by MnO₂).',
    type: 'decomposition',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'MnO2' }
  },
  {
    id: 'calcium_carbonate_decomposition',
    reactants: ['CaCO3'],
    products: ['CaO', 'CO2'],
    equation: 'CaCO₃ → CaO + CO₂',
    explanation: 'Thermal decomposition of limestone produces quicklime and carbon dioxide.',
    type: 'decomposition',
    conditions: { temperature: 'very_high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'sodium_bicarbonate_decomposition',
    reactants: ['NaHCO3'],
    products: ['Na2CO3', 'H2O', 'CO2'],
    equation: '2NaHCO₃ → Na₂CO₃ + H₂O + CO₂',
    explanation: 'Baking soda decomposes when heated releasing carbon dioxide (leavening agent).',
    type: 'decomposition',
    conditions: { temperature: 'medium', pressure: 'normal', catalyst: null }
  },
  {
    id: 'mercury_oxide_decomposition',
    reactants: ['HgO'],
    products: ['Hg', 'O2'],
    equation: '2HgO → 2Hg + O₂',
    explanation: 'Mercury(II) oxide decomposes to mercury and oxygen (historic oxygen discovery).',
    type: 'decomposition',
    conditions: { temperature: 'high', pressure: 'normal', catalyst: null }
  },
  
  // Redox Reactions
  {
    id: 'zinc_copper_sulfate',
    reactants: ['Zn', 'CuSO4'],
    products: ['ZnSO4', 'Cu'],
    equation: 'Zn + CuSO₄ → ZnSO₄ + Cu',
    explanation: 'Zinc displaces copper from copper sulfate solution (single displacement).',
    type: 'redox',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'iron_copper_sulfate',
    reactants: ['Fe', 'CuSO4'],
    products: ['FeSO4', 'Cu'],
    equation: 'Fe + CuSO₄ → FeSO₄ + Cu',
    explanation: 'Iron metal reduces copper ions, depositing copper metal.',
    type: 'redox',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'magnesium_hydrochloric_acid',
    reactants: ['Mg', 'HCl'],
    products: ['MgCl2', 'H2'],
    equation: 'Mg + 2HCl → MgCl₂ + H₂',
    explanation: 'Magnesium reacts vigorously with hydrochloric acid producing hydrogen gas.',
    type: 'redox',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'zinc_hydrochloric_acid',
    reactants: ['Zn', 'HCl'],
    products: ['ZnCl2', 'H2'],
    equation: 'Zn + 2HCl → ZnCl₂ + H₂',
    explanation: 'Zinc dissolves in hydrochloric acid releasing hydrogen gas.',
    type: 'redox',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'aluminum_hydrochloric_acid',
    reactants: ['Al', 'HCl'],
    products: ['AlCl3', 'H2'],
    equation: '2Al + 6HCl → 2AlCl₃ + 3H₂',
    explanation: 'Aluminum reacts with hydrochloric acid producing hydrogen.',
    type: 'redox',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  
  // Industrial Processes
  {
    id: 'sulfur_trioxide_formation',
    reactants: ['SO2', 'O2'],
    products: ['SO3'],
    equation: '2SO₂ + O₂ ⇌ 2SO₃',
    explanation: 'Key step in sulfuric acid production (Contact Process) with V₂O₅ catalyst.',
    type: 'synthesis',
    conditions: { temperature: 'high', pressure: 'elevated', catalyst: 'V2O5' }
  },
  {
    id: 'sulfuric_acid_formation',
    reactants: ['SO3', 'H2O'],
    products: ['H2SO4'],
    equation: 'SO₃ + H₂O → H₂SO₄',
    explanation: 'Sulfur trioxide reacts with water forming concentrated sulfuric acid.',
    type: 'synthesis',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'nitric_acid_production',
    reactants: ['NO2', 'H2O', 'O2'],
    products: ['HNO3'],
    equation: '4NO₂ + 2H₂O + O₂ → 4HNO₃',
    explanation: 'Ostwald process for nitric acid production from nitrogen dioxide.',
    type: 'synthesis',
    conditions: { temperature: 'medium', pressure: 'elevated', catalyst: 'none' }
  },
  {
    id: 'carbon_reduction_iron_ore',
    reactants: ['Fe2O3', 'C'],
    products: ['Fe', 'CO2'],
    equation: '2Fe₂O₃ + 3C → 4Fe + 3CO₂',
    explanation: 'Iron ore reduction in blast furnace using carbon (simplified).',
    type: 'redox',
    conditions: { temperature: 'very_high', pressure: 'normal', catalyst: null }
  },
  {
    id: 'aluminum_extraction',
    reactants: ['Al2O3'],
    products: ['Al', 'O2'],
    equation: '2Al₂O₃ → 4Al + 3O₂',
    explanation: 'Electrolytic extraction of aluminum from bauxite (Hall-Héroult process).',
    type: 'electrolysis',
    conditions: { temperature: 'very_high', pressure: 'normal', catalyst: 'cryolite' }
  },
  
  // Complex Ion Formation
  {
    id: 'copper_ammonia_complex',
    reactants: ['CuSO4', 'NH3'],
    products: ['[Cu(NH3)4]2+', 'SO4'],
    equation: 'CuSO₄ + 4NH₃ → [Cu(NH₃)₄]²⁺ + SO₄²⁻',
    explanation: 'Copper(II) sulfate forms deep blue tetraamminecopper(II) complex.',
    type: 'complex_formation',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
  },
  {
    id: 'silver_ammonia_complex',
    reactants: ['AgCl', 'NH3'],
    products: ['[Ag(NH3)2]+', 'Cl-'],
    equation: 'AgCl + 2NH₃ → [Ag(NH₃)₂]⁺ + Cl⁻',
    explanation: 'Silver chloride dissolves in ammonia forming diammine silver(I) complex.',
    type: 'complex_formation',
    conditions: { temperature: 'room', pressure: 'normal', catalyst: 'none' }
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