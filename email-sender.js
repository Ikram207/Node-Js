const nodemailer = require("nodemailer");

// Création du transporteur
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ikrambdk55@gmail.com",     
    pass: "***********"       
  }
});

// Définir les options de l'email
const mailOptions = {
  from: "ikrambdk55@gmail.com",         
  to: "yato70368@gmail.com",           
  subject: "Test Email Node.js",
  text: "Ceci est un email envoyé avec Nodemailer depuis un script Node.js !"
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Erreur :", error);
  }
  console.log("Email envoyé :", info.response);
});
