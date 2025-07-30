import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Pages dans l'ordre du menu
  const pages = [
    { path: '/', name: 'Accueil' },
    { path: '/enfants', name: 'Enfants' },
    { path: '/adultes', name: 'Adultes' },
    { path: '/couple', name: 'Couple' },
    { path: '/adolescents', name: 'Adolescents' },
    { path: '/bilan-psychologique', name: 'Bilan' },
    { path: '/contact', name: 'Contact' }
  ];

  // Gestion du swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      const currentIndex = pages.findIndex(page => page.path === router.pathname);
      let nextIndex;

      if (isLeftSwipe) {
        // Swipe gauche = page suivante
        nextIndex = (currentIndex + 1) % pages.length;
      } else {
        // Swipe droite = page précédente
        nextIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
      }

      if (pages[nextIndex].path !== '/') {
        router.push(pages[nextIndex].path);
      }
    }
  };

  return (
    <Layout>
      <div 
        className="min-h-screen"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
                {/* Section Introduction */}
          <section className="bg-custom-background py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-custom-title mb-6">
              INTRODUCTION
            </h2>
            <div className="text-lg text-custom-text max-w-4xl mx-auto text-left space-y-4">
              <p>
                Psychologue, psychothérapeute, diplômée de l&apos;Université Paris X Nanterre, bilingue anglaise, 
                je vous accueille à mon cabinet de Saint Jean de Luz, afin de mettre en place une prise en charge 
                ciblée et intégrative, adaptée à votre demande et vos spécificités.
              </p>
              <p>
                Le premier pas peut sembler difficile mais, une fois passé, la rencontre apporte un bien être 
                et un apaisement inestimables.
              </p>
              <p>
                La psychothérapie se déroule en deux temps.
              </p>
              <p>
                L&apos;évaluation s&apos;engage dès le premier entretien. Cette étape permet de définir la nature des 
                difficultés psychologiques ou des troubles rencontrés, et ainsi établir avec le patient les 
                objectifs du travail psychothérapeutique et les moyens mis en œuvre pour les atteindre.
              </p>
              <p>
                Le second temps est consacré au démarrage de la psychothérapie avec un nombre de séances qui 
                varie en fonction des obstacles décelés et des objectifs fixés. Dans les thérapies cognitives 
                et comportementales, le travail va cibler trois aspects de notre fonctionnement psychologique : 
                les pensées-cognitions, les émotions et les comportements. Ainsi, selon la nature des troubles 
                pris en charge, les séances vont se consacrer à faire évoluer les réactions comportementales, 
                à gérer les aspects émotionnels et/ou à faire évoluer les schémas de pensées impliqués dans 
                les situations problématiques exposées par le patient.
              </p>
              <p>
                A l&apos;issue de la psychothérapie, une évolution objective de la situation devra être observée 
                permettant de mettre un terme à la prise en charge. Certains patients peuvent ensuite souhaiter 
                approfondir des aspects cognitifs spécifiques en poursuivant les rendez-vous ou en s&apos;engageant 
                dans une autre forme de psychothérapie.
              </p>
              <div className="text-center">
                <p className="font-semibold mb-4">
                  Prise de rendez-vous, cliquez sur le lien Doctolib ci-dessous.
                </p>
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
                    className="h-12 w-auto"
                  />
                </a>
                <div className="mt-2 w-full h-0.5 bg-custom-text"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="bg-custom-background py-4 md:py-12">
        <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-2 md:mb-4">
            Mes spécialités
          </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-8">
                                <div className="text-center">
                  <div className="bg-custom-background rounded-lg p-2 md:p-6 h-40 md:h-64 flex flex-col justify-between">
                    <div>
                                          <h3 className="text-xl font-semibold text-custom-title mb-4 text-center"><span className="text-custom-background">psychologique</span><br className="md:hidden" /> Enfants</h3>
                      <p className="text-custom-text mb-0 md:mb-4 text-justify md:text-center">
                        Accompagnement dès l&apos;âge de 3 ans pour les difficultés développementales et familiales avec une approche personnalisée.
                      </p>
                    </div>
                    <Link href="/enfants" className="text-custom-subtitle hover:text-custom-title transition-colors">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
                                <div className="text-center">
                  <div className="bg-custom-background rounded-lg p-2 md:p-6 h-40 md:h-64 flex flex-col justify-between">
                    <div>
                                          <h3 className="text-xl font-semibold text-custom-title mb-4 text-center"><span className="text-custom-background">psychologique</span><br className="md:hidden" /> Adultes</h3>
                      <p className="text-custom-text mb-0 md:mb-4 text-justify md:text-center">
                        Thérapies pour les troubles anxieux, dépressifs et les difficultés de vie quotidienne avec un accompagnement adapté.
                      </p>
                    </div>
                    <Link href="/adultes" className="text-custom-subtitle hover:text-custom-title transition-colors">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-custom-background rounded-lg p-2 md:p-6 h-40 md:h-64 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Bilan psychologique</h3>
                      <p className="text-custom-text mb-0 md:mb-4 text-justify md:text-center">
                        Évaluation complète des capacités cognitives et émotionnelles pour diagnostic avec des outils spécialisés.
                      </p>
                    </div>
                    <Link href="/bilan-psychologique" className="text-custom-subtitle hover:text-custom-title transition-colors">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
                                <div className="text-center">
                  <div className="bg-custom-background rounded-lg p-2 md:p-6 h-40 md:h-64 flex flex-col justify-between">
                    <div>
                                          <h3 className="text-xl font-semibold text-custom-title mb-4 text-center"><span className="text-custom-background">psychologique</span><br className="md:hidden" /> Couple</h3>
                      <p className="text-custom-text mb-0 md:mb-4 text-justify md:text-center">
                        Thérapie de couple pour retrouver l&apos;harmonie et améliorer la communication avec des techniques éprouvées.
                      </p>
                    </div>
                    <Link href="/couple" className="text-custom-subtitle hover:text-custom-title transition-colors">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
                                <div className="text-center">
                  <div className="bg-custom-background rounded-lg p-2 md:p-6 h-40 md:h-64 flex flex-col justify-between">
                    <div>
                                          <h3 className="text-xl font-semibold text-custom-title mb-4 text-center"><span className="text-custom-background">psychologique</span><br className="md:hidden" /> Adolescents</h3>
                      <p className="text-custom-text mb-0 md:mb-4 text-justify md:text-center">
                        Soutien adapté pour cette période de transition et de construction identitaire avec un suivi personnalisé.
                      </p>
                    </div>
                    <Link href="/adolescents" className="text-custom-subtitle hover:text-custom-title transition-colors">
                      En savoir plus →
                    </Link>
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-custom-background py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-custom-title mb-6">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-lg text-custom-text mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous en ligne pour une première consultation. 
            Je suis là pour vous accompagner dans votre bien-être.
          </p>
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
              className="h-12 w-auto"
            />
          </a>
          <div className="mt-2 w-full h-0.5 bg-custom-text"></div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default HomePage;