// client/src/components/Voter/VoteButton.js
import React from 'react';
import axios from '../services/api';

const VoteButton = ({ candidateId }) => {
  const handleVote = () => {
    axios.post(`/votes`, { candidateId })
      .then(response => alert('Vote recorded!'))
      .catch(error => console.error(error));
  };

  return <button onClick={handleVote}>Vote</button>;
};

export default VoteButton;
