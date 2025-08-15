# Portfolio Website - Development Instructions

Damyant Jain's personal portfolio and blog website built with React.js, TailwindCSS, and Parcel bundler. Features dark/light mode themes, responsive design, portfolio showcase, and a blog system with authentication.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Setup
- Install Node.js dependencies: `npm install` -- takes ~48 seconds. NEVER CANCEL. Set timeout to 90+ seconds.
- Build the application: `npm run build` -- takes ~20 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- Start development server: `npm start` -- starts on http://localhost:1234 in ~2-3 seconds

### Development Workflow
- **ALWAYS run the bootstrapping steps first** when working with a fresh clone
- Development server: `npm start` serves on http://localhost:1234 with hot reload
- Production build: `npm run build` creates optimized assets in `/dist` directory
- Build artifacts are in `/dist` and should be ignored in git (already in .gitignore)

### Timing and NEVER CANCEL Rules
- **NEVER CANCEL**: npm install takes 48 seconds. Set timeout to 90+ minutes
- **NEVER CANCEL**: npm run build takes 20 seconds. Set timeout to 60+ seconds  
- npm start takes 2-3 seconds to initialize, then runs continuously
- Initial build after npm start takes ~40-80ms on subsequent changes

## Validation

### Manual Testing Scenarios
**ALWAYS manually validate any new code via browser testing when making changes to the React application.**

#### Core Functionality Testing
1. **Portfolio Navigation**: Test all navigation links (Home, Projects, Resume, Skills, Contact)
2. **Theme Toggle**: Click the sun/moon icon to test dark/light mode switching
3. **Responsive Design**: Test navigation on mobile (burger menu functionality)
4. **Project Cards**: Verify project images and external links work
5. **Contact Form**: Test contact section interactions
6. **Blog System**: Navigate to `/blog` (will show API errors without backend - this is expected)

#### Complete End-to-End Scenario
After making changes, ALWAYS run through this scenario:
1. Start development server: `npm start`
2. Navigate to http://localhost:1234
3. Test theme toggle (sun/moon icon in top right)
4. Navigate through all main sections (Home, Projects, Resume, Skills, Contact)
5. Test a project link to verify external navigation
6. Navigate to `/blog` to verify routing works (API errors expected)
7. Verify responsive design by resizing browser window

### Build Validation
- Always run `npm run build` before committing changes to verify production build works
- Check for any new warnings or errors in build output
- Verify build completes in ~20 seconds (normal timing)

## Linting and Code Quality

### Current Limitations
- **Jest testing**: Referenced in package.json but not actually installed - tests will fail with "jest: not found"
- **ESLint**: Available via npx but no configuration file exists - will error without eslint.config.js
- **Prettier**: Available via npx but no configuration file exists
- **No CI/CD**: No GitHub Actions workflows exist

### Available Tools
- ESLint: `npx eslint src/` (requires configuration setup)
- Prettier: `npx prettier src/` (requires configuration setup)
- Browserslist warning: Run `npx update-browserslist-db@latest` to update (safe to ignore)

### Recommended Setup for Code Quality
If adding linting/formatting, create:
- `eslint.config.js` for ESLint v9+ configuration
- `.prettierrc` for Prettier configuration
- Consider adding these as dev dependencies and npm scripts

## Project Structure and Navigation

### Key Directories
```
src/
├── components/          # React components
│   ├── Blog/           # Blog-related components
│   ├── Contact.jsx     # Contact section
│   ├── Experience.jsx  # Experience section
│   ├── Intro.jsx       # Landing/intro section
│   ├── NavBar.jsx      # Desktop navigation
│   ├── NavBarMobile.jsx # Mobile navigation
│   ├── Portfolio.jsx   # Main portfolio layout
│   ├── ProjectCard.jsx # Individual project cards
│   ├── Projects.jsx    # Projects section
│   ├── Resume.jsx      # Resume section
│   ├── Skills.jsx      # Skills section
│   └── TechIcons.jsx   # Technology icons
├── store/              # Redux state management
│   ├── appStore.js     # Redux store configuration
│   └── blogSlice.js    # Blog state slice
├── routes/             # React Router configuration
│   └── blogRoute.js    # Blog routing setup
├── context/            # React Context
│   └── ThemeContext.js # Dark/light theme context
├── db/                 # Static data files
│   ├── experience.js   # Experience data
│   ├── projects.js     # Projects data
│   ├── education.js    # Education data
│   ├── skills.js       # Skills data
│   └── nav.js          # Navigation data
├── util/               # Utility functions
│   ├── constants.js    # API URLs and constants
│   ├── customFetch.js  # Authenticated fetch wrapper
│   ├── tokenService.js # JWT token management
│   └── commonAPI.js    # API interaction functions
└── assets/             # Images and static assets
```

### Important Files to Know
- `src/App.js`: Main application entry point with routing setup
- `src/components/Portfolio.jsx`: Main portfolio page layout
- `src/util/constants.js`: API configuration (uses REACT_APP_API_URL env var)
- `tailwind.config.js`: TailwindCSS configuration
- `package.json`: Dependencies and scripts
- `netlify.toml`: Deployment configuration for Netlify
- `_redirects`: SPA routing configuration for Netlify

### Backend Integration
- API base URL configured via `REACT_APP_API_URL` environment variable
- Blog functionality requires backend API (will show errors without it)
- Authentication system exists for blog editing (JWT-based)
- API endpoints defined in `src/util/constants.js`

## Common Tasks

### Adding New Components
1. Create component in appropriate `src/components/` subdirectory
2. Follow existing naming convention (PascalCase for files)
3. Import and use in parent components
4. Test with `npm start` and verify styling

### Modifying Static Data
- Update `src/db/` files for experience, projects, education, skills
- Data is imported directly into components (no API calls for static content)
- Changes reflect immediately in development server

### Styling Changes
- Uses TailwindCSS utility classes
- Custom Tailwind configuration in `tailwind.config.js`
- Dark mode handled via `dark:` prefixes and theme context
- Custom fonts configured: Roboto, Lato, Montserrat, Open Sans, Poppins, Merriweather, Raleway

### Environment Configuration
- Create `.env` file for local development
- Set `REACT_APP_API_URL=your-api-endpoint` for backend integration
- Without API URL, blog features will show network errors (expected)

## Current State and Limitations

### What Works
- ✅ Portfolio display with all sections
- ✅ Dark/light theme toggle
- ✅ Responsive design and mobile navigation
- ✅ Project cards with external links
- ✅ Static content rendering (experience, education, skills)
- ✅ Blog routing and layout (frontend only)
- ✅ Production build process
- ✅ Development server with hot reload

### What Requires Backend
- ❌ Blog creation and editing (requires API)
- ❌ Blog authentication/login (requires API)
- ❌ Published blog display (requires API)
- ❌ Contact form submission (frontend only, no backend processing)

### Development Gaps
- ❌ No actual testing framework setup (despite package.json reference)
- ❌ No linting configuration files
- ❌ No GitHub Actions/CI-CD
- ❌ No Prettier configuration

## Deployment

### Netlify Configuration
- Configured for Netlify deployment via `netlify.toml`
- SPA routing handled by `_redirects` file
- Build command: `npm run build`
- Publish directory: `dist`

### Build Output
- All assets optimized and bundled in `/dist`
- Images automatically optimized by Parcel
- CSS purged and minified via TailwindCSS + Parcel
- JavaScript bundled and minified

---

**Remember**: Always test your changes thoroughly using the validation scenarios above. The application should load correctly, theme toggle should work, and navigation should be smooth across all sections.