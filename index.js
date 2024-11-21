'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//TODO1  
  const r = req.params.r;
  const a = (Math.PI * r * r).toFixed(2);
  const c = (2 * Math.PI * r).toFixed(2);
  const result = {
    area: a,
    circumference: c  
  };
  res.json(result);
});

app.get('/math/rectangle/2/3')

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});