import * as React from 'react';
import KpiCards from '../KpiCards/KpiCards';
import GateJourneyHistory from '../GateJourneyHistory/GateJourneyHistory';

import styles from './GovernanceDashboard.module.scss';
import ProjectStatusDistribution
  from '../ProjectStatusDistribution/ProjectStatusDistribution';
import CurrentStage from '../CurrentStage/CurrentStage';
import ProjectStageTrend from '../ProjectStageTrend/ProjectStageTrend';
import ReportingPeriod from '../ReportingPeriod/ReportingPeriod';
import PortfolioFilters from '../PortfolioFilters/PortfolioFilters';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

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
      <DashboardHeader
  onReturnToLiveData={() => {
    console.log('Return to live project data');
  }}
/>

   <ReportingPeriod />
    <PortfolioFilters />
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