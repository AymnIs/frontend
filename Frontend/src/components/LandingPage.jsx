import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>BeatRank</h1>
        <p>Your ultimate music ranking app!</p>
      </header>
      <main>
        <p>Choose songs, filter them, and rank them to discover your top tracks.</p>
        <Link to="/step1">
          <button>Get Started</button>
        </Link>
      </main>
      <footer>
        <p>Follow us on social media | Privacy Policy</p>
      </footer>
    </div>
  );
};

export default LandingPage;