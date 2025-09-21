// controllers/movies.js
// importo la connessione al db
const connection = require("../data/db");

// GET /movies
const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Errore query: ${err}` });
    // fix image filename
    const movies = results.map(m => ({
      ...m,
      image: mapImageByTitle[m.title] ?? m.image
    }));
    return res.json(movies);
  });
};

const mapImageByTitle = {
  "Inception": "inception.jpg",
  "The Godfather": "the_godfather.jpg",
  "Titanic": "titanic.jpg",
  "The Matrix": "matrix.jpg",
  "Interstellar": "interstellar.jpg",
};

// GET /movies/:id (dettagli + recensioni)
const show = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "ID non valido" });
  }

  const sqlMovie = "SELECT * FROM movies WHERE id = ?";
  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err) return res.status(500).json({ error: `Errore query: ${err}` });
    if (resultMovie.length === 0) {
      return res.status(404).json({ error: "Film non trovato" });
    }

    const movie = resultMovie[0];

    // recupero le recensioni collegate
    const sqlReviews = `
      SELECT r.*
      FROM reviews r
      WHERE r.movie_id = ?
      ORDER BY r.created_at DESC
    `;

    connection.query(sqlReviews, [id], (err2, reviews) => {
      if (err2) return res.status(500).json({ error: `Errore query: ${err2}` });
      // fix image filename
      const fixedMovie = {
        ...movie,
        image: mapImageByTitle[movie.title] ?? movie.image
      };
      // usa il movie corretto
      return res.json({ ...fixedMovie, reviews });
    });
  });
};

module.exports = { index, show };
