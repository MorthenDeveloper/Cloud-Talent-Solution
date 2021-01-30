const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //procesa los datos de un form


//routes
app.use(require('./routes/index'));


app.listen(4000);
console.log('Server on port 4000');