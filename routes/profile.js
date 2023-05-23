const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.get('/', async (req, res) => {
  const meta = schemas.Meta
  const data = await meta.find({}).exec()
  if (data) 
    res.end(JSON.stringify(data))
  else res.end("Something went wrong!")

  res.send(data)
})

module.exports = router