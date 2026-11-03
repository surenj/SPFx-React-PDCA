
import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

import styles from './DashboardHeader.module.scss';

interface IDashboardHeaderProps {
  onReturnToLiveData?: () => void;
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({
  onReturnToLiveData
}) => {
  return (
    <section className={styles.dashboardHeader}>

      <div className={styles.eyebrow}>
        CX GATE - PROGRAM GOVERNANCE
      </div>

      <h1>
        From project activity to program-level insight
      </h1>

      <p className={styles.description}>
        A consolidated view of registered projects, workflow progress,
        gate outcomes, and the business themes represented across the journey.
      </p>

      <div className={styles.headerActions}>

        <DefaultButton
          text="Return to live project data"
          className={styles.returnButton}
          onClick={onReturnToLiveData}
        />
      </div>

    </section>
  );
};

export default DashboardHeader;
