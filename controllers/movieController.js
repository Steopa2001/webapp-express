//importo la connessione al db
const connection = require("../data/db");

//index
const index = (req, res) => {
  // creo la query
  const sql = "SELECT * FROM movies";

  // eseguo la query
  connection.query(sql, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ error: `Errore nell'esecuzione della query: ${err}` });

    res.send(results);
  });
};

//show
const show = (req, res) => {
  //recupero l'id parametro
  const { id } = req.params;

  //creo la query
  const sqlMovie = "SELECT * FROM movies WHERE id = ?";

  //eseguo la query passando ora i parametri
  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err)
      return res
        .status(500)
        .json({ error: `errore nell'esecuzione della query: ${err}` });

    res.send(resultMovie[0]);
  });
};

module.exports = {
  index,
  show,
};
