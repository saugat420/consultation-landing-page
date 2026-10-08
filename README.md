# Digital Saugat Consultation Landing Page

A mobile-first, conversion-focused Next.js landing page for Digital Saugat's free one-to-one digital marketing consultation.

## Routes

- `/` — landing page, benefits, consultation process, and demo form
- `/thank-you` — honest demo confirmation page

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Production builds

- Sites: `npm run build`
- Vercel: `vercel.json` automatically selects the Next.js build via `npm run build:vercel`

For Vercel, import this project and keep the framework preset as Next.js. The committed `vercel.json` overrides the Sites/Vinext build command automatically. No environment variables are required for the demo version.

## Brand updates

- Logo: replace `public/logo.webp` with an image of the same name and preserve its aspect ratio.
- Colors and shared styling: edit the tokens at the top of `app/globals.css`.
- Page metadata: edit `app/layout.tsx`.

## Connect a real form endpoint

The demo submit flow is isolated in `components/CTAForm.tsx`. Replace the simulated timeout with a request to a server action or API route, send the same form fields, handle the endpoint's failure response, and redirect to `/thank-you` only after the backend confirms success. Keep validation on both the client and server. Add secrets through the deployment platform's environment settings, never in source code.

Current submissions are simulated. Data is not sent or saved.
