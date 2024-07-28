const express = require('express');
const router = express.Router();
const { getStoreRatings } = require('../controllers/storeController');
const auth = require('../middlewares/authMiddleware');

router.get('/ratings', auth, getStoreRatings);

module.exports = router;
