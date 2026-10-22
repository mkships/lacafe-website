import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Header from './ui/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'La Café | Bowls, Bites & Bakes',
  description: 'Gourmet food, mindfully made. Explore bowls, bites and bakes from La Café’s cloud kitchen, with estimated calories and serving sizes on every menu item.',
  icons: {
    icon: { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
};
export const viewport: Viewport = { themeColor: '#7B3225', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
