import React from 'react';
import SummaryCards from '../components/SummaryCards';
import FinancialChart from '../components/FinancialGraphs';
import RecentAlerts from '../components/RecentAlerts';
import "../styles.css"; 

const HomePage = () => {
  return (
    <div>
      <SummaryCards />
      <div className="content-container">
        <div className="financial-graphs">
        <FinancialChart />

        </div>
        <div className="recent-alerts">
          <RecentAlerts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
