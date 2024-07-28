const Store = require('../models/Store');
const Rating = require('../models/Rating');

exports.getStoreRatings = async (req, res) => {
  try {
    const store = await Store.findOne({ owner: req.user.id });
    if (!store) {
      return res.status(404).json({ msg: 'Store not found' });
    }

    const ratings = await Rating.find({ store: store.id });
    res.json({ store, ratings });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
