import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  const navigation = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'ENFANTS', href: '/enfants' },
    { name: 'ADULTES', href: '/adultes' },
    { name: 'COUPLE', href: '/couple' },
    { name: 'ADOLESCENTS', href: '/adolescents' },
    { name: 'BILAN PSYCHOLOGIQUE', href: '/bilan-psychologique' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href: string) => router.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.location.pathname === '/contact' ? 50 : 100;

      if (currentScrollY > threshold) {
        setIsScrolled(true); // header caché
      } else {
        setIsScrolled(false); // header visible
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 md:bg-custom-background md:bg-opacity-20 transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-2 py-1 text-xs font-medium transition-colors leading-tight ${
                  isActive(item.href)
                    ? 'text-menu-active'
                    : 'text-menu-normal hover:text-menu-hover'
                }`}
                style={{
                  lineHeight: '1.5',
                  letterSpacing: '0.1em'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://www.doctolib.fr/psychologue/saint-jean-de-luz/orphee-ritchie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image
                src="/images/bouton-doctolib.webp"
                alt="Prendre rendez-vous sur Doctolib"
                width={120}
                height={44}
                className="h-9 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-menu-normal hover:text-menu-hover focus:outline-none focus:text-menu-hover"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-0 pb-0 space-y-0 sm:px-3 text-right -mt-2 -ml-16">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-0 text-sm font-medium transition-colors leading-tight ${
                    isActive(item.href)
                      ? 'text-menu-active'
                      : 'text-menu-normal hover:text-menu-hover'
                  }`}
                  style={{
                    lineHeight: '1.4',
                    letterSpacing: '0.1em'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-0 text-right">
                <a
                  href="https://www.doctolib.fr/psychologue/saint-jean-de-luz/orphee-ritchie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src="/images/bouton-doctolib.webp"
                    alt="Prendre rendez-vous sur Doctolib"
                    width={120}
                    height={44}
                    className="h-9 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 