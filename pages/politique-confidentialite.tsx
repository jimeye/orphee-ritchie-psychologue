import React from 'react';
import Layout from '../components/Layout';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <Layout
      title="Politique de confidentialité - Orphée Ritchie Psychologue"
      description="Politique de confidentialité et protection des données personnelles - Cabinet d'Orphée Ritchie, psychologue à Saint Jean de Luz."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold text-custom-title mb-8 text-center">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none text-custom-text">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">1. Introduction</h2>
            <p className="mb-4">
              Orphée Ritchie, psychologue exerçant au 14 Avenue Pierre Loti, 64500 Saint Jean de Luz, 
              s'engage à protéger la confidentialité et la sécurité des données personnelles de ses patients.
            </p>
            <p className="mb-4">
              Cette politique de confidentialité décrit comment vos informations personnelles sont collectées, 
              utilisées et protégées dans le cadre de votre suivi psychologique.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">2. Collecte des données</h2>
            <p className="mb-4">Les données personnelles collectées incluent :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Informations d'identité (nom, prénom, date de naissance)</li>
              <li>Coordonnées (adresse, téléphone, email)</li>
              <li>Informations médicales et psychologiques</li>
              <li>Antécédents médicaux et familiaux</li>
              <li>Notes de consultation et évaluations</li>
              <li>Informations de facturation et paiement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">3. Utilisation des données</h2>
            <p className="mb-4">Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Assurer votre suivi psychologique</li>
              <li>Établir des diagnostics et plans de traitement</li>
              <li>Coordonner les soins avec d'autres professionnels (avec votre consentement)</li>
              <li>Gérer les aspects administratifs et de facturation</li>
              <li>Respecter les obligations légales et déontologiques</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">4. Secret professionnel</h2>
            <p className="mb-4">
              En tant que psychologue, je suis tenue au secret professionnel conformément à l'article 226-13 du Code pénal. 
              Toutes les informations partagées lors des consultations sont strictement confidentielles.
            </p>
            <p className="mb-4">
              Le secret professionnel ne peut être levé que dans des cas exceptionnels prévus par la loi :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Révélation d'actes de maltraitance sur mineur</li>
              <li>Risque de danger immédiat pour la personne ou autrui</li>
              <li>Demande de levée du secret par le patient lui-même</li>
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
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Droit d'accès :</strong> Consulter vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger des informations inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données (sous conditions)</li>
              <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">7. Partage des données</h2>
            <p className="mb-4">
              Vos données ne sont partagées qu'avec votre consentement explicite ou dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Avec d'autres professionnels de santé (médecin traitant, spécialistes) avec votre accord</li>
              <li>Avec les autorités compétentes en cas d'obligation légale</li>
              <li>Avec votre assurance maladie pour le remboursement des soins</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">8. Sécurité des données</h2>
            <p className="mb-4">
              Des mesures techniques et organisationnelles appropriées sont mises en place pour protéger vos données :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Stockage sécurisé des dossiers</li>
              <li>Accès restreint aux informations</li>
              <li>Chiffrement des données numériques</li>
              <li>Formation continue sur la protection des données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">9. Cookies et technologies web</h2>
            <p className="mb-4">
              Ce site web utilise des cookies techniques nécessaires à son fonctionnement. 
              Aucun cookie de suivi ou de publicité n'est utilisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">10. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              vous pouvez me contacter :
            </p>
            <div className="bg-custom-background p-4 rounded-lg">
              <p className="mb-2"><strong>Orphée Ritchie</strong></p>
              <p className="mb-2">14 Avenue Pierre Loti, 64500 Saint Jean de Luz</p>
              <p className="mb-2">Téléphone : +33 658 18 97 99</p>
              <p className="mb-2">Email : contact@orphéeritchie.org</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">11. Autorité de contrôle</h2>
            <p className="mb-4">
              Vous avez le droit de déposer une plainte auprès de la Commission Nationale de l'Informatique 
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