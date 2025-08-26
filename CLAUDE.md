# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chair Hub is a Next.js 15 application showcasing famous designer chairs. It's a bilingual (Japanese/English) catalog featuring chair details, stories, and designer information. The project uses modern React patterns with TypeScript and Tailwind CSS.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Motion (Framer Motion) and Tailwind CSS animations
- **Fonts**: Roboto and Noto Sans JP (via next/font/google)
- **Theme**: next-themes for dark/light mode switching
- **Icons**: Lucide React and Iconoir

### Component Architecture
- **UI Components**: Located in `src/components/ui/` - shadcn/ui components
- **Layout Components**: Located in `src/components/layout/` - nav, footer, hero, main
- **Common Components**: Located in `src/components/common/` - reusable components like ThemeProvider, grids, carousels
- **Alias Imports**: Use `@/` prefix for all imports from src directory

### Data Management
- Chair data stored in `src/data/chairs.json`
- Contains 20 famous designer chairs with bilingual descriptions
- Each chair has: id, name, year, country, style, designer, description, image

### Styling Approach
- Uses Tailwind CSS v4 with custom design system
- OKLCH color space for better color management
- Custom CSS variables for theming in `globals.css`
- Design tokens: `--radius`, color variables, font variables
- Dark mode support with CSS custom properties

### File Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/(index)/` - Homepage route group
- `src/app/chairs/` - Chair listing page
- `src/app/styles/` - Style showcase page
- `src/components/` - Reusable components organized by purpose
- `src/lib/` - Utility functions (cn function for class merging)
- `src/data/` - Static data files

### Key Patterns
- Use `cn()` utility from `@/lib/utils` for conditional class names
- All components follow shadcn/ui patterns and conventions
- TypeScript strict mode enabled
- Component composition over inheritance
- Server components by default, client components when needed

### Japanese Content
The application contains significant Japanese content, particularly in chair descriptions. When working with text content, be mindful of character encoding and font rendering for Japanese text.