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

//TODO2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = req.params.width;
  const height = req.params.height;

  const a = width * height;
  const p = 2 * (width + height);

  const result = {
    area: a,
    perimeter: p
  };
  res.json(result);
})

//TODO3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = req.params.base;
  const exponent = req.params.exponent;
  const rootQuery = req.query.root === 'true';
  if(isNaN(base) || isNaN(exponent) || base<0 || exponent<0){
    return res.status(400).json({error: 'Invalid input'});
  }
  const result = Math.pow(base, exponent);
  const response = {
    result: result
  }

  if(rootQuery){
    if(base<0){
      return res.status(400).json({error: 'Invalid input'});
    }
    response.root=Math.sqrt(base)
  }
  res.json(response)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});