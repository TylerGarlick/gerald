import { UserConfiguration, UserStatus } from '../../users/configuration'
import { AbstractStorage } from './persistence'

export class UserConfigurationStorage extends AbstractStorage<string, UserConfiguration> {
  constructor(entries?: [[string, UserConfiguration]] | any) {
    super(entries)
  }

  async byStatus(status: UserStatus) {
    return [...this.all()].filter((u) => u.status === status)
  }

  /**
   * Find One by MMI
   * @param mmi
   */
  async findByMMI(mmi: string) {
    return [...this.all()].find((u) => u.mmi === mmi)
  }

  /**
   * Find One by Person Id
   * @param personId
   */
  async findByPersonId(personId: string) {
    return [...this.all()].find((u) => u.personId === personId)
  }

  /**
   * All Active
   */
  async allActive() {
    return this.byStatus(UserStatus.ACTIVE)
  }

  /**
   * All InActive
   */
  async allInActive() {
    return this.byStatus(UserStatus.ACTIVE)
  }
}
