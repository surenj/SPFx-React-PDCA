
import * as React from 'react';
import styles from './GateJourneyHistory.module.scss';

interface IGateStage {
  id: number;
  name: string;
  count: number;
  percentage: number;
  color: string;
}

const journeyStages: IGateStage[] = [
  {
    id: 1,
    name: 'Registered',
    count: 6,
    percentage: 100,
    color: 'registered'
  },
  {
    id: 2,
    name: 'Customer Impact',
    count: 4,
    percentage: 67,
    color: 'customerImpact'
  },
  {
    id: 3,
    name: 'Customer Validation',
    count: 2,
    percentage: 22,
    color: 'customerValidation'
  },
  {
    id: 4,
    name: 'Gated',
    count: 1,
    percentage: 17,
    color: 'gated'
  }
];

const GateJourneyHistory: React.FC = () => {
  return (
    <section className={styles.journeyCard}>

      {/* Card Header */}
      <div className={styles.journeyHeader}>
        <h3>Gate Journey History</h3>

        <span className={styles.dateBadge}>
          All dates - 4
        </span>
      </div>

      {/* Journey Content */}
      <div className={styles.journeyContent}>

        <div className={styles.journeyTrack} />

        <div className={styles.journeyStages}>

          {journeyStages.map((stage) => (

            <div
              key={stage.id}
              className={styles.journeyStage}
            >

              <div
                className={`${styles.stageCircle} ${styles[stage.color]}`}
              >
                {stage.count}
              </div>

              <div className={styles.stageName}>
                {stage.name}
              </div>

              <div className={styles.stagePercentage}>
                {stage.percentage}%
              </div>

            </div>

          ))}

        </div>
      </div>

    </section>
  );
};

export default GateJourneyHistory;
