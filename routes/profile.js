const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas');
const { getProfile, addProfileInfo, updateProfileInfo } = require('../controllers/profileController');

router.get('/', getProfile);
router.post('/', addProfileInfo);
router.patch('/', updateProfileInfo);

module.exports = router;