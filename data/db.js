// importiamo mysql2
const mysql = require('mysql2');

//creo la connessione 
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//stabilisco la connessione al db
connection.connect((err) => {
    if(err){
        console.log(`Errore nella connessione al db: ${err}`)
    } else {
        console.log('Connessione al db avvenuta correttamente')
    }
});