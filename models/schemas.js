const mongoose = require('mongoose')
const Schema = mongoose.Schema

const metaSchema = new Schema({
  key: {type: String, required: true},
  value: {type: String, required: true},
  type: {type: String, default: null}
})

const Meta = mongoose.model('Meta', metaSchema, 'meta')
const allSchemas = {'Meta': Meta}

module.exports = allSchemas
