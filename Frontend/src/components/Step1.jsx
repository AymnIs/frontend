import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../api/apiClient';

const Step1 = () => {
  const [startYear, setStartYear] = useState(1950);
  const [endYear, setEndYear] = useState(2023);
  const [totalSongs, setTotalSongs] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetchTotalSongs();
  }, [startYear, endYear]);

  const fetchTotalSongs = async () => {
    try {
      const response = await apiClient.get('/api/songs/count', {
        params: { startYear, endYear },
      });
      setTotalSongs(response.data.total);
    } catch (error) {
      console.error('Error fetching total songs:', error);
    }
  };

  const handleNext = () => {
    history.push('/step2');
  };

  return (
    <div className="step1">
      <h2>Step 1: Choose Years</h2>
      <label>
        Start Year:
        <input
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          min="1900"
          max="2023"
        />
      </label>
      <label>
        End Year:
        <input
          type="number"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          min="1900"
          max="2023"
        />
      </label>
      <p>Total Songs in Range: {totalSongs}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;