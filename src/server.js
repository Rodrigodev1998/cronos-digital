const express = require('express');
const path = require('path');
const app = express();

const Port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/docs'));

app.get('/*', (req, res) =>{
    res.sendFile(__dirname + '/docs/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
})