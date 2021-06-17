const { User } = require('../../src/app/models')

describe('Fist Test', () => {
  it('should create user in db', async () => {
    const user = await User.create({
      name: 'Marcos',
      email: 'marcos@gmail.com',
      password_hash: 'DSADSADDSDSADS'
    })

    const userMatch = await User.findOne({ 
      where: { 
        email: user.email 
      } 
    })

    expect(user.email).toBe(userMatch.email)
  })
})