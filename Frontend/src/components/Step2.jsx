import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../api/apiClient';

const Step2 = () => {
  const [filters, setFilters] = useState({
    country: '',
    genre: '',
    artist: '',
    language: '',
    gender: '',
    artistType: '',
  });
  const [totalSongs, setTotalSongs] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetchTotalSongs();
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const fetchTotalSongs = async () => {
    try {
      const response = await apiClient.post('/api/songs/count', filters);
      setTotalSongs(response.data.total);
    } catch (error) {
      console.error('Error fetching total songs:', error);
    }
  };

  const handleNext = () => {
    history.push('/step3');
  };

  return (
    <div className="step2">
      <h2>Step 2: Filter Songs</h2>
      <div className="filter-group">
        <label>
          Country:
          <select value={filters.country} onChange={(e) => handleFilterChange('country', e.target.value)}>
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
          </select>
        </label>
        {/* Repeat for other filters */}
      </div>
      <p>Total Songs: {totalSongs}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;