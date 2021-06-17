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
      password_hash: 'DSADSADDSDSADS'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password_hash: 'DAAAAAAAAAAAAAAAAA'
      })
    
    expect(response.status).toBe(200)
  })
})