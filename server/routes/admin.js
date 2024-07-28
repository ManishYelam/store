const express = require('express');
const router = express.Router();
const { addUser, addStore, getDashboard } = require('../controllers/adminController');
const auth = require('../middlewares/authMiddleware');

router.post('/add-user', auth, addUser);
router.post('/add-store', auth, addStore);
router.get('/dashboard', auth, getDashboard);

module.exports = router;
