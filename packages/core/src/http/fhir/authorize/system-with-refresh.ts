// C351 - Authorize - With Refresh (POST https://authorization.sandboxcerner.com/tenants/edeab8dd-fde6-4f52-950f-08115fd153b0/protocols/oauth2/profiles/smart-v1/token)
import fetch from 'node-fetch'

export default async () =>
  fetch('https://authorization.sandboxcerner.com/tenants/edeab8dd-fde6-4f52-950f-08115fd153b0/protocols/oauth2/profiles/smart-v1/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
      //@ts-ignore
      refresh_token: 'eyJpZCI6IjViMzFjNTEzLThhM2ItNDAyMS04ZTY1LWYyOTA0Mjk0YWE0MiIsInNlY3JldCI6ImRjYmQxZmZmLTk0ZjYtNGY3MS1iNzU5LTAwODY0OTgwMGM4ZiIsInZlciI6IjEuMCIsInR5cGUiOiJvbmxpbmVfYWNjZXNzIiwicHJvZmlsZSI6InNtYXJ0LXYxIn0=',
      grant_type: 'refresh_token',
    },
  }).then((res) => res.json())
