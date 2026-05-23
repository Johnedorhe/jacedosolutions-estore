
# E-Commerce Platform

This is a modern e-commerce web application built with [Next.js 16](https://nextjs.org) and [React 19](https://react.dev). It features a clean, responsive UI, shopping cart, authentication, and a scalable architecture for online stores.


## Features

- **Product Catalog** – Browse products with dynamic pages and category filtering
- **Shopping Cart** – Add, remove, and update items in a persistent cart sheet
- **Authentication** – User sign-in/sign-up with Clerk integration
- **Search** – Fast product search with a dedicated search bar
- **Mobile-First Design** – Fully responsive layout and navigation
- **Modern UI** – Built with [shadcn/ui](https://ui.shadcn.com) and [Radix UI](https://www.radix-ui.com)
- **TypeScript** – End-to-end type safety
- **Form Validation** – React Hook Form + Zod for robust forms


## Tech Stack

- **Framework:** Next.js 16
- **Runtime:** React 19
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui, Radix UI
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Authentication:** Clerk
- **Type Safety:** TypeScript


## Project Structure

```
├── app/                # Next.js app directory (routes, pages)
│   ├── page.tsx        # Landing page
│   ├── [slug]/         # Dynamic product pages
│   └── ...             # Other routes (login, list, etc.)
├── components/         # Reusable React components
│   ├── navbar.tsx      # Navigation bar
│   ├── search-bar.tsx  # Product search
│   ├── cartModal.tsx   # Shopping cart sheet/modal
│   ├── categories.tsx  # Category filter UI
│   ├── navicons.tsx    # Cart, notifications, profile icons
│   ├── links.tsx       # Navigation links
│   ├── mobile-links.tsx# Mobile navigation
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions, dummy data
├── public/             # Static assets (images, icons)
└── styles/             # Global styles and Tailwind config
```


## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

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
3. Visit [http://localhost:3000](http://localhost:3000) in your browser.


## Development Notes

- Edit pages/routes in the `app` directory
- Reusable UI in `components/`
- Cart logic is managed in `navbar.tsx` for demo purposes
- Tailwind CSS config: `tailwind.config.ts`
- Add new UI components using the `shadcn/ui` CLI
- Authentication is handled by Clerk (see their docs for setup)


## Available Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Run ESLint


## Deployment

Deploy with [Vercel](https://vercel.com) for best results:
1. Push your code to a Git repository
2. Import the project on Vercel
3. Vercel auto-detects Next.js and configures the build
4. Your app is live!

Or deploy to any Node.js-compatible host.


## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Clerk Authentication](https://clerk.com/docs)


## License

This project is open source and available under the MIT License.
