# Pulsar AI

A personal finance dashboard application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Balance tracking with visual cards
- Budget progress monitoring
- Transaction history list
- Income and expense widgets
- Interactive charts and visualizations
- Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pulsar-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## Production Build

Build the application for production:
```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Preview Production Build

After building, preview the production build locally:
```bash
npm run preview
```

## Linting

Run the linter to check code quality:
```bash
npm run lint
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Recharts** - Chart library
- **Zustand** - State management
- **Lucide React** - Icons
- **React Countup** - Number animations

## Project Structure

```
src/
├── app/           # Main app components
├── entities/      # Business logic entities
├── features/      # Feature-specific components
├── hooks/         # Custom React hooks
├── screens/       # Page/screen components
├── shared/        # Shared utilities and components
│   ├── lib/       # Utility functions
│   └── utils/     # Helper functions
└── widgets/       # Reusable UI widgets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.
