const express = require('express');
const port = 3000;
const app = express()



app.get('/', function(req, res){ /*parametros request, respo*/
res.send("Hola");

});


app.listen(port, function() {
  console.log('REST API running on localhost:3000!');
});
