import React from 'react';
import SummaryCards from '../components/SummaryCards';
import FinancialGraphs from '../components/FinancialGraphs';
import RecentAlerts from '../components/RecentAlerts';
import "../styles.css"; 

const HomePage = () => {
  return (
    <div>
      <SummaryCards />
      <FinancialGraphs />
      <RecentAlerts />
    </div>
  );
};

export default HomePage;
