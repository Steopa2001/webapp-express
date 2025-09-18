module.exports = (err, req, res, next) => {
  // Logga sempre lato server
  console.error("Errore:", err);

  // Se vuoi distinguere ambiente:
  const isDev = process.env.NODE_ENV !== "production";

  // Alcuni esempi di mapping errori MySQL
  if (err.code === "ER_BAD_FIELD_ERROR") {
    return res.status(400).json({ error: "Campo DB non valido" });
  }
  if (err.code === "ER_DUP_ENTRY") {
    return res.status(409).json({ error: "Dato duplicato" });
  }

  // Fallback
  res.status(500).json({
    error: "Errore interno del server",
    ...(isDev && { details: err.message }) // utile in dev
  });
};
