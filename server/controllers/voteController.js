// server/controllers/voteController.js
const Vote = require('../models/Vote');
const Candidate = require('../models/Candidate');
const { recordVoteOnBlockchain } = require('../utils/blockchainUtils');

exports.castVote = async (req, res) => {
  const { candidateId } = req.body;

  try {
    const vote = new Vote({ candidateId, userId: req.user.id });
    await vote.save();

    await recordVoteOnBlockchain(vote);

    res.status(200).json({ message: 'Vote cast successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to cast vote' });
  }
};

exports.getVoteResults = async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: "$candidateId", voteCount: { $sum: 1 } } }
    ]);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch results' });
  }
};
