import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { nom, email, telephone, sujet, message } = req.body;

    // Validation des champs requis
    if (!nom || !email || !sujet || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tous les champs obligatoires doivent être remplis' 
      });
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com', // Ou votre serveur SMTP
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // À configurer dans .env.local
        pass: process.env.EMAIL_PASS, // À configurer dans .env.local
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@orphee-ritchie.fr',
      subject: `Nouveau message de contact - ${sujet}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || 'Non renseigné'}</p>
        <p><strong>Sujet:</strong> ${sujet}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi du message' 
    });
  }
} 