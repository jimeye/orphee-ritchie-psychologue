import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import HeroSlider from './HeroSlider';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  showHeroSlider?: boolean;
  heroImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaText?: string;
  heroCtaLink?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Psychologue à Saint Jean de Luz - Orphée Ritchie",
  description = "Psychologue bilingue à Saint Jean de Luz, spécialisée en thérapies intégratives pour enfants, adultes, couples et adolescents.",
  keywords = "psychologue, saint jean de luz, thérapie, enfants, adultes, couple, adolescents",
  showHeroSlider = true,
  heroImage,
  heroTitle,
  heroSubtitle,
  heroCtaText,
  heroCtaLink
}) => {
  const router = useRouter();

  // Configuration par défaut selon la page
  const getHeroConfig = () => {
    switch (router.pathname) {
      case '/':
        return {
          image: '/images/home-hero.webp',
          title: 'Bienvenue chez Orphée Ritchie',
          subtitle: 'Psychologue à Saint Jean de Luz',
          ctaText: 'Prendre rendez-vous'
        };
      case '/enfants':
        return {
          image: '/images/enfant-hero.webp',
          title: 'Accompagnement des enfants',
          subtitle: 'Dès l\'âge de 3 ans, un accompagnement bienveillant',
          ctaText: 'Prendre rendez-vous'
        };
      case '/adultes':
        return {
          image: '/images/adulte-hero.webp',
          title: 'Thérapies pour adultes',
          subtitle: 'Accompagnement personnalisé pour votre bien-être',
          ctaText: 'Prendre rendez-vous'
        };
      case '/couple':
        return {
          image: '/images/couple-hero.webp',
          title: 'Thérapie de couple',
          subtitle: 'Retrouver l\'harmonie dans votre relation',
          ctaText: 'Prendre rendez-vous'
        };
      case '/adolescents':
        return {
          image: '/images/adolescents-hero.webp',
          title: 'Accompagnement des adolescents',
          subtitle: 'Un soutien adapté à cette période de transition',
          ctaText: 'Prendre rendez-vous'
        };
      case '/bilan-psychologique':
        return {
          image: '/images/bilan-psychologique-hero.webp',
          title: 'Bilan psychologique',
          subtitle: 'Évaluation complète pour adolescents',
          ctaText: 'Prendre rendez-vous'
        };
      case '/contact':
        return {
          image: '',
          title: '',
          subtitle: '',
          ctaText: ''
        };
      default:
        return {
          image: '/images/home-hero.webp',
          title: 'Bienvenue chez Orphée Ritchie',
          subtitle: 'Psychologue à Saint Jean de Luz',
          ctaText: 'Prendre rendez-vous'
        };
    }
  };

  const heroConfig = getHeroConfig();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {showHeroSlider && router.pathname !== '/contact' && (
            <HeroSlider
              image={heroImage || heroConfig.image}
              title={heroTitle || heroConfig.title}
              subtitle={heroSubtitle || heroConfig.subtitle}
              ctaText={heroCtaText || heroConfig.ctaText}
              ctaLink={heroCtaLink}
            />
          )}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 