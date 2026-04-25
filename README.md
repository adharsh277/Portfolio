# AI Infrastructure Portfolio

Production-style personal portfolio for Adharsh, focused on cloud, DevOps, platform engineering, certifications, and open-source contributions.

Live demo: [https://adharsh-chi.vercel.app](https://adharsh-chi.vercel.app)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Create production build

```bash
npm run build
```

## Main Sections in the Portfolio

- Hero / Identity
- Recognized and Certified by (logo rotator)
- Credentials (Certifications + Open Source Contributions)
- Selected Work
- Experience Timeline
- Skills
- Blogs, testimonials, and contact

## Important Content Locations

- Main page composition: `src/components/portfolio/system-interface.tsx`
- Identity/hero content: `src/components/portfolio/identity-panel.tsx`
- Credentials + contribution cards: `src/components/portfolio/credentials-contributions.tsx`
- Certifications and open-source data: `src/data/portfolio-data.ts`
- Certification card artwork: `public/certifications/`
- Recognition logos: `public/stack-logos/`

## Resume Download Setup

The **Get Resume** button is wired to:

`/Adharsh%20U.pdf`

So place the resume file at:

`public/Adharsh U.pdf`

You can rename the file, but then update the link in:

`src/components/portfolio/identity-panel.tsx`

## Certifications Section

Certification cards are data-driven from `src/data/portfolio-data.ts`.

Each certification item supports:

- `title`
- `issuer`
- `date`
- `badge`
- `image`
- `imageAlt`
- `certificateUrl` (optional; used by **View Certificate** action)

If `certificateUrl` is missing, the card falls back to opening the image.

## Open Source Contributions Section

Open-source cards are configured in `openSourceContributions` inside:

`src/data/portfolio-data.ts`

Each item uses:

- `name`
- `organization`
- `href`
- `summary`
- `highlights`

## Contact Form Behavior

The contact form opens the visitor's email client with a prefilled draft addressed to:

`adharshu777@gmail.com`

No backend API is required for this behavior.

## Deployment

Recommended: Vercel.

For other platforms, ensure Node version and Next.js build/start flow are supported.
