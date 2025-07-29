import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const AdultesPage: React.FC = () => {
  return (
    <Layout>
      {/* Bloc texte personnalisé ADULTES */}
      <section className="bg-custom-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-custom-title mb-6 text-center">ADULTES</h2>
          <div className="text-custom-text text-justify space-y-4 text-lg">
            <p>Les personnes qui viennent à ma rencontre souffrent de maux, de troubles et d’inconfort divers.</p>
            <p>Nous pouvons souffrir d’une situation de couple compliquée, d’un deuil, d’une maladie, d’addiction, de difficultés familiales, de complications avec ses enfants, de solitude, d’une gêne à trouver un ou une partenaire, de stress, d’angoisse professionnelle, d’incompatibilité sociale… Nous pouvons également être angoissés, anxieux, tristes sans savoir pourquoi.</p>
            <p>La souffrance des pensées, écoutée dès la première séance, permet d’agir rapidement et de travailler de manière ciblée. Il est aussi possible de ne pas savoir ce qui nous ronge. Un mal-être quotidien et lourd. C’est au fil des séances que nous pourrons toucher, approfondir et soulager l’origine des maux, en prenant soin de poser les bons mots.</p>
            <p>Nous pouvons aussi avoir des douleurs physiques qui restent inexplicables au niveau médical et qui deviennent trop envahissantes au quotidien.</p>
            <p>Toutes ces situations ont besoin d’une prise en charge psychologique et thérapeutique.</p>
            <p>Elle ne convient pas seulement à ceux et celles qui « ont des problèmes », comme on le croit souvent. Si tout le monde n’a pas besoin de « guérir », chacun et chacune peut s’épanouir davantage, apprendre à engager plus de recul, acquérir de nouvelles compétences relationnelles, changer des aspects insatisfaisants de sa vie, mieux comprendre son histoire, gagner en maîtrise et estime de soi. Il s’agit d’un investissement à long terme qui, en plus d’avoir un retour bénéfique profond, donne accès à un réservoir de ressources internes durables, ainsi qu’à des points de vue nouveaux sur soi et sur les autres. A partir de là jaillissent des actions et des décisions insoupçonnables auparavant.</p>
            <p className="font-semibold mt-6">Difficultés et troubles rencontrés :</p>
            <ul className="mx-auto text-center w-fit">
              <li>Stress</li>
              <li>Situation de souffrance physique et psychique, maladie</li>
              <li>Divorce, difficultés à rencontrer un ou une partenaire</li>
              <li>Dépression et troubles anxieux</li>
              <li>Conduite à risque</li>
              <li>Addictions</li>
              <li>Phobie et peur</li>
              <li>Incompatibilité sociale</li>
              <li>Perte d’un être cher, deuil</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Les situations rencontrées en thérapie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Souffrance psychique et émotionnelle</h3>
              <p className="text-custom-text text-justify">
                Beaucoup de personnes consultent pour des troubles anxieux, des états dépressifs, des peurs, des phobies ou un mal-être diffus. Parfois, la souffrance n’a pas de cause évidente : elle se manifeste par de l’angoisse, de la tristesse, du stress ou une perte de sens. Le travail thérapeutique permet d’identifier, de comprendre et d’apaiser ces états.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Difficultés relationnelles et familiales</h3>
              <p className="text-custom-text text-justify">
                Les difficultés de couple, les séparations, les conflits familiaux, la solitude, les complications avec les enfants ou la difficulté à rencontrer un partenaire sont des motifs fréquents de consultation. La thérapie aide à mieux comprendre ses relations, à dépasser les blocages et à retrouver un équilibre affectif.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Souffrance physique, addictions et deuil</h3>
              <p className="text-custom-text text-justify">
                Certaines douleurs physiques restent inexpliquées médicalement et deviennent envahissantes. Les addictions, les conduites à risque, la perte d’un être cher ou un deuil difficile nécessitent un accompagnement spécifique pour retrouver un mieux-être et des ressources internes durables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche thérapeutique */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Ma vision de l’accompagnement psychologique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Un accompagnement sur mesure</h3>
              <p className="text-custom-text text-justify">
                Chaque personne est unique. J’adapte mon accompagnement à votre histoire, vos besoins et vos objectifs. Nous avançons à votre rythme, en prenant le temps de comprendre ce qui vous freine et ce qui peut vous aider à aller mieux. La relation thérapeutique est un espace de confiance, d’écoute et de respect.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Déroulement d’une thérapie</h3>
              <p className="text-custom-text text-justify">
                La première séance permet d’exprimer vos attentes, vos difficultés et de poser les bases du travail thérapeutique. Les séances suivantes sont construites autour de vos besoins : écoute active, outils adaptés, travail sur les émotions, les pensées et les comportements. Un suivi régulier permet d’ajuster l’accompagnement et de mesurer les progrès.
              </p>
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
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Modalités</h3>
              <p className="text-custom-text text-justify">
                Les séances durent généralement 45 minutes et se déroulent sur rendez-vous, en cabinet ou en ligne selon vos besoins. Le respect de la confidentialité et du secret professionnel est garanti. La fréquence des séances est adaptée à votre situation et à votre rythme.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Pourquoi consulter ?</h3>
              <p className="text-custom-text text-justify">
                Il est utile de consulter dès lors que vous ressentez une souffrance, une difficulté persistante, un mal-être ou un besoin de soutien. La thérapie s’adresse à toute personne souhaitant mieux se comprendre, dépasser une période difficile, ou simplement s’épanouir davantage dans sa vie personnelle, relationnelle ou professionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-custom-title mb-6">
            Besoin d'aide pour vous-même ?
          </h2>
          <p className="text-lg text-custom-text mb-8 max-w-2xl mx-auto">
            N'hésitez pas à prendre rendez-vous pour une première consultation. 
            Je suis là pour vous accompagner dans votre parcours de soins.
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

export default AdultesPage; 