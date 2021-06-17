const { Router } = require('express');
const { User } = require('./app/models');

const routes = Router();

// Routes

// Test connection
(async () => {
try {
  const user = await User.create({
    name: 'Marcos',
    email: 'marcos@gmail.com',
    password_hash: 'DSADSADDSDSADS'
  })

  user.save()
  
} catch (error) {
  console.log(error)
}
})()

module.exports = routes;
