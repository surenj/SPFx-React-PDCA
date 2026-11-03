import * as React from 'react';
import KpiCards from '../KpiCards/KpiCards';
import GateJourneyHistory from '../GateJourneyHistory/GateJourneyHistory';

import styles from './GovernanceDashboard.module.scss';
import ProjectStatusDistribution
  from '../ProjectStatusDistribution/ProjectStatusDistribution';
import CurrentStage from '../CurrentStage/CurrentStage';
import ProjectStageTrend from '../ProjectStageTrend/ProjectStageTrend';

interface IGovernanceDashboardProps {
  onHome: () => void;
}

const GovernanceDashboard: React.FC<IGovernanceDashboardProps> = ({
  onHome
}) => {
  return (
    <div className={styles.dashboard}>
      <h2>Governance Dashboard</h2>

      <button onClick={onHome}>
        Home
      </button>

      <KpiCards />
       <GateJourneyHistory />
       <ProjectStatusDistribution />
       <div className={styles.bottomCharts}>
        <CurrentStage />
        <ProjectStageTrend />
      </div>
    </div>
  );
};

export default GovernanceDashboard;