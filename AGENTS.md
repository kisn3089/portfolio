# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with React, TypeScript, Three.js, and FFmpeg WASM. The project showcases interactive 3D graphics, image processing, video conversion, and stock data visualization capabilities.

## Development Commands

```bash
# Install dependencies
yarn

# Start development server (runs on port 3000 with special headers for FFmpeg)
yarn dev

# Build for production
yarn build

# Run ESLint
yarn lint

# Preview production build
yarn preview
```

## Project Architecture

### Core Technologies Stack

- **Frontend Framework**: React 18 with TypeScript
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **State Management**: @tanstack/react-query for server state, custom hooks for local state
- **Styling**: styled-components with custom theme system
- **Video Processing**: FFmpeg WASM for client-side video conversion
- **Data Visualization**: @nivo/line for charts
- **Routing**: react-router-dom with page transitions

### Directory Structure

```
src/
├── components/
│   ├── atoms/           # Basic UI components (input, icons)
│   ├── molecule/        # Composite components (canvasCore, etc.)
│   └── organism/        # Complex feature components (video, image, three)
├── hooks/               # Custom React hooks
├── pages/               # Route components
├── styles/              # Theme system and styled-components
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and Three.js materials
├── api/                 # API layer for external services
├── lib/                 # Core utility functions
└── store/               # Application state
```

### Key Architectural Patterns

#### Three.js Integration

- **CanvasCore Component** (`src/components/molecule/canvasCore/CanvasCore.tsx`): Reusable wrapper for all Three.js scenes with standardized camera controls, lighting, and loading states
- **ModelCore** (`src/components/organism/three/modelCore/ModelCore.tsx`): Core Three.js model handling logic used across all 3D components
- **Custom Materials**: BannerMaterial, ImageMaterial, and BentPlaneGeometry in `src/utils/materials/`

#### Animation System

- **Animation Core** (`src/styles/theme.ts` line 65): Centralized animation functions using styled-components for consistent transitions
- **Fade Transitions**: Page-level transitions using react-transition-group

#### API and Data Management

- **React Query Integration**: Used for stock API calls with parallel requests and error handling
- **Custom Hooks Pattern**: Hooks in `src/hooks/` for specific features (useImage, useGetDetail, etc.)

#### Image Processing

- **Async Processing**: CPU-intensive color correction operations use setTimeout(300ms) to maintain UI responsiveness
- **Canvas API**: Direct canvas manipulation for Instagram-style filters

#### Video Processing

- **FFmpeg WASM**: Client-side video conversion to MP4 format
- **Cross-Origin Headers**: Special Vite configuration required for SharedArrayBuffer support

### Development Notes

#### Vite Configuration

- **Port 3000**: Development server with custom headers for FFmpeg support
- **SVG Support**: @svgr/rollup for SVG component imports
- **Chunk Splitting**: Manual vendor chunking for optimal bundle size

#### Font Strategy

- **CSS Import Method**: Prevents font flashing during load
- **Dynamic Font Loading**: Prepared for English/Korean language switching

#### Performance Optimizations

- **Three.js Model Loading**: Sequential loading strategy (main model first, then smaller models)
- **Image Caching**: Public directory assets for browser caching
- **Bundle Optimization**: Vendor chunk splitting in Vite config

#### ESLint Configuration

- Standard TypeScript + React rules
- Relaxed rules for @typescript-eslint/ban-ts-comment and no-explicit-any (warnings only)
- React refresh plugin for development

### Testing and Quality Assurance

Always run linting before committing:

```bash
yarn lint
```

### Special Considerations

1. **FFmpeg WASM Requirements**: The development server requires specific CORS headers for SharedArrayBuffer support
2. **Three.js Performance**: Models use Draco compression and sequential loading to optimize GPU usage
3. **Mobile Responsiveness**: All pages implement responsive design with styled-components breakpoints
4. **Public Assets**: Images should be placed in `public/` directory for optimal caching

### Core Reusable Components

- **CheckCondition** (`src/lib/util/CheckCondition.tsx`): Conditional rendering utility
- **ShowError** (`src/components/molecule/showError/ShowError.tsx`): Error handling component for API failures
- **CameraMouse/CameraLookAt**: Three.js camera control components in molecule/canvasCore/

This architecture emphasizes reusability, performance optimization, and clean separation of concerns for 3D graphics, media processing, and data visualization features.

## PR Content Format

When creating PR descriptions, use the following format:

### Template Structure:

```
## 📋 Summary
[Brief description of the changes]

## 🔄 Changes Overview

### AS-IS
- [Current state description]

### TO-BE
- [Target state description]

## 🎯 Detailed Changes

**1. [Feature/Component Name]**

**AS-IS**: [Current state]
**TO-BE**: [New state]

Files: [file paths with GitHub links when available - format as [`file_path`](https://github.com/kisn3089/toss-accessibility-code-challenge/tree/main/file_path)]
- [Change details]
- [Implementation notes]

[Continue for each major change...]

## 🏗️ Component Architecture
[Architecture diagram or structure if relevant]

## 🎨 Design Tokens Added
[Design system changes if applicable]

## ♿ Accessibility Features Implemented
[Accessibility improvements if applicable]
```

### Key Guidelines:

- Use emojis for section headers (📋 🔄 🎯 🏗️ 📝 🎨 ♿ 🧪)
- Structure with AS-IS/TO-BE format for clarity
- Include file paths as GitHub links with modification status indicators
- Use syntax highlighting for code snippets (`typescript, `javascript, etc.)
- Add Mermaid diagrams for complex architecture changes
- Include practical code examples with Before/After sections
- Use task lists for test plans and checklists
- Focus on business value and technical impact
- Highlight accessibility and design system changes
