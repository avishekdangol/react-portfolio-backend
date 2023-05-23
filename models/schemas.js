const mongoose = require('mongoose')
const Schema = mongoose.Schema

const metaSchema = new Schema({
  key: {type: String},
  value: {type: String},
  type: {type: String}
})

const Meta = mongoose.model('Meta', metaSchema, 'meta')
const allSchemas = {'Meta': Meta}

module.exports = allSchemas
