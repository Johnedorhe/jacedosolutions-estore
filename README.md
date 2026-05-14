# E-Commerce Platform

A modern e-commerce application built with [Next.js 16](https://nextjs.org) and [React 19](https://react.dev). This project provides a foundation for building scalable online shopping experiences with a focus on performance and user experience.

## Features

- **Modern UI Components** - Built with [shadcn/ui](https://ui.shadcn.com) and [Radix UI](https://www.radix-ui.com)
- **Responsive Design** - Tailwind CSS for responsive and customizable styling
- **Form Handling** - React Hook Form integrated with Zod for schema validation
- **Search Functionality** - Dedicated search bar component for product discovery
- **Mobile Navigation** - Mobile-optimized navigation links and responsive navbar
- **Type Safe** - Full TypeScript support for reliable development

## Tech Stack

- **Framework**: Next.js 16
- **Runtime**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui, Radix UI
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## Project Structure

```
├── app/              # Next.js app directory
│   ├── page.tsx      # Landing page
│   └── [slug]/       # Dynamic product pages
├── components/       # Reusable React components
│   ├── navbar.tsx    # Navigation bar
│   ├── search-bar.tsx # Product search
│   ├── footer.tsx    # Footer component
│   ├── links.tsx     # Navigation links
│   └── ui/           # shadcn/ui components
├── lib/              # Utility functions and helpers
├── public/           # Static assets
└── styles/           # Global styles and Tailwind config
```

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm/yarn

### Installation

1. Install dependencies:
```bash
pnpm install
# or
npm install
```

2. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Development

- Edit pages in the `app` directory to modify routes
- Components in `components` are reusable across pages
- Tailwind CSS can be customized in `tailwind.config.ts`
- Add new UI components using `shadcn/ui` CLI

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Deployment

Deploy easily using [Vercel](https://vercel.com) (recommended for Next.js):

1. Push your code to a Git repository
2. Import the project on Vercel
3. Vercel automatically detects Next.js and configures the build settings
4. Your app is live!

Alternatively, you can deploy to any Node.js compatible hosting platform.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## License

This project is open source and available under the MIT License.
