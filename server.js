'Use Strict';
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('El server esta corriendo en el '+port+'!');
});
