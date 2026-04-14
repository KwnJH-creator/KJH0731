import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kwon Ju-hwan | Portfolio & Blog',
  description: 'Personal portfolio and tech blog of Kwon Ju-hwan, an engineering freshman.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="page-wrapper container animate-fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
