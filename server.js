const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 4000;
//URL : localhost:4000


//Adding bodyParser Middle to express can utilized info from http requests
app.use(bodyParser.urlencoded({ extended:false }))

//Home route
app.get('/', (req, res) => {
    res.send('Homepage');
});

//Second page
app.get('/second', (req, res) => {
    res.send('Second page');
});


app.listen(port, () => {
        console.log(`Running on port ${port} `);
}); 