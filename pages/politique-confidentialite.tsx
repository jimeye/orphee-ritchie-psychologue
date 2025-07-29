import React from 'react';
import Layout from '../components/Layout';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <Layout
      title="Politique de confidentialité - Orphée Ritchie Psychologue"
      description="Politique de confidentialité et protection des données personnelles - Cabinet d&apos;Orphée Ritchie, psychologue à Saint Jean de Luz."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold text-custom-title mb-8 text-center">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none text-custom-text">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">1. Introduction</h2>
            <p>
              Le cabinet d&apos;Orphée Ritchie, psychologue à Saint Jean de Luz,
              s&apos;engage à protéger la confidentialité et la sécurité des données personnelles de ses patients.
            </p>
            <p className="mb-4">
              Cette politique de confidentialité décrit comment vos informations personnelles sont collectées, 
              utilisées et protégées dans le cadre de votre suivi psychologique.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">2. Collecte des données</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Données collectées</h3>
            <p>Les données personnelles collectées peuvent inclure :</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Informations d&apos;identité (nom, prénom, date de naissance)</li>
              <li>Coordonnées de contact (téléphone, email, adresse)</li>
              <li>Informations médicales et psychologiques</li>
              <li>Historique des consultations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">3. Utilisation des données</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Utilisation des données</h3>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Assurer le suivi psychologique</li>
              <li>Coordonner les soins avec d&apos;autres professionnels (avec votre consentement)</li>
              <li>Respecter les obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">4. Secret professionnel</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Secret professionnel</h3>
            <p>
              En tant que psychologue, je suis tenue au secret professionnel conformément à l&apos;article 226-13 du Code pénal.
              Toutes les informations partagées en consultation sont strictement confidentielles.
            </p>
            <p>Exceptions au secret professionnel :</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Révélation d&apos;actes de maltraitance sur mineur</li>
              <li>Danger immédiat pour la personne ou autrui</li>
              <li>Obligation légale de signalement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">5. Conservation des données</h2>
            <p className="mb-4">
              Vos données sont conservées pendant toute la durée de votre suivi et au minimum 10 ans 
              après la dernière consultation, conformément aux obligations légales.
            </p>
            <p className="mb-4">
              Les données sont stockées de manière sécurisée, avec accès restreint et protocoles de sécurité appropriés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">6. Vos droits</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Vos droits</h3>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Droit d&apos;accès :</strong> Consulter vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données (sous conditions)</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">7. Partage des données</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Partage des données</h3>
            <p>
              Vos données ne sont partagées qu&apos;avec votre consentement explicite ou dans les cas suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Avec d&apos;autres professionnels de santé (médecin traitant, spécialistes) avec votre accord</li>
              <li>Avec les autorités compétentes en cas d&apos;obligation légale</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">8. Sécurité des données</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Sécurité</h3>
            <p>
              Des mesures techniques et organisationnelles appropriées sont mises en place pour protéger vos données
              contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">9. Cookies et technologies web</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Cookies</h3>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement.
              Aucun cookie de suivi ou de publicité n&apos;est utilisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">10. Contact</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Contact</h3>
            <p>
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits,
              contactez-moi à l&apos;adresse suivante :
            </p>
            <p className="mb-4">
              <strong>Orphée Ritchie</strong><br />
              Cabinet de psychologie<br />
              14 Avenue Pierre Loti<br />
              64500 Saint Jean de Luz<br />
              Email : contact@orphee-ritchie.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">11. Autorité de contrôle</h2>
            <h3 className="text-xl font-semibold text-custom-title mb-4">Réclamation</h3>
            <p>
              Vous avez le droit de déposer une plainte auprès de la Commission Nationale de l&apos;Informatique
              et des Libertés (CNIL) si vous estimez que vos droits ne sont pas respectés.
            </p>
            <p className="mb-4">
              <strong>CNIL :</strong> 3 Place de Fontenoy, 75007 Paris - www.cnil.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">12. Mise à jour</h2>
            <p className="mb-4">
              Cette politique de confidentialité peut être mise à jour. La version la plus récente 
              sera toujours disponible sur ce site web.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Dernière mise à jour :</strong> Janvier 2025
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialite; 