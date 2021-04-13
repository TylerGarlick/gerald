import fetch from 'node-fetch'

export default async () =>
  fetch('https://authorization.sandboxcerner.com/tenants/edeab8dd-fde6-4f52-950f-08115fd153b0/protocols/oauth2/profiles/smart-v1/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic NGVmYTAzZWUtOTZlNi00ZWU0LWI0NWYtMDQwNTJiYTIyODA5OjlMSUhjRlQ2RWNqNjZuT3hBZXVyNVZkeTRzaDRPX3lX',
    },
    body: {
      //@ts-ignore
      scope:
        'system/Encounter.read system/Practitioner.read system/Observation.read system/Patient.read system/Person.read system/RelatedPerson.read system/AllergyIntolerance.read system/Procedure.read system/Condition.read system/DocumentReference.read system/DocumentReference.write system/Binary.read system/CarePlan.read system/DiagnosticReport.read system/MedicationOrder.read system/MedicationStatement.read',
      grant_type: 'client_credentials',
    },
  }).then((res) => res.json())
