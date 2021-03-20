import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'Cors';

//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =`mongodb+srv://admin:jkSJeQilp1rpZjW3@cluster0.l4cxg.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//middlewares
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
//API Endpoints
app.get('/', (req, res) => res.status(200).send("hello programer"));

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) =>{
        if (err) {
            res.status(500).send(err);
            
        } else {
            res.status(201).send(data);
            
        }
    });
});

app.get('/tinder/card', (req,res) => {
    Cards.find((err, data) =>{
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });

});

//Listners
app.listen(port, () => console.log(`listening on local host: ${port}`));