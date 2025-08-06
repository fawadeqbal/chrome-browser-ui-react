# Chrome-like Browser Window - React Frontend Test

A pixel-perfect Chrome browser window UI built with React, featuring realistic tabs, address bar, navigation controls, and window management.

## Features

- **Window Controls**: Minimize, maximize, and close buttons with realistic styling
- **Tab Management**: Interactive tabs with hover effects and close buttons
- **Address Bar**: Rounded address bar with lock icon, URL input, and star button
- **Navigation Icons**: Back, forward, refresh, and menu buttons
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions for better UX

## Tools Used

- **React 19.1.1** - Frontend framework with functional components and hooks
- **Lucide React** - Professional SVG icon library for high-quality UI icons
- **CSS3** - Custom styling with flexbox, gradients, and modern CSS features
- **JavaScript ES6+** - Modern JavaScript features including useState hook

## How to Run the Project Locally

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd demo
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
   Navigate to `http://localhost:3000` to view the application

## Project Structure

```
src/
├── App.js          # Main React component with Chrome window
├── App.css         # Chrome-like styling and layout
└── index.js        # React app entry point
```

## Technical Implementation

- **Component Structure**: Single main component with organized sections
- **State Management**: React useState hook for tab switching
- **CSS Architecture**: Modular CSS with BEM-like naming conventions
- **Responsive Design**: Mobile-first approach with media queries
- **Accessibility**: Proper button semantics and keyboard navigation

## Browser Compatibility

- Chrome (recommended for best experience)
- Firefox
- Safari
- Edge

## Development Notes

- Professional Lucide React icons for authentic browser experience
- Pixel-perfect design matching Chrome's visual style
- Smooth transitions and hover effects
- Mobile responsive design
- Clean, maintainable code structure

## Future Enhancements

- Add more tabs functionality
- Implement actual navigation
- Add bookmark management
- Include developer tools panel
- Add dark mode support
