import fetch from 'node-fetch'

export default async () => {
  // C351 - Authorize - System (POST https://authorization.sandboxcerner.com/tenants/edeab8dd-fde6-4f52-950f-08115fd153b0/protocols/oauth2/profiles/smart-v1/token)
  const response = await fetch('https://authorization.sandboxcerner.com/tenants/edeab8dd-fde6-4f52-950f-08115fd153b0/protocols/oauth2/profiles/smart-v1/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization': 'Basic 0002RfpvPmA6akxWc9Gm9RoHS6yw'
      Authorization: 'Basic ZDRjYzcwYzItOGM3Ni00ZWEyLWJmZGUtODU0NjM2NTZjZWM5OkVTSzUwVkdsMDg5RUdYSzJudms3dXhWSldkdTN0enN1',
    },
    body: {
      //@ts-ignore
      scope:
        'system/Encounter.read system/Practitioner.read system/Observation.read system/Patient.read system/Person.read system/RelatedPerson.read system/AllergyIntolerance.read system/Procedure.read system/Condition.read system/DocumentReference.read system/Binary.read system/CarePlan.read system/DiagnosticReport.read system/Goal.read system/MedicationOrder.read system/MedicationStatement.read',
      grant_type: 'client_credentials',
    },
  })
  const { status } = response

  if (status === 200) {
    return await response.json()
  } else {
    throw new Error(`Http Error: ${response.status}`)
  }
}
