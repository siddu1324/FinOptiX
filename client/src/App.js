import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DataInputPage from './pages/DataInputPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ScenarioPage from './pages/ScenarioPage';
import SettingsPage from './pages/SettingsPage';
import SupportPage from './pages/SupportPage';
import LoginPage from './pages/LoginPage';
import ReportsPage from './pages/ReportsPage';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <Router>
      <RoutesWrapper />
    </Router>
  );
};

const RoutesWrapper = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/login';

  return (
    <>
      {showNav && <NavigationBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
	  	<Route path="/data-input" element={<DataInputPage />} /> 
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/scenarios" element={<ScenarioPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </>
  );
};

export default App;
