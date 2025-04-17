import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../api/apiClient';

const Step3 = ({ years }) => {
  const [currentYear, setCurrentYear] = useState(years[0]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [totalSongsCurrentYear, setTotalSongsCurrentYear] = useState(0);
  const [totalSongsOverall, setTotalSongsOverall] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetchSongsForYear();
  }, [currentYear]);

  const fetchSongsForYear = async () => {
    try {
      const response = await apiClient.get(`/api/songs/year/${currentYear}`);
      setTotalSongsCurrentYear(response.data.total);
      setTotalSongsOverall(response.data.overallTotal);
    } catch (error) {
      console.error('Error fetching songs for year:', error);
    }
  };

  const handleSongSelection = (songId, isSelected) => {
    if (isSelected) {
      setSelectedSongs([...selectedSongs, songId]);
    } else {
      setSelectedSongs(selectedSongs.filter((id) => id !== songId));
    }
  };

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <div className="step-year-selection">
      <h2>Song Selection for {currentYear}</h2>
      <p>Total Songs This Year: {totalSongsCurrentYear}</p>
      <p>Total Songs Overall: {totalSongsOverall}</p>
      <button onClick={() => handleYearChange(currentYear + 1)}>Next Year</button>
      <button onClick={() => history.push('/step4')}>Start Ranking</button>
    </div>
  );
};

export default Step3;