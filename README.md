
# IPL T20 Dashboard

Live at: [https://iplscrapping.vercel.app/](https://iplscrapping.vercel.app/)

An IPL dashboard built with Next.js, TypeScript, Tailwind CSS, and Puppeteer for scraping live data. View live/upcoming matches, points table, schedule, and team details in a modern, mobile-friendly UI.

## Features

- Live & Upcoming Matches
- IPL Points Table (scraped live)
- Match Schedule (grouped by date)
- Team Logos and Details
- Mobile-first responsive design
- Fast, serverless deployment on Vercel

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Puppeteer](https://pptr.dev/) & [chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda) for scraping
- Vercel for hosting

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Set up your `.env.local`:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

For Vercel deployment, set `NEXT_PUBLIC_BASE_URL` to your Vercel domain.

### Puppeteer on Vercel

This app uses Puppeteer with `chrome-aws-lambda` for serverless scraping. Make sure to install both:

```
npm install puppeteer-core chrome-aws-lambda
```

## Live Demo

Check out the live dashboard: [https://iplscrapping.vercel.app/](https://iplscrapping.vercel.app/)



You can start editing the page by modifying `app/page.tsx` or any component in `src/components/`.

---

Made with ❤️ by Tarun Dharmashya
