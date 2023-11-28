import React, { useEffect } from 'react';

// import LandingPage from '../_pages/LandingPage';
import NavigationPage from './navigation'
import core from '../core';

const Home = () => {
  // Initial fetch Stats
  useEffect(() => {
    core.stats.getNPMDownloads();
    core.stats.getGithubStats();
  }, []);

  return <NavigationPage />;
};

export default Home;
