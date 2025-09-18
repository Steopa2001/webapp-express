// importiamo mysql2
const mysql = require('mysql2');

//creo la connessione 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SteopaRoot',
    database: 'movies_db',
});

//stabilisco la connessione al db
connection.connect((err) => {
    if(err){
        console.log(`Errore nella connessione al db: ${err}`)
    } else {
        console.log('Connessione al db avvenuta correttamente')
    }
});