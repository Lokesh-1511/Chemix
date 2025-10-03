#!/usr/bin/env python3
"""
Convert orderly benchmark test JSON data to Chemix chemistryData format.
This script processes chemical reaction data and converts it to the format
used by the Chemix interactive chemistry learning platform.
"""

import json
import re
from typing import Dict, List, Set, Any, Optional
from collections import defaultdict

class ChemistryDataConverter:
    def __init__(self):
        self.elements = {}  # Use dict to avoid duplicates by symbol
        self.compounds = {}  # Use dict to avoid duplicates by formula
        self.reactions = []
        self.element_info = {}
        self.compound_info = {}
        
        # Common element patterns and their properties
        self.element_patterns = {
            'H': {'name': 'Hydrogen', 'group': 'nonmetal'},
            'H2': {'name': 'Hydrogen', 'group': 'nonmetal'},
            'O': {'name': 'Oxygen', 'group': 'nonmetal'},
            'O2': {'name': 'Oxygen', 'group': 'nonmetal'},
            'N': {'name': 'Nitrogen', 'group': 'nonmetal'},
            'N2': {'name': 'Nitrogen', 'group': 'nonmetal'},
            'C': {'name': 'Carbon', 'group': 'nonmetal'},
            'Cl': {'name': 'Chlorine', 'group': 'halogen'},
            'Cl2': {'name': 'Chlorine', 'group': 'halogen'},
            'Br': {'name': 'Bromine', 'group': 'halogen'},
            'Br2': {'name': 'Bromine', 'group': 'halogen'},
            'F': {'name': 'Fluorine', 'group': 'halogen'},
            'F2': {'name': 'Fluorine', 'group': 'halogen'},
            'I': {'name': 'Iodine', 'group': 'halogen'},
            'I2': {'name': 'Iodine', 'group': 'halogen'},
            'Na': {'name': 'Sodium', 'group': 'alkali-metal'},
            'K': {'name': 'Potassium', 'group': 'alkali-metal'},
            'Ca': {'name': 'Calcium', 'group': 'alkaline-earth'},
            'Mg': {'name': 'Magnesium', 'group': 'alkaline-earth'},
            'Al': {'name': 'Aluminum', 'group': 'metal'},
            'Fe': {'name': 'Iron', 'group': 'transition-metal'},
            'Cu': {'name': 'Copper', 'group': 'transition-metal'},
            'Zn': {'name': 'Zinc', 'group': 'transition-metal'},
            'Pd': {'name': 'Palladium', 'group': 'transition-metal'},
            'Pt': {'name': 'Platinum', 'group': 'transition-metal'},
            'Ni': {'name': 'Nickel', 'group': 'transition-metal'},
            'S': {'name': 'Sulfur', 'group': 'nonmetal'},
            'P': {'name': 'Phosphorus', 'group': 'nonmetal'},
            'Si': {'name': 'Silicon', 'group': 'metalloid'},
        }
        
        # Common compound patterns
        self.compound_patterns = {
            'H2O': {'name': 'Water', 'category': 'molecular'},
            'CO2': {'name': 'Carbon Dioxide', 'category': 'molecular'},
            'CO': {'name': 'Carbon Monoxide', 'category': 'molecular'},
            'NH3': {'name': 'Ammonia', 'category': 'molecular'},
            'CH4': {'name': 'Methane', 'category': 'molecular'},
            'HCl': {'name': 'Hydrochloric Acid', 'category': 'acid'},
            'HBr': {'name': 'Hydrobromic Acid', 'category': 'acid'},
            'HF': {'name': 'Hydrofluoric Acid', 'category': 'acid'},
            'NaCl': {'name': 'Sodium Chloride', 'category': 'ionic'},
            'KCl': {'name': 'Potassium Chloride', 'category': 'ionic'},
            'CaCl2': {'name': 'Calcium Chloride', 'category': 'ionic'},
            'MgCl2': {'name': 'Magnesium Chloride', 'category': 'ionic'},
            'AlCl3': {'name': 'Aluminum Chloride', 'category': 'ionic'},
            'NaOH': {'name': 'Sodium Hydroxide', 'category': 'base'},
            'KOH': {'name': 'Potassium Hydroxide', 'category': 'base'},
        }

    def parse_molecule(self, molecule_str: str) -> Dict[str, Any]:
        """Parse a molecule string and extract basic information."""
        if not molecule_str or molecule_str == "NULL":
            return None
            
        # Clean up the molecule string
        clean_mol = molecule_str.strip()
        
        # Check if it's a known element
        if clean_mol in self.element_patterns:
            return {
                'id': clean_mol,
                'symbol': self.format_symbol(clean_mol),
                'name': self.element_patterns[clean_mol]['name'],
                'type': 'element',
                'group': self.element_patterns[clean_mol]['group']
            }
        
        # Check if it's a known compound
        if clean_mol in self.compound_patterns:
            return {
                'id': clean_mol,
                'symbol': self.format_symbol(clean_mol),
                'name': self.compound_patterns[clean_mol]['name'],
                'type': 'compound',
                'category': self.compound_patterns[clean_mol]['category']
            }
        
        # For complex molecules, try to categorize them
        if self.is_likely_element(clean_mol):
            return {
                'id': clean_mol,
                'symbol': self.format_symbol(clean_mol),
                'name': self.guess_element_name(clean_mol),
                'type': 'element',
                'group': 'unknown'
            }
        else:
            return {
                'id': clean_mol,
                'symbol': self.format_symbol(clean_mol),
                'name': self.guess_compound_name(clean_mol),
                'type': 'compound',
                'category': self.categorize_compound(clean_mol)
            }

    def format_symbol(self, symbol: str) -> str:
        """Format chemical symbols with proper subscripts."""
        # Convert numbers to subscripts
        symbol = re.sub(r'(\d+)', lambda m: '₀₁₂₃₄₅₆₇₈₉'[int(m.group(1))] if int(m.group(1)) < 10 else m.group(1), symbol)
        return symbol

    def is_likely_element(self, mol: str) -> bool:
        """Determine if a molecule string represents a single element."""
        # Simple heuristic: if it's short and starts with a capital letter
        return len(mol) <= 3 and mol[0].isupper() and not any(char in mol for char in '()[]{}=+-')

    def guess_element_name(self, symbol: str) -> str:
        """Guess element name from symbol."""
        base_symbol = re.sub(r'\d+', '', symbol)
        if base_symbol in self.element_patterns:
            return self.element_patterns[base_symbol]['name']
        return f"Element {symbol}"

    def guess_compound_name(self, formula: str) -> str:
        """Guess compound name from formula."""
        # Simple name generation based on common patterns
        if 'OH' in formula:
            return f"Hydroxide Compound"
        elif 'Cl' in formula and len(formula) <= 6:
            return f"Chloride Compound"
        elif 'O' in formula and '=' in formula:
            return f"Organic Compound"
        else:
            return f"Compound {formula}"

    def categorize_compound(self, formula: str) -> str:
        """Categorize compound based on formula."""
        if 'OH' in formula:
            return 'base'
        elif any(acid in formula for acid in ['HCl', 'HBr', 'HF', 'H2SO4']):
            return 'acid'
        elif 'O' in formula and len(formula) > 10:
            return 'organic'
        elif any(metal in formula for metal in ['Na', 'K', 'Ca', 'Mg', 'Al', 'Fe', 'Cu', 'Zn']):
            return 'ionic'
        else:
            return 'molecular'

    def extract_agents_and_conditions(self, data: Dict) -> Dict:
        """Extract reaction conditions from the data."""
        conditions = {
            'temperature': 'medium',
            'pressure': 'normal',
            'catalyst': 'none'
        }
        
        # Extract temperature
        if data.get('temperature'):
            temp = float(data['temperature'])
            if temp < 0:
                conditions['temperature'] = 'freezing'
            elif temp < 25:
                conditions['temperature'] = 'low'
            elif temp <= 100:
                conditions['temperature'] = 'medium'
            elif temp <= 200:
                conditions['temperature'] = 'high'
            else:
                conditions['temperature'] = 'very_high'
        
        # Extract catalysts from agents
        agents = [data.get(f'agent_{i:03d}') for i in range(3)]
        for agent in agents:
            if agent and agent != "NULL":
                if '[Pd]' in agent:
                    conditions['catalyst'] = 'palladium'
                elif '[Pt]' in agent:
                    conditions['catalyst'] = 'platinum'
                elif '[Ni]' in agent:
                    conditions['catalyst'] = 'nickel'
                elif 'AlCl3' in agent:
                    conditions['catalyst'] = 'aluminum_chloride'
                elif any(x in agent for x in ['[OH-]', 'NaOH', 'KOH']):
                    conditions['catalyst'] = 'base'
                elif 'Cl' in agent and len(agent) < 10:
                    conditions['catalyst'] = 'acid'
        
        return conditions

    def parse_reaction_string(self, rxn_str: str) -> Dict:
        """Parse reaction string to extract reactants and products."""
        if not rxn_str:
            return {'reactants': [], 'products': []}
        
        try:
            # Split by '>' to separate reactants, conditions, and products
            parts = rxn_str.split('>')
            if len(parts) >= 3:
                reactants_part = parts[0]
                products_part = parts[-1]
                
                # Extract molecules from reactants and products
                reactants = self.extract_molecules_from_string(reactants_part)
                products = self.extract_molecules_from_string(products_part)
                
                return {'reactants': reactants, 'products': products}
        except Exception as e:
            print(f"Error parsing reaction string: {rxn_str}, Error: {e}")
        
        return {'reactants': [], 'products': []}

    def extract_molecules_from_string(self, mol_string: str) -> List[str]:
        """Extract individual molecules from a reaction string part."""
        # Simple extraction - split by '.' and clean up
        molecules = []
        parts = mol_string.split('.')
        
        for part in parts:
            # Clean up the molecule string
            clean = part.strip()
            # Remove common reaction annotation patterns
            clean = re.sub(r'\[[^\]]*\]', '', clean)  # Remove bracketed items
            clean = re.sub(r'\([^)]*\)', '', clean)   # Remove parentheses content in some cases
            
            if clean and len(clean) > 0 and clean != "NULL":
                molecules.append(clean)
        
        return molecules

    def convert_data(self, json_data: List[Dict]) -> str:
        """Convert JSON data to chemistryData format."""
        all_elements = {}  # Use dict to avoid duplicates
        all_compounds = {}  # Use dict to avoid duplicates
        reactions = []
        
        for entry in json_data:
            try:
                # Parse reaction string
                reaction_info = self.parse_reaction_string(entry.get('rxn_str', ''))
                if not reaction_info['reactants'] and not reaction_info['products']:
                    continue
                
                # Extract conditions
                conditions = self.extract_agents_and_conditions(entry)
                
                # Process reactants and products
                reactant_ids = []
                product_ids = []
                
                for reactant in reaction_info['reactants']:
                    mol_info = self.parse_molecule(reactant)
                    if mol_info:
                        if mol_info['type'] == 'element':
                            all_elements[mol_info['id']] = mol_info
                        else:
                            all_compounds[mol_info['id']] = mol_info
                        reactant_ids.append(mol_info['id'])
                
                for product in reaction_info['products']:
                    mol_info = self.parse_molecule(product)
                    if mol_info:
                        if mol_info['type'] == 'element':
                            all_elements[mol_info['id']] = mol_info
                        else:
                            all_compounds[mol_info['id']] = mol_info
                        product_ids.append(mol_info['id'])
                
                if reactant_ids and product_ids:
                    # Create reaction
                    reaction = {
                        'id': f"reaction_{len(reactions) + 1}",
                        'reactants': reactant_ids,
                        'products': product_ids,
                        'equation': self.generate_equation(reactant_ids, product_ids),
                        'explanation': self.generate_explanation(entry),
                        'type': self.determine_reaction_type(reactant_ids, product_ids),
                        'conditions': conditions
                    }
                    reactions.append(reaction)
                    
            except Exception as e:
                print(f"Error processing entry: {e}")
                continue
        
        return self.format_output(all_elements, all_compounds, reactions)

    def generate_equation(self, reactants: List[str], products: List[str]) -> str:
        """Generate a readable chemical equation."""
        reactant_str = ' + '.join([self.format_symbol(r) for r in reactants])
        product_str = ' + '.join([self.format_symbol(p) for p in products])
        return f"{reactant_str} → {product_str}"

    def generate_explanation(self, entry: Dict) -> str:
        """Generate explanation from procedure details."""
        procedure = entry.get('procedure_details', '')
        if procedure:
            # Extract first sentence or first 100 characters
            first_sentence = procedure.split('.')[0]
            if len(first_sentence) > 150:
                return first_sentence[:150] + "..."
            return first_sentence + "."
        return "Chemical reaction extracted from research data."

    def determine_reaction_type(self, reactants: List[str], products: List[str]) -> str:
        """Determine the type of reaction."""
        if len(reactants) > 1 and len(products) == 1:
            return 'synthesis'
        elif len(reactants) == 1 and len(products) > 1:
            return 'decomposition'
        elif 'O2' in reactants or 'O' in reactants:
            return 'oxidation'
        else:
            return 'substitution'

    def format_output(self, elements: Dict, compounds: Dict, reactions: List) -> str:
        """Format the final output as JavaScript module."""
        output = """// Mock data for chemistry elements and reactions
// TODO: Replace with real chemistry database or AI-powered system
// Future integration points:
// 1. Connect to ChemSpider or PubChem API for real chemical data
// 2. Implement AI-powered reaction prediction using ML models
// 3. Add thermodynamic calculations for reaction feasibility
// 4. Include 3D molecular structure visualization

export const initialElements = [
"""
        
        # Add elements
        for elem_id, elem_info in sorted(elements.items()):
            output += f"  {{ id: '{elem_info['id']}', symbol: '{elem_info['symbol']}', name: '{elem_info['name']}', type: 'element', group: '{elem_info['group']}', unlocked: true }},\n"
        
        output += "];\n\nexport const compounds = [\n"
        
        # Add compounds
        for comp_id, comp_info in sorted(compounds.items()):
            output += f"  {{ id: '{comp_info['id']}', symbol: '{comp_info['symbol']}', name: '{comp_info['name']}', type: 'compound', category: '{comp_info['category']}', unlocked: false }},\n"
        
        output += "];\n\n// Reaction rules extracted from research data\nexport const reactionRules = [\n"
        
        # Add reactions
        for reaction in reactions:
            output += f"""  {{
    id: '{reaction['id']}',
    reactants: {reaction['reactants']},
    products: {reaction['products']},
    equation: '{reaction['equation']}',
    explanation: '{reaction['explanation']}',
    type: '{reaction['type']}',
    conditions: {{
      temperature: '{reaction['conditions']['temperature']}',
      pressure: '{reaction['conditions']['pressure']}',
      catalyst: '{reaction['conditions']['catalyst']}'
    }}
  }},
"""
        
        output += """];

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
    { value: 'aluminum_chloride', label: 'Aluminum Chloride (AlCl₃)', modifier: 1.7, description: 'Lewis acid catalyst' },
    { value: 'acid', label: 'Acid Catalyst (H⁺)', modifier: 1.4, description: 'Proton donor for acid-catalyzed reactions' },
    { value: 'base', label: 'Base Catalyst (OH⁻)', modifier: 1.4, description: 'Proton acceptor for base-catalyzed reactions' }
  ],
  environment: [
    { value: 'air', label: 'Open Air', modifier: 1.0, description: 'Standard atmospheric conditions' },
    { value: 'inert', label: 'Inert Atmosphere (N₂/Ar)', modifier: 1.1, description: 'Prevents unwanted oxidation' },
    { value: 'oxygen_rich', label: 'Oxygen-Rich', modifier: 1.3, description: 'Promotes combustion and oxidation' },
    { value: 'dry', label: 'Anhydrous (Dry)', modifier: 1.1, description: 'Moisture-free conditions' },
    { value: 'aqueous', label: 'Aqueous Solution', modifier: 1.2, description: 'Water-based reaction medium' },
    { value: 'organic_solvent', label: 'Organic Solvent', modifier: 1.1, description: 'Non-polar reaction medium' }
  ]
};
"""
        
        return output


def main():
    """Main function to run the conversion."""
    import sys
    
    if len(sys.argv) != 3:
        print("Usage: python convert_chemistry_data.py <input_json_file> <output_js_file>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    converter = ChemistryDataConverter()
    
    try:
        # Read JSON data
        with open(input_file, 'r', encoding='utf-8') as f:
            json_data = []
            for line in f:
                line = line.strip()
                if line:
                    try:
                        json_data.append(json.loads(line))
                    except json.JSONDecodeError as e:
                        print(f"Error parsing JSON line: {e}")
                        continue
        
        print(f"Loaded {len(json_data)} reactions from {input_file}")
        
        # Convert data
        output_content = converter.convert_data(json_data)
        
        # Write output
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(output_content)
        
        print(f"Converted data written to {output_file}")
        print("Conversion completed successfully!")
        
    except FileNotFoundError:
        print(f"Error: Input file '{input_file}' not found.")
        sys.exit(1)
    except Exception as e:
        print(f"Error during conversion: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()