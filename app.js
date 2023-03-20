const express = require('express');
const app = express();

app.get('/', (req, res) => {res.json('Hello world!');})



app.listen(7000, () => console.log('Server is listerning on port 7000'));