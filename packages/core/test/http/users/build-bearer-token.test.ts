import { buildBearerToken, getUserToken } from '../../../src/http/users'

describe(`buildBearerToken`, () => {
  it(`should builds  valid Bearer Token`, async () => {
    const response = await getUserToken()
    const token = buildBearerToken(response)
    expect(token).toContain(`Bearer`)

    const parts = token.split(' ')
    expect(parts.length).toBeGreaterThanOrEqual(2)
    expect(parts[1]).not.toContain(`Bearer`)
  })
})
