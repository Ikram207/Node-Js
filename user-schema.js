function validateUser(user) {
  if (!user.name) {
    throw new Error("Le champ 'name' est obligatoire.");
  }
  if (!user.email) {
    throw new Error("Le champ 'email' est obligatoire.");
  }
  // Ici tu peux ajouter d'autres validations
  return true;
}

// Exemple d'utilisation
try {
  const user = { name: "Ikram" /* pas d'email */ };
  validateUser(user);
} catch (err) {
  console.log("Erreur de validation :", err.message);
}
