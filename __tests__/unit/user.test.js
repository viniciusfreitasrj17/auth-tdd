const bcrypt = require('bcryptjs')

const truncate = require('../utils/truncate')
const { User } = require('../../src/app/models')

describe("User", () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Marcos',
      email: 'marcos@gmail.com',
      password: 'DSADSADDSDSADS'
    })

    const userMatch = await User.findOne({
      where: {
        email: user.email
      }
    })

    const compareHash = await bcrypt.compare('DSADSADDSDSADS', userMatch.password_hash)

    expect(compareHash).toBe(true)
  })
})