# GSAFE Landing Page

This is a multi-language landing page for GSAFE security solutions, built with Next.js 15, TypeScript, Tailwind CSS, and internationalization support.

## Features

- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS and DaisyUI for styling
- Ant Design (antd) for UI components
- Multi-language support (English and Vietnamese)
- Responsive design
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/gsafe-landingpage.git
cd gsafe-landingpage
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
gsafe-next/
├── messages/              # Translation files
│   ├── en.json            # English translations
│   └── vi.json            # Vietnamese translations
├── public/                # Static assets
├── src/
│   ├── app/               # App Router
│   │   └── [locale]/      # Internationalized routes
│   │       ├── contact/   # Contact page
│   │       ├── device/    # Device page
│   │       ├── purchase/  # Purchase page
│   │       ├── globals.css
│   │       ├── layout.tsx # Root layout
│   │       └── page.tsx   # Home page
│   ├── components/        # UI components
│   │   ├── Footer.tsx    
│   │   └── Navbar.tsx    
│   ├── i18n.ts            # Internationalization configuration
│   └── middleware.ts      # Route handler middleware for i18n
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.ts         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## Internationalization

The application supports two languages:
- English (en) - Default
- Vietnamese (vi)

Language files are located in the `messages/` directory. To add a new language, create a new JSON file in the messages directory and update the `middleware.ts` file.

## Deployment

The application can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## License

MIT
