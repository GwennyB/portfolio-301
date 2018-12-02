'use strict';

// set up dependencies
const express = require('express'); // imports 'express' into this app
const app = express(); // because express documentation says so (always use 'app')
const PORT = process.env.PORT || 3000;

// allows us to serve static files (like html)
app.use(express.static('./public'));

// home route
app.get('/home', function(req,res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

// open a port
app.listen(PORT, function() { // 'app' calls 'express'; .listen opens port in arg; port from heroku
  console.log('listening on port ', PORT);
});

