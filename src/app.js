import express from 'express'
import morgan from 'morgan'
import routes from './routes'

class AppController {
  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(express.json())
    this.express.use(morgan('dev'))
  }

  routes() {
    this.express.use(routes)
  }
}

export default new AppController().express