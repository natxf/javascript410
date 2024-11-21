'use strict';

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

let data = fs.readFileSync(path.join(__dirname, 'jokes.json'), 'utf8');
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
//TODO4
app.get('/jokebook/categories', (req, res) => {
  const categories = JSON.parse(data).categories;
  res.json(categories);
})
const jokesData = JSON.parse(data);
//TODO5
app.get('/jokebook/joke/:category', (req, res) =>{
  const category = req.params.category;
  if(!jokesData.categories.includes(category)){
    return res.status(404).json({error: 'Category not found'});
  }
  const jokes = jokesData[category]
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});