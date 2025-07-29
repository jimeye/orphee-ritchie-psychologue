import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const BilanPsychologiquePage: React.FC = () => {
  return (
    <Layout>
      {/* Bloc texte personnalisé BILAN PSYCHOLOGIQUE */}
      <section className="bg-custom-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-custom-title mb-6 text-center">BILAN PSYCHOLOGIQUE</h2>
          <div className="text-custom-text text-justify space-y-4 text-lg">
            <p>Le bilan psychologique est l'investigation approfondie d'une personne, appréciant l'ensemble de son fonctionnement psychique, tant sur le plan intellectuel qu'affectif. Il est composé d'entretiens et de tests psychologiques variés dont l'objectif est de cibler les éventuelles difficultés, atypies, et mettre en place une prise en charge adaptée.Il peut être destiné aux enfants, adolescents ou adultes. Il se fait à l'aide d'outils d'évaluation. Ces tests peuvent être basés sur le fonctionnement intellectuel et cognitif, sur la personnalité, la motivation et les intérêts. Ils sont donc choisis selon la problématique à analyser. Ils vont nous donner un éclairage objectif qui permet de dépister des difficultés ou au contraire des compétences spécifiques, d'orienter un diagnostic et d'apporter une aide efficace. Il peut être demandé par la famille, les enseignants, ou encore par les professionnels de santé qui gravitent autour de l'enfant, l'adolescent ou l'adulte concerné.C'est avant tout un éclairage objectif de la personne testée.</p>
            <p>Les échelles d'évaluation les plus couramment utilisées pour le fonctionnement intellectuel (QI) sont celles de Wechsler, à savoir la WPPSI et WISC V pour les enfants et adolescents et la WAIS pour les adultes. Pour les tests de personnalité, la première étape peut se faire avec le test de Rorschach (test projectif), et/ou le dessin, et/ou la figure de Rey. Ce ne sont que des exemples de tests qui doivent être définis et expliqués en séance.</p>
            <p>A quel âge peut-on se prêter à un bilan psychologique ?Les tests d'un bilan psychométrique peuvent être pratiqués à tout âge, à partir de 2 ans et demi, mais ne sont pas indispensables avant l'âge de 6 ans et réclament alors prudence : avant 6 ans, c'est avant tout l'actualité de la situation de l'enfant dans un stade de développement qui sera dessinée plutôt que les spécificités du fonctionnement intellectuel.</p>
            <p>Quand peut-on en faire la demande ?</p>
            <p>Leur application est le plus souvent initiée par des questionnements autour de:</p>
            <p>- l'aménagement de la scolarité de l'enfant, lorsque sont interrogées des hypothèses liées aux apprentissages scolaires, en termes de compétences cognitives (ex: précocité) ou au contraire de retard ou bien de troubles spécifiques (dyslexie, dyspraxie, dysphasie,...) ou encore de troubles du comportement, de l'attention, en passant par le désinvestissement scolaire ou la rupture.</p>
            <p>- l'éclairage supplémentaire requis lors d'une exploration médicale - après un accident, une maladie, un traitement lourd - ou d'un bilan orthophonique ou psychomoteur chez un enfant, adolescent ou adulte et qui a pour but d'améliorer un diagnostic et l'orientation vers les soins ou rééducations adaptés, voire vers d'autres bilans plus spécifiques.</p>
            <p>En tant que psychologue, je propose de m'appuyer sur les différents tests disponibles pour rédiger le bilan psychologique, de manière à adapter l'aide ou l'accompagnement au plus près des besoins. En d'autres termes, il ne s'agira pas seulement d'en déduire un fonctionnement intellectuel, mais aussi de comprendre une problématique globale, d'accueillir et d'accompagner une souffrance si elle se présente, pour aller vers une solution, qu'elle soit thérapeutique ou autre.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Les outils d'évaluation psychologique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Tests de fonctionnement intellectuel</h3>
              <p className="text-custom-text text-justify">
                Les échelles d'évaluation les plus couramment utilisées pour le fonctionnement intellectuel (QI) sont celles de Wechsler : WPPSI et WISC V pour les enfants et adolescents, WAIS pour les adultes. Ces tests permettent d'évaluer les capacités cognitives et d'identifier les éventuelles difficultés ou compétences spécifiques.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Tests de personnalité</h3>
              <p className="text-custom-text text-justify">
                Pour les tests de personnalité, la première étape peut se faire avec le test de Rorschach (test projectif), et/ou le dessin, et/ou la figure de Rey. Ces tests sont choisis selon la problématique à analyser et permettent d'explorer l'aspect affectif et émotionnel de la personne.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Évaluation adaptée</h3>
              <p className="text-custom-text text-justify">
                Les tests peuvent être basés sur le fonctionnement intellectuel et cognitif, sur la personnalité, la motivation et les intérêts. Ils sont donc choisis selon la problématique à analyser et donnent un éclairage objectif pour dépister des difficultés ou des compétences spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Ma vision de l'évaluation psychologique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">1. Investigation<br className="md:hidden" /> approfondie</h3>
                <p className="text-custom-text text-justify md:text-center">
                  Le bilan psychologique est l'investigation approfondie d'une personne, appréciant l'ensemble de son fonctionnement psychique, tant sur le plan intellectuel qu'affectif. Il est composé d'entretiens et de tests psychologiques variés dont l'objectif est de cibler les éventuelles difficultés, atypies, et mettre en place une prise en charge adaptée.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">2. Outils<br className="md:hidden" /> d'évaluation</h3>
                <p className="text-custom-text text-justify md:text-center">
                  Il se fait à l'aide d'outils d'évaluation choisis selon la problématique à analyser. Ces tests peuvent être basés sur le fonctionnement intellectuel et cognitif, sur la personnalité, la motivation et les intérêts. Ils vont nous donner un éclairage objectif qui permet de dépister des difficultés ou au contraire des compétences spécifiques.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">3. Diagnostic<br className="md:hidden" /> et orientation</h3>
                <p className="text-custom-text text-justify md:text-center">
                  L'objectif est d'orienter un diagnostic et d'apporter une aide efficace. Il peut être demandé par la famille, les enseignants, ou encore par les professionnels de santé qui gravitent autour de l'enfant, l'adolescent ou l'adulte concerné. C'est avant tout un éclairage objectif de la personne testée.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">4. Accompagnement<br className="md:hidden" /> adapté</h3>
                <p className="text-custom-text text-justify md:text-center">
                  En tant que psychologue, je propose de m'appuyer sur les différents tests disponibles pour rédiger le bilan psychologique, de manière à adapter l'aide ou l'accompagnement au plus près des besoins. Il ne s'agira pas seulement d'en déduire un fonctionnement intellectuel, mais aussi de comprendre une problématique globale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Informations pratiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Modalités de bilan</h3>
              <p className="text-custom-text text-justify">
                Les tests d'un bilan psychométrique peuvent être pratiqués à tout âge, à partir de 2 ans et demi, mais ne sont pas indispensables avant l'âge de 6 ans et réclament alors prudence. Avant 6 ans, c'est avant tout l'actualité de la situation de l'enfant dans un stade de développement qui sera dessinée plutôt que les spécificités du fonctionnement intellectuel.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Quand faire un bilan ?</h3>
              <p className="text-custom-text text-justify">
                L'application est le plus souvent initiée par des questionnements autour de l'aménagement de la scolarité de l'enfant, des difficultés d'apprentissage, de la précocité, des troubles spécifiques (dyslexie, dyspraxie, dysphasie), des troubles du comportement, ou encore lors d'une exploration médicale pour améliorer un diagnostic et l'orientation vers les soins adaptés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-custom-title mb-6">
            Besoin d'un bilan psychologique ?
          </h2>
          <p className="text-lg text-custom-text mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous pour une première consultation et discutons 
            de vos besoins en matière d'évaluation psychologique.
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
    </Layout>
  );
};

export default BilanPsychologiquePage; 