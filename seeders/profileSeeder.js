const mongoose = require('mongoose');
const { Meta } = require('../models/schemas');
const { dbOptions } = require('../config/config');
require('dotenv/config');

mongoose.connect(process.env.DB_URI, dbOptions)
  .then(() => console.log('DB Connected For Profile Seeder'))
  .catch(err => console.error(err));

const profileSeeder = [
  {
    key: 'name',
    value: 'Kumud Khatiwada',
  },
  {
    key: 'address',
    value: 'Kirtipur, Kathmandu',
  },
  {
    key: 'email',
    value: 'kumod752@gmail.com',
  },
  {
    key: 'phone',
    value: '+977-9811223344',
  },
  {
    key: 'facebook',
    value: 'facebook.com',
  },
  {
    key: 'instagram',
    value: 'instagram.com',
  },
  {
    key: 'avatar',
    value: 'kumud.jpg',
  },
  {
    key: 'bio',
    value: 'Hello',
  },
  {
    key: 'profession',
    value: 'Web Developer',
  },
];

const seedProfile = async () => {
  await Meta.deleteMany({});
  await Meta.insertMany(profileSeeder);
};

seedProfile().then(() => {
  console.log('Profile Seeded Successfully!');
  mongoose.connection.close();
});
