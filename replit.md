# LEXIA Educational Platform

## Overview

LEXIA is an Arabic-first educational platform designed for Saudi Arabian students, providing AI-powered chat interfaces for learning Saudi National History and Prophet's Biography. The platform features a demo authentication system with role-based access control, where different users can access different educational chat modules hosted on external n8n webhooks.

The application is a full-stack TypeScript project using React for the frontend and Express for the backend, with a focus on RTL (right-to-left) design and Arabic language support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**Routing**: Wouter for client-side routing with the following pages:

- Landing page (marketing/informational)
- Login page (demo authentication)
- Dashboard (authenticated chat access)
- 404 Not Found page

**UI System**: shadcn/ui component library (New York style) with Radix UI primitives

- Comprehensive set of pre-built components (buttons, cards, dialogs, forms, etc.)
- Custom theming system with CSS variables for light/dark modes
- Tailwind CSS for styling with custom configuration

**Design Principles**:

- **Arabic-First Design**: Full RTL layout throughout the application
- **Typography**: Tajawal Google Font for Arabic text at various weights
- **Color Palette**:
  - Primary Accent: #29F3D9 (Turquoise) for CTAs and interactive elements
  - Secondary: #326C82 (Teal) for headers and navigation
  - Neutral: #A9AEB1 (Gray) for body text
  - Based on professional educational SaaS platforms (Coursera, Khan Academy)

**State Management**:

- React Context API for authentication state
- TanStack Query (React Query) for server state and API caching
- React Hook Form with Zod validation for form handling

**Authentication Flow**:

- Client-side authentication context with localStorage persistence
- Protected routes redirect to login if not authenticated
- Session data stored in browser storage for demo purposes

### Backend Architecture

**Framework**: Express.js with TypeScript

**Server Structure**:

- Single API endpoint: `/api/login` for authentication
- Static file serving for production builds
- Vite development middleware for HMR in development

**Authentication System**:

- Static user credentials (demo only - not production-ready)
- Two users with different access levels:
  - user1: Access to both chat modules (accessLevel: 2)
  - user2: Access to one chat module (accessLevel: 1)
- In-memory storage implementation (MemStorage class)
- No database required for demo authentication

**API Design**:

- RESTful endpoint structure
- JSON request/response format
- Zod schema validation for request bodies
- Error handling with appropriate HTTP status codes

**Build Process**:

- esbuild for server-side bundling
- Vite for client-side bundling
- Single production bundle with optimized dependencies
- Selective bundling of frequently-used dependencies to reduce syscalls

### Data Storage Solutions

**Current Implementation**: In-memory storage for demo purposes

- No persistent database required
- Static user data defined in shared schema
- Session management through client-side localStorage

**Database Configuration**:

- Drizzle ORM configured with PostgreSQL dialect
- Connection ready for Neon serverless PostgreSQL
- Migration system in place but not currently utilized
- Schema file structure prepared for future database implementation

### External Dependencies

**Chat Integration**:

- Two n8n webhook endpoints for AI-powered educational chats:
  1. Saudi National History: `https://n8n.srv1091470.hstgr.cloud/webhook/2056d6e4-79cc-42d4-a7f2-1937787d10c2/chat`
  2. Prophet's Biography: `https://n8n.srv1091470.hstgr.cloud/webhook/cd8092fb-43e0-400b-b197-0b9bd89bb58c/chat`
- Chats opened in new browser windows/tabs
- No direct API integration - external navigation only

**Third-Party Services**:

- Google Fonts (Tajawal for Arabic typography)
- Neon Database (configured but not actively used in demo)
- Replit-specific development tools (cartographer, dev banner, runtime error overlay)

**Key Libraries**:

- **UI Components**: Radix UI primitives, shadcn/ui
- **Forms**: React Hook Form, Zod, @hookform/resolvers
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Build Tools**: Vite, esbuild, TypeScript

**Development Environment**:

- Designed for Replit deployment
- Hot module replacement in development
- Path aliases for clean imports (@/, @shared/)
- TypeScript strict mode enabled
