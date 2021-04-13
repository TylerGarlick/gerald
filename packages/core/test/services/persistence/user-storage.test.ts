import { UserConfigurationStorage } from '../../../src/services/persistence/store/user-configuration-storage'
import testUsers from '../../../src/services/users/configuration/testUsers'

describe(`UserStorage`, () => {
  let userStorage
  beforeEach(() => {
    userStorage = new UserConfigurationStorage(testUsers)
    expect(userStorage).toBeDefined()
  })

  it(`no users, by default`, async () => {
    const active = await userStorage.allActive()
    const inactive = await userStorage.allInActive()

    expect(active).toHaveLength(0)
    expect(inactive).toHaveLength(0)
  })

  //describe(`initialize`, () => {
  //  let userStorage
  //  beforeEach(() => {
  //    userStorage = new UserConfigurationStorage()
  //    expect(userStorage).toBeDefined()
  //    expect(userStorage.has('phcdisney')).toBeTruthy()
  //  })
  //
  //  describe(`phcdisney`, () => {
  //    //@ts-ignore
  //    it(`can find valid phcdisney, user`, async () => {
  //      const user = (await userStorage.get(`phcdisney`)) as UserConfiguration
  //      expect(user.username).toBe('phcdisney')
  //      expect(user.mmi).toBe('405100772')
  //      expect(user.email).toBe('jessica.christensen@imail.org')
  //      expect(user.guid).toBe('ae37387b-a976-4c1d-a202-d59c6b4814db')
  //      expect(user.ldap).toContain('14-FEB-60')
  //      expect(user.personId).toBe('8024185')
  //      expect(user.password).toBe('Asdfghjkl11!')
  //    })
  //  })
  //})
})
