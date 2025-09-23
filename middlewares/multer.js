// importiamo multer
const multer = require("multer");

//definiamo la variabile storage in cui effettuare l'upload
const storage = multer.diskStorage({
  destination: "./public/img",  //definiamo la cartella di destinazione
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); //cb: funzione di callback. null: rappresenta l'errore, uniqueName la variabile definita prima
  },
});

const upload = multer({ storage });

module.exports = upload;
