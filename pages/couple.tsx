import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const CouplePage: React.FC = () => {
  return (
    <Layout>
      {/* Bloc texte personnalisé COUPLES */}
      <section className="bg-custom-background py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-custom-title mb-6 text-center">COUPLES</h2>
          <div className="text-custom-text text-justify space-y-4 text-lg">
            <p>La thérapie de couple, tout comme la thérapie individuelle, est une démarche répondant au désir de quitter une souffrance.</p>
            <p>Bien que la thérapie de couple soit généralement adressée aux couples en crise, elle peut également aider les couples ayant de légers problèmes de communication ou souffrant de disputes à répétition. Il n&apos;est donc pas nécessaire d&apos;attendre d&apos;être au bord de la rupture pour consulter à deux.</p>
            <p>Il n&apos;y a pas de problème type menant à la thérapie conjugale. Cela peut aller de la peur de l&apos;engagement à la violence. Le problème peut prendre plusieurs formes telles que le refus de se marier, des crises d&apos;insultes ou encore des claquements de porte quotidiens. Ce désarroi peut être aussi fort que l&apos;amour qu&apos;il y a dans le couple.</p>
            <p>À quoi ressemble une séance de thérapie de couple ?</p>
            <p>La méthode choisie dépendra en grande partie des problèmes auxquels sont confrontés le couple. Les difficultés d&apos;une relation peuvent être liées soit à un problème du couple, soit à un problème qui touche l&apos;un des partenaires et impacte sur le couple. Le psychologue doit diagnostiquer la situation, percevoir les conséquences et orienter justement chacun des partenaires. Parfois il s&apos;agira d&apos;une thérapie individuelle afin que le couple ne subisse plus les conséquences des problèmes personnels d&apos;un des partenaires. Parfois il s&apos;agira d&apos;une thérapie à deux qui travaillera sur la communication à l&apos;intérieur du couple qui ne fonctionne plus de façon bénéfique.</p>
            <p>Difficultés et troubles rencontrés:</p>
            <ul className="mx-auto text-center w-fit">
              <li>violence conjugale</li>
              <li>disputes à répétitions</li>
              <li>sexualité</li>
              <li>problèmes familiaux</li>
              <li>conduite à risque</li>
              <li>addictions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Les problématiques conjugales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Crises et conflits</h3>
              <p className="text-custom-text text-justify">
                Les couples consultent souvent pour des disputes répétitives, des crises d&apos;insultes, des claquements de porte quotidiens ou des problèmes de communication qui créent une souffrance mutuelle. Ces conflits peuvent masquer des difficultés plus profondes liées à la peur de l&apos;engagement, au manque de confiance ou à des blessures émotionnelles non résolues.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Violence et souffrance</h3>
              <p className="text-custom-text text-justify">
                La violence conjugale, qu&apos;elle soit physique, psychologique ou verbale, nécessite une prise en charge spécialisée. Le désarroi peut être aussi fort que l&apos;amour qu&apos;il y a dans le couple. Il est important de ne pas attendre d&apos;être au bord de la rupture pour consulter et de reconnaître que la souffrance justifie une démarche thérapeutique.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Problèmes relationnels</h3>
              <p className="text-custom-text text-justify">
                Les difficultés peuvent prendre plusieurs formes : refus de se marier, problèmes de sexualité, conduites à risque, addictions, ou interférences familiales. Ces problématiques impactent la dynamique du couple et nécessitent un travail sur la communication et les dynamiques relationnelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Ma vision de l&apos;accompagnement conjugal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">1. Diagnostic<br className="md:hidden" /> de la situation</h3>
                <p className="text-custom-text text-justify md:text-center">
                  Le psychologue doit diagnostiquer la situation, percevoir les conséquences et orienter justement chacun des partenaires. Il détermine si les difficultés sont liées à un problème du couple ou à un problème personnel qui impacte la relation. Cette évaluation permet de choisir la méthode thérapeutique la plus adaptée.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">2. Choix<br className="md:hidden" /> thérapeutique</h3>
                <p className="text-custom-text text-justify md:text-center">
                  Parfois il s&apos;agira d&apos;une thérapie individuelle afin que le couple ne subisse plus les conséquences des problèmes personnels d&apos;un des partenaires. Parfois il s&apos;agira d&apos;une thérapie à deux qui travaillera sur la communication à l&apos;intérieur du couple qui ne fonctionne plus de façon bénéfique.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-custom-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">3. Travail<br className="md:hidden" /> d&apos;évolution</h3>
                <p className="text-custom-text text-justify md:text-center">
                  La méthode choisie dépendra en grande partie des problèmes auxquels sont confrontés le couple. L&apos;objectif est de rétablir une communication bénéfique, de résoudre les conflits et de permettre aux partenaires de retrouver une relation épanouissante basée sur la compréhension mutuelle.
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
                Les séances de thérapie de couple durent généralement 60 minutes et se déroulent avec les deux partenaires. La fréquence est adaptée aux besoins du couple et à la nature des difficultés rencontrées. Il n&apos;est pas nécessaire d&apos;attendre d&apos;être au bord de la rupture pour consulter - même des problèmes de communication légers peuvent bénéficier d&apos;un accompagnement.
              </p>
            </div>
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4 text-center">Pourquoi consulter ?</h3>
              <p className="text-custom-text text-justify">
                La thérapie de couple s&apos;adresse aux couples en crise mais aussi à ceux ayant de légers problèmes de communication ou souffrant de disputes à répétition. Il n&apos;y a pas de problème type - cela peut aller de la peur de l&apos;engagement à la violence. L&apos;important est de ne pas laisser la souffrance s&apos;installer durablement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-custom-title mb-6">
            Besoin d&apos;aide pour votre couple ?
          </h2>
          <p className="text-lg text-custom-text mb-8 max-w-2xl mx-auto">
            N&apos;hésitez pas à prendre rendez-vous pour une première consultation. 
            Je suis là pour accompagner votre couple dans cette démarche thérapeutique.
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

export default CouplePage; 