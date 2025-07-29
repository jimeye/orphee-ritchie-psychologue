import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const AdolescentsPage: React.FC = () => {
  return (
    <Layout>
      {/* Bloc texte personnalisé ADOLESCENTS */}
      <section className="bg-custom-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-custom-title mb-6 text-center">ADOLESCENTS</h2>
          <div className="text-custom-text text-justify space-y-4 text-lg">
            <p>L'adolescence est un moment charnière du développement. Elle est accompagnée de changements importants tant sur le plan physique que psychique. Une incompréhension, une distance peuvent alors s'installer entre les parents et l'adolescent. Dans d'autres cas il s'agit d'un comportement, ou d'une difficulté, que les parents, ou l'adolescent lui-même, ont du mal à décoder et du coup à résoudre seuls. Un accompagnement est alors nécessaire pour guider et offrir des outils adaptés à la situation et rétablir un dialogue et une communication. Il est souvent urgent de solutionner la douleur interne pour retrouver une paix intérieure et familiale.</p>
            <p>Il peut être difficile pour les parents de convaincre un ado d'aller voir un "psy", il dira souvent qu'il n'est pas fou et qu'il n'en a donc pas besoin. Dans tous les cas, il ne faut pas le forcer, n'hésitez pas à téléphoner au psychologue du cabinet qui vous indiquera la marche à suivre en fonction de l'adolescent et de sa difficulté.</p>
            <p>La démarche thérapeutique sera déterminée avec l'adolescent et sa famille. Des tests pourront être apportés par le psychologue pour affiner le diagnostic et cibler la thérapie avec sa durée et la fréquence des entretiens.</p>
            <p>Difficultés et troubles rencontrés:</p>
            <ul className="mx-auto text-center w-fit">
              <li>troubles de l'humeur, violence et opposition</li>
              <li>difficultés scolaires et orientation</li>
              <li>difficultés relationnelles avec les autres ou ses parents,</li>
              <li>problèmes familiaux</li>
              <li>conduite à risque</li>
              <li>addictions</li>
              <li>troubles alimentaires</li>
              <li>troubles de la personnalité</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Les défis de l'adolescence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Changements et bouleversements</h3>
              <p className="text-custom-text text-justify">
                L'adolescence est un moment charnière du développement accompagné de changements importants tant sur le plan physique que psychique. Ces transformations peuvent créer une incompréhension et une distance entre les parents et l'adolescent. Il est souvent urgent de solutionner la douleur interne pour retrouver une paix intérieure et familiale.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Comportements et difficultés</h3>
              <p className="text-custom-text text-justify">
                Il peut s'agir d'un comportement ou d'une difficulté que les parents, ou l'adolescent lui-même, ont du mal à décoder et du coup à résoudre seuls. Ces problématiques peuvent inclure des troubles de l'humeur, de la violence et opposition, des difficultés scolaires, des conduites à risque ou des addictions.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Relations et communication</h3>
              <p className="text-custom-text text-justify">
                Les difficultés relationnelles avec les autres ou ses parents, les problèmes familiaux, les troubles alimentaires et les troubles de la personnalité nécessitent un accompagnement pour guider et offrir des outils adaptés à la situation et rétablir un dialogue et une communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Ma vision de l'accompagnement adolescent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">1. Première<br className="md:hidden" /> rencontre</h3>
                <p className="text-custom-text text-justify md:text-center">
                  Il peut être difficile pour les parents de convaincre un ado d'aller voir un "psy", il dira souvent qu'il n'est pas fou et qu'il n'en a donc pas besoin. Dans tous les cas, il ne faut pas le forcer, n'hésitez pas à téléphoner au psychologue du cabinet qui vous indiquera la marche à suivre en fonction de l'adolescent et de sa difficulté.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">2. Démarche<br className="md:hidden" /> thérapeutique</h3>
                <p className="text-custom-text text-justify md:text-center">
                  La démarche thérapeutique sera déterminée avec l'adolescent et sa famille. Des tests pourront être apportés par le psychologue pour affiner le diagnostic et cibler la thérapie avec sa durée et la fréquence des entretiens. Un accompagnement est nécessaire pour guider et offrir des outils adaptés.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">3. Rétablissement<br className="md:hidden" /> du dialogue</h3>
                <p className="text-custom-text text-justify md:text-center">
                  L'objectif est de rétablir un dialogue et une communication entre l'adolescent et sa famille. Il s'agit de solutionner la douleur interne pour retrouver une paix intérieure et familiale, en offrant des outils adaptés à la situation spécifique de chaque adolescent.
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
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Modalités de consultation</h3>
              <p className="text-custom-text text-justify">
                Les séances durent généralement 45 minutes avec une fréquence adaptée aux besoins. La démarche thérapeutique est déterminée avec l'adolescent et sa famille. Des tests peuvent être apportés par le psychologue pour affiner le diagnostic et cibler la thérapie avec sa durée et la fréquence des entretiens.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Pourquoi consulter ?</h3>
              <p className="text-custom-text text-justify">
                L'adolescence est un moment charnière du développement avec des changements importants tant sur le plan physique que psychique. Une incompréhension peut s'installer entre les parents et l'adolescent. Un accompagnement est nécessaire pour guider et offrir des outils adaptés à la situation et rétablir un dialogue et une communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-custom-title mb-6">
            Besoin d'aide pour votre adolescent ?
          </h2>
          <p className="text-lg text-custom-text mb-8 max-w-2xl mx-auto">
            N'hésitez pas à prendre rendez-vous pour une première consultation. 
            Je suis là pour accompagner votre adolescent dans cette période de transition.
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

export default AdolescentsPage; 