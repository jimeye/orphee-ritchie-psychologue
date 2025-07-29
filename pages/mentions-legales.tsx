import React from 'react';
import Layout from '../components/Layout';

const MentionsLegales: React.FC = () => {
  return (
    <Layout
      title="Mentions légales - Orphée Ritchie Psychologue"
      description="Mentions légales du cabinet d&apos;Orphée Ritchie, psychologue à Saint Jean de Luz."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold text-custom-title mb-8 text-center">
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none text-custom-text">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">1. Éditeur du site</h2>
            <div className="bg-custom-background p-4 rounded-lg">
              <p className="mb-2"><strong>Orphée Ritchie</strong></p>
              <p className="mb-2">Psychologue</p>
              <p className="mb-2">14 Avenue Pierre Loti</p>
              <p className="mb-2">64500 Saint Jean de Luz</p>
              <p className="mb-2">Téléphone : +33 658 18 97 99</p>
              <p className="mb-2">Email : contact@orphéeritchie.org</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">2. Hébergement</h2>
            <p className="mb-4">
              Ce site web est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">3. Conception et développement</h2>
            <p className="mb-4">
              Ce site web a été conçu et développé par STUDIO JOSEPH.
            </p>
            <div className="bg-custom-background p-4 rounded-lg">
              <p className="mb-2"><strong>STUDIO JOSEPH</strong></p>
              <p className="mb-2">Téléphone : +33 608 25 12 23</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur
              et de la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
              documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit
              est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">5. Responsabilité</h2>
            <p className="mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site est 
              périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
              ou des lacunes.
            </p>
            <p className="mb-4">
              Pour toute question concernant l&apos;utilisation du site ou pour signaler un contenu inapproprié,
              merci de bien vouloir le signaler par email à l&apos;adresse contact@orphee-ritchie.fr.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">6. Liens hypertextes</h2>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site web en direction d&apos;autres
              ressources présentes sur le réseau Internet ne sauraient engager la responsabilité d&apos;Orphée Ritchie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">7. Cookies</h2>
            <p>
              Le site peut-être amené à vous demander l&apos;acceptation des cookies pour des besoins de
              statistiques et d&apos;affichage. À défaut d&apos;acceptation, les cookies ne sont pas déposés.
            </p>
            <p>
              Aucun cookie de suivi ou de publicité n&apos;est utilisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">8. Services tiers</h2>
            <p>Ce site utilise les services tiers suivants :</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Google Maps :</strong> Pour l&apos;affichage de la localisation du cabinet</li>
            </ul>
            <p>
              Ces services tiers ont leurs propres politiques de confidentialité et conditions d&apos;utilisation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">9. Droit applicable</h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site orphee-ritchie.fr est soumis au droit français.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">10. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant ces mentions légales, vous pouvez me contacter :
            </p>
            <div className="bg-custom-background p-4 rounded-lg">
              <p className="mb-2"><strong>Orphée Ritchie</strong></p>
              <p className="mb-2">14 Avenue Pierre Loti, 64500 Saint Jean de Luz</p>
              <p className="mb-2">Téléphone : +33 658 18 97 99</p>
              <p className="mb-2">Email : contact@orphéeritchie.org</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-custom-title mb-4">11. Mise à jour</h2>
            <p className="mb-4">
              Ces mentions légales peuvent être mises à jour. La version la plus récente sera toujours 
              disponible sur ce site web.
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

export default MentionsLegales; 