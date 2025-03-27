# Bulletproof React Boilerplate

A modern, opinionated, and scalable React boilerplate built with TypeScript, Vite, Tailwind CSS, and Sentry integration.
This boilerplate follows the specifications for [bulletproof-react](https://github.com/alan2207/bulletproof-react).

## Features

- **React**: Modern UI library for building component-based interfaces
- **TypeScript**: Type safety for robust application development
- **Vite**: Lightning-fast build tool with HMR support
- **Tailwind CSS**: Utility-first CSS framework
- **Docker & Nginx**: Containerized deployment setup
- **Path Aliases**: Streamlined imports with configured path resolution
- **Sentry Integration**: Built-in error tracking and monitoring
- **Feature-based Architecture**: Organized project structure
- **OIDC Authentication**: Integrated Keycloak authentication
- **Environment Configuration**: Type-safe environment variables with Zod

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Docker (for containerization)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/bulletproof-react-boilerplate.git
   cd bulletproof-react-boilerplate
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

### Environment Variables

Environment variables are validated using Zod. Create a `.env` file with the following variables:

```sh
VITE_APP_API_URL=http://localhost:4200
VITE_APP_APP_URL=http://localhost:5173
VITE_APP_OIDC_AUTHORITY=https://your-keycloak-url/realms/your-realm
VITE_APP_OIDC_CLIENT_ID=your-client-id
```

The environment configuration is handled in `src/config/env.ts` which validates all required variables.

### OIDC Authentication Setup

1. Set up a Keycloak realm and client
2. Configure the environment variables as shown above
3. The OIDC configuration is handled in `src/config/oidc.ts`

## Development

Start the development server:
```sh
npm run dev
```

## Building for Production

Build the application:
```sh
npm run build
```

## Docker Deployment

1. Build the Docker image:
   ```sh
   docker build -t bulletproof-react .
   ```

2. Run the container:
   ```sh
   docker run -p 80:80 bulletproof-react
   ```

Alternatively, use Docker Compose:
```sh
docker-compose up
```

### Docker Compose Configuration

For production deployment:
1. Create a `secrets/.env` file with your production environment variables
2. Deploy using:
   ```sh
   docker-compose -f compose.yaml -f compose.override.prod.yaml up -d
   ```

### Nginx Configuration

The Nginx configuration (`nginx.conf`) handles:

- Serving the built React application
- Proxying API calls to a backend service
- Serving static content
- SPA routing support

Key routes:
- `/` - Serves the React app
- `/api/` - Proxies to API server
- `/static/` - Proxies to static content

## Project Structure

The project uses path aliases for clean imports:

```
src/
├── app/          # Application core setup (@app)
├── components/   # Shared UI components (@components)
├── config/       # Configuration files (@config)
├── features/     # Feature-based modules (@features)
├── hooks/        # Custom React hooks (@hooks)
├── lib/          # Third-party library wrappers (@lib)
├── types/        # TypeScript type definitions (@types)
└── utils/        # Utility functions (@utils)
```

## Path Aliases

Import code using these configured aliases:

```typescript
import { Button } from '@components/ui/Button';
import { useAuth } from '@hooks/useAuth';
import { api } from '@lib/api';
```

## Sentry Integration

The boilerplate includes Sentry for error tracking with the Vite plugin pre-configured.

## Technologies

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility CSS framework
- **Docker**: Containerization
- **Nginx**: Web server for production
- **Sentry**: Error monitoring
- **Keycloak**: Authentication server
- **Zod**: Runtime type validation

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.