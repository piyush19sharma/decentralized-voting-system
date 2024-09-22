// server/controllers/userController.js
const User = require('../models/User');

exports.getUserProfile = (req, res) => {
  User.findById(req.user.id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: 'User not found' }));
};
