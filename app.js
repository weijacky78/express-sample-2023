const express = require('express'); //import the express module
const app = express(); // make an express object - represents a express app

const port = 9000;//constant (used later)

app.get('/', (req, res) => {// handler for the "/" path

    res.send("hello world"); //sends a response and terminates the connection

});

app.get('/:msg/:text', (req, res) => {// handler for the "/" path

    //req.params.msg, req.params.text
    res.send(`message:${req.params.msg}, text:${req.params.text}`); //sends a response and terminates the connection

});


app.listen(port, () => console.log(`App running on port: ${port}`));//start listening for requests