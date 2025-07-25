const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 12,         // Longueur du mot de passe
  numbers: true,      // Inclure des chiffres
  symbols: true,      // Inclure des symboles spéciaux
  uppercase: true,    // Lettres majuscules
  lowercase: true,    // Lettres minuscules
  strict: true        // Tous les critères doivent être respectés
});

console.log("🔐 Mot de passe généré :", password);
