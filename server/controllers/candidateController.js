// server/controllers/candidateController.js
const Candidate = require('../models/Candidate');

exports.getCandidates = (req, res) => {
  Candidate.find()
    .then(candidates => res.json(candidates))
    .catch(err => res.status(500).json({ error: 'Failed to fetch candidates' }));
};
