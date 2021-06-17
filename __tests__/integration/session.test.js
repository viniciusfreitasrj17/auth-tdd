const request = require('supertest')

const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../factories')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should authenticate with valid credentials', async () => {
    const user = await factory.create('User', {
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
    const user = await factory.create('User', {
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

  it('should return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
      password: 'DSADSADDSDSADS'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: 'DSADSADDSDSADS'
      })
    
    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User', {
      password: 'DSADSADDSDSADS'
    })

    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer ${user.generateToken()}`)
    
    expect(response.status).toBe(200)
  })

  it('should not be able to access private routes when not authenticated', async () => {
    const response = await request(app)
      .get('/dashboard')
    
    expect(response.status).toBe(401)
  })
})