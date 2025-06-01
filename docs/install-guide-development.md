# Development Installation Guide

This guide will help you set up Shay RSS Reader for local development.

## Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)
- Git
- A code editor (VS Code recommended)
- [Backend API](https://github.com/chemel/shay-backend) running locally

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/chemel/shay-frontend.git
   cd shay-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Development Environment**

   Edit the `src/environments/environment.ts` file:
   ```typescript
   export const environment = {
     production: false,
     backendUrl: 'http://localhost:8000/api'  // Adjust if your backend runs on a different port
   };
   ```

4. **Start Development Server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

## Development Tools

### Angular CLI

The project uses Angular CLI. Here are some useful commands:

```bash
# Generate a new component
ng generate component component-name

# Generate a service
ng generate service service-name

# Build for production
ng build
```

## Working with the Backend

1. Make sure the [backend API](https://github.com/chemel/shay-backend) is running
2. Default API URL is `http://localhost:8000/api`
3. Update `environment.ts` if your backend uses a different URL
