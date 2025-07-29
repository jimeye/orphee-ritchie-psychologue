import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setError('');
      } else {
        setError(result.message || 'Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setError('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <Layout>
      {/* Bloc avec les trois lignes du logo après le header */}
      <div className="bg-custom-background py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center justify-center">
            {/* Ligne 1 - Nom */}
            <div className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide mb-4 font-tinos text-center" style={{ fontSize: 'calc(1.15 * 1.5 * 1.5rem)' }}>
              ORPHEE RITCHIE
            </div>
            
            {/* Ligne 2 - Profession */}
            <div className="text-lg md:text-xl font-semibold text-menu-normal tracking-wider mb-3 font-tinos text-center" style={{ letterSpacing: '0.7em', fontSize: 'calc(1.15 * 1.3 * 1.125rem)' }}>
              PSYCHOLOGUE
            </div>
            
            {/* Ligne 3 - Localisation */}
            <div className="text-sm md:text-base font-medium text-gray-600 tracking-wide font-tinos text-center" style={{ letterSpacing: '0.47em', fontSize: 'calc(1.15 * 1.22 * 1rem)' }}>
              SAINT JEAN DE LUZ
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form - Mise en premier */}
      <section className="bg-custom-background py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Formulaire de contact
          </h2>
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé !</h3>
              <p className="text-green-700">Je vous répondrai dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-custom-title mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-custom-title mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-custom-title mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-custom-title mb-2">
                  Sujet *
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-custom-text rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-text focus:border-custom-text"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="consultation">Prise de rendez-vous</option>
                  <option value="information">Demande d&apos;information</option>
                  <option value="bilan">Bilan psychologique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-custom-title mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Décrivez votre situation et vos besoins..."
                />
              </div>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-custom-text text-white px-8 py-2 rounded-md hover:bg-menu-normal transition-colors"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-custom-title mb-6">
              Contactez-moi
            </h2>
            <p className="text-lg text-custom-text max-w-3xl mx-auto">
              N&apos;hésitez pas à me contacter pour toute question ou pour prendre rendez-vous. 
              Je suis là pour vous accompagner dans votre parcours de soins.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-custom-title text-center mb-12">
            Mes coordonnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4">Informations de contact</h3>
              <div className="space-y-3 text-custom-text">
                <p><strong>Adresse :</strong> 14 Avenue Pierre Loti,<br />64500 Saint Jean de Luz</p>
                <p><strong>Téléphone :</strong> <a href="tel:+33658189799" className="hover:text-blue-600 transition-colors">+33 6 58 18 97 99</a></p>
                <p><strong>Email :</strong> <a href="mailto:contact@orphee-ritchie.fr" className="hover:text-blue-600 transition-colors">contact@orphee-ritchie.fr</a></p>
              </div>
            </div>
            <div className="bg-custom-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-custom-title mb-4">Horaires de consultation</h3>
              <div className="space-y-2 text-custom-text">
                <p><strong>Lundi - Vendredi :</strong> 9h00 - 19h00</p>
                <p><strong>Samedi :</strong> 9h00 - 12h00</p>
                <p><strong>Dimanche :</strong> Fermé</p>
                <p className="mt-4 text-sm">Sur rendez-vous uniquement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Carte */}
          <div className="bg-custom-background rounded-lg p-0 shadow-sm">
            <h3 className="text-2xl font-bold text-custom-title mb-6 text-center">
              Localisation
            </h3>
            <div className="map-border rounded-lg overflow-hidden">
              <div className="bg-custom-background rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.964964839624!2d-1.664504684518964!3d43.38804297913037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51153e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sSaint%20Jean%20de%20Luz!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet Orphée Ritchie - Saint Jean de Luz"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-background py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-custom-title mb-6">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-lg text-custom-text mb-8 max-w-2xl mx-auto">
            Réservez votre consultation en ligne via Doctolib. 
            C&apos;est simple, rapide et sécurisé.
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

export default ContactPage; 