import { initialize } from '../../../src/services/persistence/store'

describe(`Persistence Store`, () => {
  let store
  beforeEach(() => {
    store = initialize()

    expect(store).toBeDefined()
    expect(store.size).toBe(6)
  })
  it(`initializes with apiKey`, () => expect(store.has('apiKey')).toBeTruthy())
  it(`initializes with apiKey`, () => expect(store.has('apiKey')).toBeTruthy())

  it(`setups properly`, async () => {
  })
})
