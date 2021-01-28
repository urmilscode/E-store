//console.log("hello I'm pushing the changes to this project on github, for sure");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');




//middleware 
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL


//specifying the initial route of our application

app.get(`${api}/products`, (req,res) => {
    const jerseyCount = {
        id: 1,
        name: 'Erling Haaland',
        club: 'Borrusia Dortmund',
        price: 89.99
    }
    res.send(jerseyCount);
})



app.get(`${api}/details`, (req, res) => {
    const details = {
        id: 1,
        status: 'return request',
        condition: 'torn',
        refundAccepted: true
    }
    res.send(details);
})

app.post(`${api}/products`, (req, res) => {
    const newApparel = req.body
    console.log(newApparel);
    res.send(newApparel);
} )


app.listen(3000, () => {
    console.log(api);
    console.log('app is listening at port 3000');
})