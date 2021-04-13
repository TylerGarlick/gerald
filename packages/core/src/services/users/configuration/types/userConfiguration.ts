import { UserStatus } from './userStatus'

export interface UserConfiguration {
  username: string
  password: string
  mmi: string | number
  personId: string | number
  guid: string
  ldap: string
  notes: string
  email: string
  status: UserStatus
}
