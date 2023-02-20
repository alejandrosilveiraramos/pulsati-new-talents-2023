const express = require('express');

//exports Author
const { 
    createAuthor,
    readAllAuthor,
    readAuthor,
    updateAuthor,
    deleteAuthor 
} = require('./controller/author');

//exports Publisher
const {
    createPublisher,
    readAllPublisher,
    readPublisher,
    updatePublisher,
    deletePublisher,
} = require('./controller/publisher')


//Start node app express
const app = express();

app.use(express.json())


//Author Endpoints

 // Create
app.post('/author', createAuthor);

 // Read All
app.get('/author', readAllAuthor);

 // Read by id
app.get('/author/:id', readAuthor);

// Update
app.put('/author/:id', updateAuthor);

// Delete
app.delete('/author/:id', deleteAuthor);



//Publisher Endpoints

 // Create
 app.post('/publisher', createPublisher);

 // Read All
app.get('/publisher', readAllPublisher);

// Read by id
app.get('/publisher/:id', readPublisher);

// Update 
app.put('/publisher/:id', updatePublisher);

// Delete
app.delete('/publisher/:id', deletePublisher);


//Setting port
app.listen(8080);