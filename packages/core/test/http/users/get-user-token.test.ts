import { getUserToken } from '../../../src/http/users'

describe(`Build Bearer Auth`, () => {
  it(`should get a valid token, with valid credentials`, async () => {
    const { access_token, token_type } = await getUserToken()

    expect(token_type).toBe('Bearer')
    expect(access_token).toBeTruthy()
  })
})
