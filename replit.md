# pflexh - Architecture & Interior Design Portfolio

## Project Overview
A professional portfolio website for an architecture and interior design firm. Single-page Angular application (SPA) showcasing projects, services, team members, and a contact form.

## Tech Stack
- **Framework:** Angular 21 (Standalone Components, Signals API)
- **Language:** TypeScript, HTML, SCSS
- **UI Libraries:** Angular Material/CDK v21, Tailwind CSS v4, FontAwesome
- **Email:** EmailJS (`@emailjs/browser`) for contact form submissions
- **Build System:** Angular CLI with `@angular/build:application` (Vite-based)
- **Package Manager:** npm

## Project Structure
```
src/app/
  features/
    carrossel/      - Homepage image slider
    contato/        - Contact form + EmailService
    parceiros/      - Partner logos
    projetos/       - Architectural project showcase and modals
    sobre/          - About Us section
    time/           - Team member profiles
  layouts/
    header/         - Global navigation header
    footer/         - Global footer
  environment/
    environment.ts      - Dev environment config (EmailJS keys)
    environment.prod.ts - Prod environment config
public/             - Static assets (images, icons)
```

## Development
- **Workflow:** "Start application" — `NG_CLI_ANALYTICS=false ng serve --host 0.0.0.0 --port 5000`
- **Port:** 5000 (webview)
- `allowedHosts: true` set in `angular.json` for Replit proxy compatibility

## Deployment
- **Type:** Static site
- **Build command:** `npm run build`
- **Output directory:** `dist/pflexh/browser`

## Environment Variables
- EmailJS credentials are stored in `src/app/environment/environment.ts` (placeholder values by default — need real keys for contact form to work)
