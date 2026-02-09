import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppProviders from '@/components/providers/AppProviders';
import GlobalErrorModal from '@/components/shared/GlobalErrorModal';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'CineMatch',
  description:
    'Track what you watch, find your next favorite movie with AI, and share your passion for cinema with friends on CineMatch.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <AppProviders>
          {children}
          <GlobalErrorModal />
        </AppProviders>
      </body>
    </html>
  );
}
