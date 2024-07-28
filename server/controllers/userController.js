const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Store = require('../models/Store');
const Rating = require('../models/Rating');

exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    let user = await User.findById(req.user.id);

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.rateStore = async (req, res) => {
  const { storeId, rating } = req.body;

  try {
    const store = await Store.findById(storeId);
    if (!store) {
      return res.status(404).json({ msg: 'Store not found' });
    }

    let userRating = await Rating.findOne({ store: storeId, user: req.user.id });
    if (userRating) {
      userRating.rating = rating;
      await userRating.save();
    } else {
      userRating = new Rating({
        store: storeId,
        user: req.user.id,
        rating
      });
      await userRating.save();
    }

    const ratings = await Rating.find({ store: storeId });
    const averageRating = ratings.reduce((acc, r) => acc + r.rating, 0) / ratings.length;

    store.rating = averageRating;
    await store.save();

    res.json(store);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
