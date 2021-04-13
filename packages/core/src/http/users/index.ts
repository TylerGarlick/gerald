import fetch from 'node-fetch'

export interface TokenOAuth2Response {
  access_token: string
  token_type: string
  expires_in: string
}

export interface TokenOAuth2Request {
  grant_type: string
  client_id: string
  client_secret: string
  username: string
  password: string
  scope: string
}

export const buildBearerToken = ({ access_token: accessToken, token_type: tokenType }: TokenOAuth2Response) => `${tokenType} ${accessToken}`

export const getUserToken = async (request?: TokenOAuth2Request) => {
  const { grant_type: grantType, client_id: clientId, client_secret: clientSecret, password, username, scope } = {
    ...request,
    grant_type: 'password',
    password: 'Asdfghjkl11%21',
    scope: 'openid',
    username: 'phcdisney',
    client_id: 'myhealth-local',
    client_secret: 'CPqv7bWu8j26qvS2i6EYsvDadmc6bpkuL2CTfCSsyrVL5wBrR53Xj2GMeBViRabB',
  }
  return fetch('https://fssoconsumertst.intermountainhealthcare.org/as/token.oauth2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    body: `grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}&username=${username}&password=${password}&scope=${scope}`,
  }).then((res) => (res.json() as unknown) as TokenOAuth2Response)
}
