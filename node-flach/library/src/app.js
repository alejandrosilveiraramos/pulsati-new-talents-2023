const express = require('express');

const { 
    createAuthor,
    readAllAuthor,
    readAuthor,
    updateAuthor,
    deleteAuthor 
} = require('./controller/author');


//Start node app express
const app = express();

app.use(express.json())

//Author Endpoints

 // Create
app.post('/author', createAuthor);

 // Read All
app.get('/author', readAllAuthor);

 // Read
app.get('/author/:id', readAuthor);

// Update
app.put('/author/:id', updateAuthor);

// Delete
app.delete('/author/:id', deleteAuthor);

//Setting port
app.listen(8080);