import React from 'react';
import SummaryCards from '../components/SummaryCards';
import FinancialChart from '../components/FinancialGraphs';
import BarGraph from '../components/BarGraph';
import PieChartComponent from '../components/PieChart';
import RecentAlerts from '../components/RecentAlerts';
import "../styles.css"; 

const HomePage = () => {
  return (
    <div>
      <SummaryCards />
      <div className="content-container">
        <div className="financial-graphs">
        <h3>Previous Year Trends</h3>
        <FinancialChart />

        </div>
        <div className="recent-alerts">
        <h3>Expense Breakdown</h3>
        <PieChartComponent />
      </div>
        
        <div className="financial-graphs">
        <h3>Monthly COGS and Travel Expenses</h3>
          <BarGraph />
        </div>
        <div className="recent-alerts">
          <RecentAlerts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
