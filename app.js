//importo express
const express = require('express');

//creo l'istanza dell'app attraverso il metodo express che ho importato
const app = express();

// definisco il numero di porta su cui deve girare l'applicazione
const port = 3000;

// definisco la rotta base  
app.get('/', (req, res) => {
    res.send('Rotta base dei miei movies')
});

//dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});