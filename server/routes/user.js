const express = require('express');
const router = express.Router();
const { changePassword, getStores, rateStore } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

router.put('/change-password', auth, changePassword);
router.get('/stores', auth, getStores);
router.post('/rate-store', auth, rateStore);

module.exports = router;
