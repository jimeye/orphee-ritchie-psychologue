CONFIGURATION ENVOI D'EMAILS - SITE ORPHÉE RITCHIE
====================================================

DESCRIPTION
-----------
Le site web d'Orphée Ritchie dispose d'un système d'envoi d'emails intégré
qui permet aux visiteurs d'envoyer des messages de contact directement depuis
le site, sans passer par un client mail externe.

FONCTIONNALITÉS
----------------
- Formulaire de contact intégré
- Envoi automatique vers contact@orphee-ritchie.fr
- Validation des champs obligatoires
- Gestion d'erreurs complète
- Interface utilisateur avec feedback

CONFIGURATION REQUISE
---------------------

1. CRÉER LE FICHIER .env.local
   Créez un fichier .env.local à la racine du projet avec :

   EMAIL_USER=votre_email@gmail.com
   EMAIL_PASS=votre_mot_de_passe_d_application

2. CONFIGURER GMAIL
   Pour utiliser Gmail comme serveur SMTP :

   a) Activez l'authentification à 2 facteurs sur votre compte Gmail
   b) Allez dans Paramètres Google > Sécurité
   c) Générez un "Mot de passe d'application"
   d) Utilisez ce mot de passe comme EMAIL_PASS

3. VARIABLES D'ENVIRONNEMENT
   EMAIL_USER : Votre adresse Gmail
   EMAIL_PASS : Le mot de passe d'application généré

INSTALLATION
------------

1. Installer les dépendances :
   npm install nodemailer @types/nodemailer --legacy-peer-deps

2. Créer le fichier .env.local avec vos identifiants

3. Redémarrer le serveur :
   npm run dev

UTILISATION
-----------

1. Les visiteurs remplissent le formulaire de contact
2. Le bouton "Envoyer le message" envoie directement l'email
3. L'email arrive à contact@orphee-ritchie.fr
4. Une confirmation s'affiche sur le site

STRUCTURE DES FICHIERS
----------------------

- pages/api/contact.ts : API pour l'envoi d'emails
- pages/contact.tsx : Formulaire de contact
- .env.local : Configuration des identifiants (à créer)

SÉCURITÉ
---------

- Les identifiants sont stockés dans .env.local (non versionné)
- Validation côté serveur des données
- Gestion d'erreurs complète
- Pas d'exposition des identifiants dans le code

DÉPANNAGE
----------

Si les emails ne s'envoient pas :
1. Vérifiez que .env.local existe et contient les bonnes valeurs
2. Assurez-vous que l'authentification à 2 facteurs est activée
3. Vérifiez que le mot de passe d'application est correct
4. Consultez les logs du serveur pour les erreurs

CONTACT
--------

Pour toute question technique, contactez le développeur. 