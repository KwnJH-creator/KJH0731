"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="header glass-nav">
      <div className="container header-container">
        <Link href="/" className="logo">
          JH.Kwon
        </Link>
        <nav className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/blog" className={pathname?.startsWith('/blog') ? 'active' : ''}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}
