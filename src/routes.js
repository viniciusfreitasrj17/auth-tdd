const { Router } = require('express');
const routes = Router();

const authMiddleWare = require('./app/middlewares/auth')

const SessionController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionController.store)

// Private
routes.get('/dashboard', authMiddleWare, (req, res) => {
  return res.status(200).send()
})

module.exports = routes;
