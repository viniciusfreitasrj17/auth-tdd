const bcrypt = require('bcryptjs')

const truncate = require('../utils/truncate')
const { User } = require('../../src/app/models')
const factory = require('../factories')

describe("User", () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should encrypt user password', async () => {
    const user = await factory.create('User', {
      password: 'DSADSADDSDSADS'
    })

    const userMatch = await User.findOne({
      where: {
        email: user.email
      }
    })

    const compareHash = await bcrypt.compare(user.password, userMatch.password_hash)

    expect(compareHash).toBe(true)
  })
})