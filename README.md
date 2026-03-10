# SMTAUTO LLP Connect

A modern, high-performance web application for SMTAUTO LLP, showcasing precision engineering and manufacturing capabilities. Built with React, Vite, Tailwind CSS, and Framer Motion components.

## Features

- **Dynamic Animations**: Smooth scroll-linked animations driven by `framer-motion` and `lenis`.
- **Interactive UI**: Fully responsive navigation, dropdown menus, and layout systems constructed with custom components.
- **Component Architecture**: Built using `shadcn/ui` style Radix primitives for accessibility and consistent design aesthetics.
- **Form Handling**: Contact enquiry system powered by modern forms.

## Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Radix UI Primitives (`@radix-ui/react-*`)
- **Routing**: React Router DOM (`react-router-dom`)

## Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd smt-llp-connect-main
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled assets will be placed in the `dist` directory.

You can preview the production build locally by running:

```bash
npm run preview
```

## Project Structure

- `/src/components`: Reusable UI components, animated wrappers, and layout blocks.
- `/src/pages`: Distinct page views (Index, About, Processes, Cells, Quality, Enquiry, Careers, etc.).
- `/src/assets`: Static assets including images, videos, and icons used throughout the site.

## License

This is a proprietary project for SMTAUTO LLP.
