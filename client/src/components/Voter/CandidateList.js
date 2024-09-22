// client/src/components/Voter/CandidateList.js
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get('/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Available Candidates</h2>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate._id}>
            {candidate.name}
            <button>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;
