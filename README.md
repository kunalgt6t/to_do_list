# ✨ Todo App - Get Things Done!

A beautiful, responsive, and feature-rich To-Do List application built with React, TypeScript, and Framer Motion. This app includes multiple themes, PWA support, and motivational features to keep you productive.

## 🚀 Features

### Core Functionality
- ✅ **Add, edit, and delete tasks**
- ✅ **Mark tasks as completed/incomplete**
- ✅ **Filter tasks by: All, Completed, Incomplete**
- ✅ **Task due dates with overdue indicators**
- ✅ **LocalStorage persistence**

### Beautiful Themes
- ✅ **Light Theme** - Clean and minimal
- 🌙 **Dark Theme** - Easy on the eyes
- 🌈 **Gradient Theme** - Vibrant and colorful
- 📓 **Notebook Theme** - Paper-like aesthetic
- 🎮 **Retro Theme** - Pixel-perfect nostalgia

### Enhanced UX
- ✨ **Smooth animations** with Framer Motion
- 📱 **Fully responsive** design
- 🎯 **Motivational quotes** and productivity tips
- 📊 **Progress tracking** with completion stats
- 🔄 **PWA support** - Install as a native app

## 🛠️ Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 📱 PWA Installation

This app is PWA-ready! To install it on your device:

### Desktop (Chrome/Edge)
1. Open the app in your browser
2. Click the install icon in the address bar
3. Follow the installation prompts

### Mobile (Android)
1. Open the app in Chrome
2. Tap the menu (⋮) and select "Add to Home screen"
3. Follow the installation prompts

### iOS (Safari)
1. Open the app in Safari
2. Tap the share button and select "Add to Home Screen"
3. Follow the installation prompts

## 🎨 Theme Guide

### Light Theme ✅
- Clean, minimal design
- Perfect for daytime use
- High contrast for readability

### Dark Theme 🌙
- Easy on the eyes
- Great for low-light environments
- Reduces eye strain

### Gradient Theme 🌈
- Vibrant, colorful interface
- Modern and energetic
- Perfect for creative work

### Notebook Theme 📓
- Paper-like aesthetic
- Warm, familiar feel
- Great for writing tasks

### Retro Theme 🎮
- Pixel-perfect design
- Nostalgic gaming aesthetic
- Fun and engaging

## 🎯 Usage Guide

### Adding Tasks
1. Type your task in the input field
2. Optionally set a due date
3. Click "✨ Add Task" or press Enter

### Managing Tasks
- **Complete**: Click the circle next to the task
- **Edit**: Click the ✏️ icon
- **Delete**: Click the 🗑️ icon

### Filtering Tasks
- **All**: View all tasks
- **Completed**: View only completed tasks
- **Incomplete**: View only pending tasks

### Theme Switching
- Click any theme button to instantly switch
- Your preference is automatically saved

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations
- **CSS Variables** - Dynamic theming
- **LocalStorage** - Data persistence
- **PWA** - Progressive Web App features

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AddTaskForm.tsx
│   ├── Dashboard.tsx
│   ├── FilterButtons.tsx
│   ├── TaskItem.tsx
│   └── ThemeSelector.tsx
├── types/              # TypeScript definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── quotes.ts
│   └── storage.ts
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## 🎨 Customization

### Adding New Themes
1. Add theme variables to `src/index.css`
2. Create theme class (e.g., `.theme-custom`)
3. Add theme option to `ThemeSelector.tsx`

### Adding New Features
1. Create new components in `src/components/`
2. Add types to `src/types/index.ts`
3. Update the main App component

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- The open-source community for inspiration

---

**Happy productivity! 🚀✨** 