import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const EnfantsPage: React.FC = () => {
  return (
    <Layout>
      {/* Bloc texte personnalisé ENFANTS */}
      <section className="bg-custom-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-custom-title mb-6 text-center">ENFANTS</h2>
          <div className="text-custom-text text-justify space-y-4 text-lg">
            <p>La décision d’emmener son enfant chez un psychologue n’est pas toujours une démarche aisée, et elle est le plus souvent basée sur les symptômes rencontrés, qui inquiètent et alertent les parents.</p>
            <p>Nous pourrions les classer en 3 catégories selon l’âge de l’enfant:</p>
            <p><b>Avant 3 ans</b>, cela concerne principalement les troubles du sommeil, l’hyperactivité et les problèmes de développement tels que le langage, l’acquisition de la marche, et la notion de propreté.</p>
            <p><b>Après 3 ans</b>, et l’arrivée en école maternelle, un nouvel aspect va apparaitre avec la séparation des parents et l’introduction de la socialisation. Certains enfants peuvent développer des comportements plus ou moins inadaptés, comme par exemple les morsures et coups sur les autres élèves, l’incapacité de se concentrer, ou une difficulté à manger à la cantine.</p>
            <p><b>Autour des 6 ans</b> et le passage en école primaire, les problématiques ont tendance à s’orienter vers des difficultés d’ordre scolaire tels que la dyslexie et la précocité, et aussi sur la structuration de la socialisation.</p>
            <p>Vers la fin de l’école primaire, l’enfant va devoir se préparer à la transition vers le collège. C’est une étape qui demande plus d’autonomie et d’indépendance auxquels certains enfants ne sont pas prêts. Le regard des autres devient de plus en plus prédominant. Les interactions sociales se compliquent et les enjeux augmentent. La concentration, le décrochage scolaire, la raillerie, ou plus, des camarades sont autant de difficultés à affronter au quotidien.</p>
            <p>En 4ième et 3ième, les psychologues voient apparaitre une nouvelle catégorie de troubles tels que les scarifications, les troubles alimentaires et les addictions.</p>
            <p>Le psychologue permet de se poser en interprète des manifestations de l’enfant. Il aide l’enfant à mettre des mots sur ce qu’il ressent. Il décode les émotions, les blocages et les inquiétudes et offre des outils adaptés afin d’amener un apaisement rapidement.</p>
            <p>Le psychologue va prendre en compte la dimension individuelle et familiale de l’enfant dès le premier entretien. Il va déterminer la démarche thérapeutique avec l’enfant et le ou les parents présents selon les besoins.</p>
            <p className="font-semibold mt-6">Difficultés et troubles rencontrés :</p>
            <ul className="mx-auto text-center w-fit">
              <li>difficultés d’apprentissage de la propreté</li>
              <li>troubles du sommeil</li>
              <li>troubles de l’alimentation</li>
              <li>troubles comportementaux</li>
              <li>troubles du langage</li>
              <li>essoufflement de la motivation</li>
              <li>incapacité à accepter la discipline</li>
              <li>difficultés scolaires</li>
              <li>troubles de l’humeur</li>
              <li>hyperactivité</li>
              <li>précocité</li>
              <li>crises d’angoisse</li>
              <li>perte de confiance en soi</li>
              <li>difficultés relationnelles avec les autres ou ses parents</li>
              <li>harcèlement</li>
              <li>conduite à risque</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Mes domaines d'intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Difficultés<br className="md:hidden" /> développementales</h3>
              <p className="text-custom-text text-justify">
                Avant 3 ans, l’enfant peut rencontrer des troubles du sommeil, de l’hyperactivité ou des retards dans le développement du langage, de la marche ou de la propreté. Un accompagnement précoce permet de soutenir l’enfant dans ses premiers apprentissages et d’apaiser les inquiétudes parentales.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Difficultés<br className="md:hidden" /> familiales</h3>
              <p className="text-custom-text text-justify">
                Après 3 ans, la séparation des parents et l’entrée à l’école maternelle peuvent générer des difficultés d’adaptation. Certains enfants expriment leur mal-être par des comportements inadaptés (morsures, coups, difficultés à se concentrer ou à manger à la cantine). Le psychologue aide à comprendre et à gérer ces situations.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Troubles<br className="md:hidden" /> émotionnels</h3>
              <p className="text-custom-text text-justify">
                À partir de 6 ans et jusqu’à l’adolescence, les problématiques évoluent vers des difficultés scolaires (dyslexie, précocité), des troubles de la socialisation, de l’humeur, de la confiance en soi, ou encore des conduites à risque. Le psychologue accompagne l’enfant et sa famille pour traverser ces étapes et prévenir l’apparition de troubles plus graves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Comment se déroule l'accompagnement ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">1. Première<br className="md:hidden" /> rencontre</h3>
                <p className="text-custom-text text-justify md:text-center">
                  Lors de la première rencontre, un entretien est mené avec les parents (et parfois l’enfant) afin de recueillir les inquiétudes, comprendre le contexte familial et scolaire, et cibler les symptômes ou difficultés observés. Cette étape permet d’instaurer un climat de confiance et de poser les bases de l’accompagnement.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">2. Évaluation</h3>
                <p className="text-custom-text text-justify md:text-center">
                  L’évaluation se fait à travers l’observation, le dialogue, le jeu et parfois des tests adaptés à l’âge de l’enfant. Elle permet d’identifier les ressources, les blocages, les troubles éventuels (langage, comportement, apprentissages, socialisation) et de mieux cerner les besoins spécifiques de l’enfant.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">3. Accompagnement</h3>
                <p className="text-custom-text text-justify md:text-center">
                  L’accompagnement se construit sur mesure : il peut inclure des séances individuelles avec l’enfant, des temps d’échange avec les parents, et des outils adaptés (jeu, expression des émotions, techniques de relaxation, guidance parentale). L’objectif est d’aider l’enfant à surmonter ses difficultés, à s’épanouir et à retrouver un équilibre au sein de sa famille et de son environnement.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Modalités</h3>
              <p className="text-custom-text text-justify">
                Les séances durent généralement 45 minutes et leur fréquence est adaptée aux besoins de l’enfant et de sa famille. L’accompagnement peut inclure des séances individuelles, des temps d’échange avec les parents, et parfois des rencontres en famille pour favoriser la compréhension et l’évolution globale de l’enfant.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Mon approche</h3>
              <p className="text-custom-text text-justify">
                Mon approche est centrée sur l’écoute, la bienveillance et l’adaptation à chaque enfant. J’utilise des outils variés : jeu, expression des émotions, relaxation, guidance parentale, et je travaille en lien avec les familles et, si besoin, avec d’autres professionnels (enseignants, médecins, etc.) pour un accompagnement global et cohérent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-custom-title mb-6">
            Besoin d'aide pour votre enfant ?
          </h2>
          <p className="text-lg text-custom-text mb-8 max-w-2xl mx-auto">
            N'hésitez pas à prendre rendez-vous pour une première consultation. 
            Je suis là pour accompagner votre enfant dans son développement.
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

export default EnfantsPage; 