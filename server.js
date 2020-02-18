const express = require('express');

const app = express();

app.get('/api/tasks', (req, res) => {
  const customers = /*[
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];*/

  [
    { "name": "eat", "completed": false },
    { "name": "sleep", "completed": false},
    { "name": "poop", "completed": true }
  ]; 
  

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);