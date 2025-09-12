# Chemix - Interactive Chemistry Learning Platform

A React web application for interactive chemistry reaction learning with drag-and-drop functionality, reaction simulation, and an unlock system for compounds.

![Chemix Demo](https://via.placeholder.com/800x400/2563eb/ffffff?text=Chemix+Chemistry+Learning+Platform)

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

## Technology Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM v6
- **Styling**: Custom CSS with CSS Variables
- **Drag & Drop**: Native HTML5 API
- **Build Tool**: Create React App
- **Package Manager**: npm

## Project Structure

```
chemix/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ElementList.jsx
│   │   ├── ReactionZone.jsx
│   │   ├── ConditionsPanel.jsx
│   │   └── ResultCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Learn.jsx
│   │   └── About.jsx
│   ├── data/
│   │   └── chemistryData.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── Learn.css
│   │   ├── ElementList.css
│   │   ├── ReactionZone.css
│   │   ├── ConditionsPanel.css
│   │   ├── ResultCard.css
│   │   └── About.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chemix.git
   cd chemix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes the single build dependency (irreversible)

## How to Use

### 1. Home Page
- Welcome interface with feature overview
- Navigation to learning modules
- Quick start guide

### 2. Learn Page (Main Interface)
- **Left Panel**: Available elements and compounds
- **Center Panel**: Reaction zone for drag and drop
- **Right Panel**: Condition controls (temperature, pressure, catalyst)

### 3. Creating Reactions
1. Drag elements from the left panel into the reaction zone
2. Adjust reaction conditions in the right panel
3. Click "React!" to simulate the chemical reaction
4. View results and unlock new compounds

### 4. Unlocking System
- Start with basic elements (H₂, O₂, Na, Cl₂, C)
- Successfully create reactions to unlock new compounds
- Unlocked compounds become available for future reactions

## Current Reactions

The app includes 5+ hardcoded chemical reactions:

1. **Water Formation**: 2H₂ + O₂ → 2H₂O
2. **Salt Formation**: 2Na + Cl₂ → 2NaCl
3. **Hydrochloric Acid**: H₂ + Cl₂ → 2HCl
4. **Carbon Dioxide**: C + O₂ → CO₂
5. **Hydrogen Peroxide**: 2H₂O + O₂ → 2H₂O₂ (requires catalyst)

## Educational Value

### Chemistry Concepts Covered
- **Chemical Equations**: Balanced reaction formulas
- **Reaction Conditions**: Temperature, pressure, and catalyst effects
- **Element Properties**: Basic understanding of chemical elements
- **Compound Formation**: How elements combine to form compounds
- **Conservation of Mass**: Implicit in balanced equations

### Learning Outcomes
- Understanding of basic chemical reactions
- Recognition of common chemical formulas
- Appreciation for reaction conditions
- Problem-solving through experimentation

## Future Enhancements

### Phase 2 (Planned)
- 🤖 AI-powered reaction prediction
- 🎬 Lottie animations for molecular interactions
- 📊 Expanded periodic table
- 🏫 Teacher dashboard and progress tracking

### Phase 3 (Future)
- 🧬 Organic chemistry modules
- 🌐 Real-time collaboration
- 📱 Mobile app (React Native)
- 🎯 Achievement system and leaderboards

## Contributing

We welcome contributions from educators, developers, and chemistry enthusiasts!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Areas for Contribution
- **New Reactions**: Add more chemical reactions to the database
- **UI/UX Improvements**: Enhance the user interface and experience
- **Educational Content**: Improve explanations and add learning materials
- **Testing**: Add unit tests and integration tests
- **Documentation**: Improve documentation and tutorials

## Architecture Notes

### State Management
- Uses React Hooks (useState, useEffect) for local state
- Global state for unlocked elements managed in App.js
- No external state management library required for current scope

### Data Structure
- **Elements/Compounds**: Objects with id, symbol, name, type, unlocked status
- **Reactions**: Rules-based system with reactants, products, and conditions
- **Conditions**: Temperature, pressure, and catalyst options

### Extensibility
- **Modular Components**: Easy to add new UI components
- **Data-Driven**: Reactions defined in separate data file
- **Configurable**: Condition options easily modified
- **Scalable**: Architecture supports adding new features

## Performance Considerations

- **Optimized Rendering**: Components only re-render when necessary
- **Efficient Drag & Drop**: Uses native HTML5 API for best performance
- **CSS Animations**: Hardware-accelerated animations for smooth UI
- **Code Splitting**: Ready for route-based code splitting

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the excellent framework
- Chemistry educators for educational guidance
- Open source community for inspiration and tools

## Contact

- **Email**: feedback@chemix.edu
- **GitHub**: [github.com/chemix-platform](https://github.com/chemix-platform)
- **Twitter**: [@ChemixLearning](https://twitter.com/ChemixLearning)

---

**Built with ❤️ for chemistry education**