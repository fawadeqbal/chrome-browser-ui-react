# Chrome Browser UI - React Frontend Test

A pixel-perfect Chrome browser window UI built with React, featuring modular components, responsive design, and exact Chrome styling.

## Features

- **Window Controls**: Classic minimize, maximize, and close buttons with proper styling
- **Tab Management**: Interactive tabs with hover effects, close buttons, and smooth transitions
- **Address Bar**: Rounded search input with magnifying glass icon and bookmark button
- **Navigation Icons**: Back, forward, and refresh buttons with proper spacing
- **Responsive Design**: Adapts to all screen sizes with mobile-first approach
- **Professional Icons**: Lucide React icons for authentic browser appearance
- **Keyboard Shortcuts**: Ctrl+1-9 for tabs, Ctrl+T for new tab, Ctrl+W to close tab

## Tools Used

- **React 19.1.1** - Frontend framework with functional components and hooks
- **Lucide React** - Professional SVG icon library for high-quality UI icons
- **CSS3** - Custom styling with flexbox, gradients, and modern CSS features
- **JavaScript ES6+** - Modern JavaScript features including useState and useEffect hooks

## How to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/[username]/chrome-browser-ui-react
   cd chrome-browser-ui-react
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
├── components/
│   ├── WindowControls.js      # Window management buttons
│   ├── Tab.js                 # Individual tab component
│   ├── NewTabButton.js        # Plus icon for new tabs
│   ├── TabSection.js          # Container for all tabs
│   ├── NavigationIcons.js     # Back, forward, refresh buttons
│   ├── AddressBar.js          # Search input with icons
│   ├── MenuIcon.js            # Three dots menu button
│   ├── AddressBarSection.js   # Navigation and address bar container
│   ├── ChromeTopBar.js        # Tab and address bar sections
│   ├── ContentArea.js         # Main content container
│   └── ChromeWindow.js        # Main browser window container
├── App.js                     # Main React component with state management
├── App.css                    # Chrome-like styling and responsive design
└── index.js                   # React app entry point
```

## Technical Implementation

- **Component Architecture**: Modular, reusable components with clear separation of concerns
- **State Management**: React useState hook for tab switching and address bar
- **CSS Architecture**: Mobile-first responsive design with Chrome-like styling
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized transitions and efficient re-rendering

## Browser Compatibility

- Chrome (recommended for best experience)
- Firefox
- Safari
- Edge

## Development Notes

- Professional Lucide React icons for authentic browser experience
- Pixel-perfect design matching Chrome's visual style
- Smooth transitions and hover effects (200ms)
- Mobile responsive design with touch optimization
- Clean, maintainable code structure with proper prop interfaces

## Future Enhancements

- Add more tabs functionality with dynamic tab creation
- Implement actual navigation and URL handling
- Add bookmark management system
- Include developer tools panel
- Add dark mode support
- Implement extension support