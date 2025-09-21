//importo express
const express = require('express');

//creo l'istanza dell'app attraverso il metodo express che ho importato
const app = express();

//imlorto il pacchetto cors
const cors = require('cors');

// definisco il numero di porta su cui deve girare l'applicazione
const port = process.env.PORT;

//importo il router
const movieRouter = require('./routers/movieRouter');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

//registro il middleware per il cors
app.use(cors({origin: process.end.FE_APP}))

app.use(express.static('public'));  

//definisco la rotta base  
app.get('/', (req, res) => {
    res.send('Rotta base dei miei movies')
});

//definisco le rotte per i film
app.use('/api/movies', movieRouter);


app.use(notFound);

app.use(errorHandler);

//dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});