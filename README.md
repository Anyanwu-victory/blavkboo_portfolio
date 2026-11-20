# Blavkboo Portfolio

A responsive one-page portfolio for Ebube Felix Okolo (Blavkboo), an Abuja-based videographer and editor focused on general videography and automotive content.

## Features

- Light and dark themes, with the selected theme saved in the browser.
- Responsive poster-style home page and About section with bio, portrait, location, editing tools, and services.
- Social links for Instagram, TikTok, and YouTube, where the video work is hosted.
- Contact link that opens an email to `ebubefelix28@gmail.com`.
- Animated title and portrait, with reduced-motion support.
- A not-found screen for unknown paths.
- Favicon, app icons, and social sharing metadata.

## Requirements

- Node.js
- pnpm (the project specifies `pnpm@12.3.4`)

## Run locally

```sh
pnpm install
pnpm run dev
```

Vite serves the site on port `3001` (`strictPort` is enabled). Open the local URL printed in the terminal.

## Build and preview

```sh
pnpm run build
pnpm run preview
```

The production build is written to `dist/`.

## Social sharing preview

The page includes Open Graph and Twitter Card metadata. The existing cinematic hero image is used for the large preview image. During the Vite build, the configured deployment host is inserted into the image and page URLs.

The build reads the first available value from these environment variables:

1. `SITE_URL`
2. `URL` (commonly provided by Netlify)
3. `VERCEL_PROJECT_PRODUCTION_URL`
4. `DEPLOY_PRIME_URL`
5. `VERCEL_URL`

Set `SITE_URL` to the public production URL if the deployment platform does not provide one of these values. For local development, the metadata image path remains root-relative.

## Favicon and app icons

The favicon links in `index.html` use the files in `public/`: `favicon.ico`, the 16px and 32px PNGs, the Apple touch icon, and the Android icons referenced by `site.webmanifest`.

## Project structure

- `src/App.vue` — portfolio content and theme behavior.
- `src/style.css` — layout, responsive styles, and animations.
- `index.html` — document title, favicon links, and social metadata.
- `vite.config.js` — Vite configuration and deployment URL substitution for share metadata.
- `public/` — images, favicons, manifest, and other static assets.
