//console.log("hello I'm pushing the changes to this project on github, for sure");

const express = require('express');
const app = express();



//specifying the initial route of our application

app.get('/', (req,res) => {
    res.send('the bundesliga season starts today!!!');
})



app.listen(3000, () => {
    console.log('app is listening at port 3000');
})