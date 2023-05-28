require('dotenv/config')
module.exports = {
  corsOptions: {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
  },
  dbOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}