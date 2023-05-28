const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { corsOptions, dbOptions } = require('./config/config')
require('dotenv/config')

// Routes
const profileRoutes = require('./routes/profile')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/profile', profileRoutes)

app.use(cors(corsOptions))

mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})