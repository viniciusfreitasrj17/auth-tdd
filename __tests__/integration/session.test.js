const request = require('supertest')

const app = require('../../src/app')
const truncate = require('../utils/truncate')
const { User } = require('../../src/app/models')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Marcos',
      email: 'marcos@gmail.com',
      password: 'DSADSADDSDSADS'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: 'DSADSADDSDSADS'
      })
    
    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    const user = await User.create({
      name: 'Marcos',
      email: 'marcos@gmail.com',
      password: 'DSADSADDSDSADS'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: 'DAAAAAAAAAAA'
      })
    
    expect(response.status).toBe(401)
  })
})