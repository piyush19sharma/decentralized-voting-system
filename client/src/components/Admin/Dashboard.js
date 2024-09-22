// client/src/components/Admin/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const Dashboard = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('/votes/results')
      .then(response => setResults(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard - Voting Results</h2>
      <ul>
        {results.map(result => (
          <li key={result.candidateId}>
            {result.candidateName}: {result.voteCount} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
