const express = require('express');
const axios = require("axios");
const app = express();
const router = express.Router();

app.get('/api/tasks', (req, res) => {
  const customers =
  [
    { "name": "eat", "completed": false },
    { "name": "sleep", "completed": false},
    { "name": "poop", "completed": true }
  ]; 
  

  res.json(customers);

  /*const userURL = 'https://hunter-todo-api.herokuapp.com/user';

  axios.get(userURL)
  .then((response) => { 
    const customers = response;
    console.log(response.data);
  }, (error) => {
    console.log(error);
  });*/

});

app.get('/api/users', (req, res) => {
  axios.get('https://hunter-todo-api.herokuapp.com/user')
     .then((response) => { 
       res.json(response.data)
       //res.json(users);
      console.log(response.data);      
    }, (error) => {
      console.log(error);
    });
    /*
    const users =
    [
      { "name": "eat", "completed": false },
      { "name": "sleep", "completed": false},
      { "name": "poop", "completed": true }
    ]; 
    */
})


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

//module.exports = router;
