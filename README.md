# Chemix - Interactive Chemistry Learning Platform

A React web application for interactive chemistry reaction learning with drag-and-drop functionality, reaction simulation, and an unlock system for compounds.

![Chemix Demo](https://via.placeholder.com/800x400/2563eb/ffffff?text=Chemix+Chemistry+Learning+Platform)

---

## Features

### 🧪 Interactive Learning
- **Drag & Drop Interface**: Intuitive element manipulation using HTML5 Drag and Drop API  
- **Real-time Reactions**: Simulate chemical reactions with immediate feedback  
- **Progressive Unlock System**: Discover new compounds by successfully completing reactions  
- **Condition Control**: Adjust temperature, pressure, and catalysts to affect reaction outcomes  

### 🎮 Gamified Experience
- **Element Collection**: Start with basic elements and unlock complex compounds  
- **Achievement System**: Track your progress with reaction statistics  
- **Visual Feedback**: Animated reactions and clear result displays  
- **Educational Content**: Detailed explanations for each chemical reaction  

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes  
- **Touch-Friendly**: Works seamlessly on tablets and mobile devices  
- **Accessible**: Keyboard navigation and screen reader support  
- **Modern UI**: Clean, professional interface with smooth animations  

---

## 🔮 Upcoming Features

### 🤖 AI Chemistry Assistant
- Integrated **AI Chatbot** to answer user queries about elements, reactions, and chemistry concepts
- Natural language support to ask things like "Why does Na react with Cl₂?" or "What is the molecular weight of H₂O?"

### 🧬 Periodic Table Explorer
- Dedicated **Periodic Table Page** featuring:
  - All 118 elements with atomic details
  - Click on any element to explore its properties, uses, reactions, and trivia
  - Visual categorization (metals, nonmetals, noble gases, etc.)
  - Responsive and interactive interface for better learning

---

## Technology Stack

- **Frontend**: React 18 with Hooks  
- **Routing**: React Router DOM v6  
- **Styling**: Custom CSS with CSS Variables  
- **Drag & Drop**: Native HTML5 API  
- **Build Tool**: Create React App  
- **Package Manager**: npm  

---

## Project Structure

chemix/ ├── public/ │   ├── index.html │   └── manifest.json ├── src/ │   ├── components/ │   │   ├── Navbar.jsx │   │   ├── ElementList.jsx │   │   ├── ReactionZone.jsx │   │   ├── ConditionsPanel.jsx │   │   ├── ResultCard.jsx │   │   └── PeriodicTable.jsx   ← (Planned) │   ├── pages/ │   │   ├── Home.jsx │   │   ├── Learn.jsx │   │   ├── About.jsx │   │   └── PeriodicTablePage.jsx  ← (Planned) │   ├── data/ │   │   ├── chemistryData.js │   │   └── periodicTableData.js   ← (Planned) │   ├── styles/ │   ├── App.js │   └── index.js ├── package.json └── README.md

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)  
- npm (v6 or higher)

### Installation

```bash
git clone https://github.com/your-username/chemix.git
cd chemix
npm install
npm start

Visit http://localhost:3000 in your browser.


---

How to Use

1. Home Page

Feature overview

Navigation to learning modules


2. Learn Page

Left Panel: Elements & compounds

Center Panel: Reaction zone

Right Panel: Set temperature, pressure, and catalyst


3. Creating Reactions

1. Drag elements into the reaction zone


2. Set reaction conditions


3. Click "React!"


4. View outcome and unlock new compounds



4. Unlocking System

Begin with basic elements (H₂, O₂, Na, Cl₂, C)

Unlock compounds as you simulate valid reactions



---

Current Reactions

Includes 5+ hardcoded reactions:

1. Water: 2H₂ + O₂ → 2H₂O


2. Salt: 2Na + Cl₂ → 2NaCl


3. Hydrochloric Acid: H₂ + Cl₂ → 2HCl


4. Carbon Dioxide: C + O₂ → CO₂


5. Hydrogen Peroxide: 2H₂O + O₂ → 2H₂O₂ (requires catalyst)




---

Educational Value

Chemistry Concepts

Chemical Equations (balanced)

Reaction Conditions

Properties of Elements

Conservation of Mass

Compound Formation


Learning Outcomes

Understand basic reactions

Recognize chemical formulas

Grasp effects of temperature, pressure, and catalysts

Learn through experimentation



---

Future Enhancements

Phase 2 (Planned)

🤖 AI-powered chemistry chatbot assistant

🎬 Lottie animations for molecule interactions

🧬 Periodic table page with clickable elements

📊 Expanded reaction database

🏫 Teacher dashboard for class tracking


Phase 3 (Future)

🌱 Organic chemistry module

🌐 Real-time classroom collaboration

📱 React Native mobile app

🎯 Leaderboards and achievements



---

Contributing

We welcome contributions from developers, educators, and enthusiasts.

Steps to Contribute

# 1. Fork the repo
# 2. Create a new branch
git checkout -b feature/amazing-feature

# 3. Make your changes and commit
git commit -m "Add amazing feature"

# 4. Push your changes
git push origin feature/amazing-feature

# 5. Create a Pull Request on GitHub

Areas to Contribute

🔬 Add new reactions

🎨 Improve UI/UX

📚 Expand educational content

🧪 Write unit tests

📝 Improve documentation



---

Architecture Notes

State Management

React Hooks: useState, useEffect

Global state for unlocked elements is in App.js


Data Structure

Elements/Compounds: { id, symbol, name, type, unlocked }

Reactions: { reactants, products, conditions }

Conditions: Temperature, pressure, catalyst flags



---

Performance

⚡ Optimized rendering

🚀 Native Drag & Drop = fast performance

🎞️ Smooth CSS animations

🧩 Ready for route-based code splitting



---

Browser Support

✅ Chrome (recommended)

✅ Firefox

✅ Safari

✅ Edge



---

License

This project is licensed under the MIT License – see the LICENSE file.


---

Acknowledgments

🧠 React Team

🧪 Chemistry educators for guidance

🌍 Open Source community



---

Contact

📧 Email: feedback@chemix.edu

💻 GitHub: github.com/chemix-platform

🐦 Twitter: @ChemixLearning



