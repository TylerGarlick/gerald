import fetch from 'node-fetch'

export default async () =>
  fetch('https://authorization.cerner.com/tenants/bec2533f-556b-4412-813d-c5ad8dc7a1e3/protocols/oauth2/profiles/smart-v1/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer 5a967375-441c-4e3e-b6ae-c86d450bf31c',
    },
  }).then((res) => res.json())
