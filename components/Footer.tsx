import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-background relative z-50" style={{ border: '4px solid red' }}>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Informations de contact */}
          <div>
            <h3 className="text-lg font-semibold text-custom-title mb-0">Orphée Ritchie</h3>
            <div className="space-y-0 text-custom-text">
              <p className="mb-0">Psychologue</p>
              <p className="mb-0">14 Avenue Pierre Loti,</p>
              <p className="mb-0">64500 Saint Jean de Luz</p>
              <p className="mt-1 mb-0">
                <a href="tel:+33658189799" className="hover:text-blue-600 transition-colors">
                  +33 6 58 18 97 99
                </a>
              </p>
              <p className="mb-0">
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  contact@orphee-ritchie.fr
                </Link>
              </p>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold text-custom-title mb-0">Consultations</h3>
            <ul className="space-y-0 text-custom-text">
              <li className="mb-0">
                <Link href="/enfants" className="hover:text-blue-600 transition-colors">
                  Enfants
                </Link>
              </li>
              <li className="mb-0">
                <Link href="/adultes" className="hover:text-blue-600 transition-colors">
                  Adultes
                </Link>
              </li>
              <li className="mb-0">
                <Link href="/couple" className="hover:text-blue-600 transition-colors">
                  Couple
                </Link>
              </li>
              <li className="mb-0">
                <Link href="/adolescents" className="hover:text-blue-600 transition-colors">
                  Adolescents
                </Link>
              </li>
              <li className="mb-0">
                <Link href="/bilan-psychologique" className="hover:text-blue-600 transition-colors">
                  Bilan Psychologique
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA et réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-custom-title mb-0">Prendre rendez-vous</h3>
            <div className="space-y-1">
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
                  className="h-8 w-auto"
                />
              </a>
              <div className="flex space-x-4">
                {/* Instagram si disponible */}
                <a
                  href="#"
                  className="text-custom-text hover:text-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-0">
                <Link href="/mentions-legales" className="hover:text-blue-600 transition-colors block mb-0">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="hover:text-blue-600 transition-colors block mt-0 mb-0">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mentions légales et copyright */}
        <div className="mt-1 pt-1 border-t border-custom-text">
          <div className="text-center text-sm text-custom-text">
            <p>
              © 2025 Orphée Ritchie - Psychologue.<br />
              Website design by{' '}
              <a 
                href="tel:+33608251223" 
                className="text-custom-text hover:text-blue-600 transition-colors no-underline"
              >
                STUDIO JOSEPH
              </a>
              {' '}- Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer; 