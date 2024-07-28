const User = require('../models/User');
const Store = require('../models/Store');
const Rating = require('../models/Rating');

exports.addUser = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ name, email, password, address, role });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addStore = async (req, res) => {
  const { name, email, address, owner } = req.body;

  try {
    let store = new Store({ name, email, address, owner });

    await store.save();
    res.json(store);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalStores = await Store.countDocuments();
    const totalRatings = await Rating.countDocuments();

    res.json({ totalUsers, totalStores, totalRatings });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
