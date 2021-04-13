import Conf from 'conf'
import * as yup from 'yup'

// import joiJson from 'joi-json'
// import convert from 'joi-to-json-schema'
// const _schema = {
//   $schema: 'http://json-schema.org/draft-07/schema#',
//   $id: 'http://meta3.org/gerald/gerald-configuration.schema.json',
//   title: 'GeraldConfiguration',
//   description: 'A person',
//   type: 'object',
//   properties: {
//     apiKey: {
//       type: 'string',
//       description: 'API Key',
//     },
//     fhirToken: {},
//     token: {},
//     // xApiKey: ``,
//     // xDfdConsumerId: ``,
//     // xPatientId: ``,
//     // xDeviceId: ``,
//   },
// }
//
//
// // const instanceBuilder = joiJson.builder()
//
// export const geraldDefinition = Joi.object({
//   apiKey: Joi.string().optional().trim(),
//   fhirToken: Joi.string().optional().trim(),
//   [`x-api-key`]: Joi.string().optional().trim(),
//   [`x-dfd-consumer-id`]: Joi.string().optional().trim(),
//   [`x-patient-id`]: Joi.string().optional().trim(),
//   [`x-device-id`]: Joi.string().optional().trim(),
//   token: Joi.string().optional().trim(),
// })
//
// export const geraldSchema = Joi.compile(geraldDefinition
//
// geraldSchema
// const convertToSchema = (schema: Joi.Schema) => convert(schema)
//
// console.log(convertToSchema(geraldSchema))

// const convertFromSchema = (schema = {}) => convert(schema)

const GeraldSchema = yup.object({
  apiKey: yup.string().optional().trim(),
  fhirToken: yup.string().optional().trim(),
  // xApiKey: yup.string(),
  // xDfdConsumerId: ``,
  // xPatientId: ``,
  // xDeviceId: ``,
  token: yup.string().optional().trim(),
})

export const initialize = (defaults = {}) => {
  // const schema = convert(GeraldSchema)

  return new Conf({
    cwd: __dirname,
    defaults: {
      ...defaults,
      apiKey: `4f472d84cc2c06b89e7ed688dc304b261e8e98e798df17ea782ad04365d7449e`,
      fhirToken: `eyJraWQiOiIyMDIwLTA4LTIzVDA2OjQ0OjUyLjE4Mi5lYyIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2In0`,
      patientId: `8024185`,
      xApiKey: `41af286dc0b172ed2f1ca934fd2278de4a1192302ffa07087cea2682e7d372e3`,
      consumerId: `405100772`,
      token: `Bearer 0002Fa6yFYdidSLPIVdGue0vrwpW`,
    },
    configName: `gerald`,
    accessPropertiesByDotNotation: true,
    // schema,
  })
}

const geraldStore = initialize()

const getApiKey = () => geraldStore.get(`apiKey`)
const getFHIRToken = () => geraldStore.get(`fhirToken`)
const getPatientId = () => geraldStore.get(`patientId`)
const getXApiKey = () => geraldStore.get(`xApiKey`)
const getConsumerId = () => geraldStore.get(`consumerId`)
const getToken = () => geraldStore.get(`token`)

export const conf = {
  getApiKey,
  getFHIRToken,
  getPatientId,
  getXApiKey,
  getConsumerId,
  getToken,
}

export default geraldStore
