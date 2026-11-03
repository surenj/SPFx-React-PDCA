import * as React from 'react';
import KpiCards from '../KpiCard/KpiCards';

interface IGovernanceDashboardProps {
  onHome: () => void;
}

const GovernanceDashboard: React.FC<IGovernanceDashboardProps> = ({
  onHome
}) => {
  return (
    <div>
      <h2>Governance Dashboard</h2>

      <button onClick={onHome}>
        Home
      </button>

      <KpiCards />
    </div>
  );
};

export default GovernanceDashboard;