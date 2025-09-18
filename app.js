//importo express
const express = require('express');

//creo l'istanza dell'app attraverso il metodo express che ho importato
const app = express();

// definisco il numero di porta su cui deve girare l'applicazione
const port = process.env.PORT;

//importo il router
const movieRouter = require('./routers/movieRouter');

app.use(express.static('public'));

// definisco la rotta base  
app.get('/', (req, res) => {
    res.send('Rotta base dei miei movies')
});

//definisco le rotte per i film
app.use('/api/movies', movieRouter);

//dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});