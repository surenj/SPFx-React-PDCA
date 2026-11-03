
import * as React from 'react';
import styles from './CurrentStage.module.scss';

interface IStageData {
  id: number;
  name: string;
  count: number;
}

const stageData: IStageData[] = [
  { id: 1, name: 'Registration', count: 1 },
  { id: 2, name: 'Customer Impact', count: 1 },
  { id: 3, name: 'Self-Check - Customer Impact', count: 0 },
  { id: 4, name: 'Assessment - Customer Impact', count: 1 },
  { id: 5, name: 'Customer Validation', count: 1 },
  { id: 6, name: 'Self-Check - Customer Validation', count: 0 },
  { id: 7, name: 'Assessment - Customer Validation', count: 0 },
  { id: 8, name: 'Gated', count: 1 }
];

const CurrentStage: React.FC = () => {

  const maxCount = Math.max(
    ...stageData.map(stage => stage.count),
    1
  );

  return (
    <section className={styles.stageCard}>

      <div className={styles.cardHeader}>
        <div>
          <h3>Current stage</h3>
          <p>Where projects currently sit in the CX Gate journey</p>
        </div>

        <span className={styles.journeyBadge}>
          JOURNEY
        </span>
      </div>

      <div className={styles.chartContainer}>

        {stageData.map(stage => {

          const barHeight = (stage.count / maxCount) * 90;

          return (
            <div
              key={stage.id}
              className={styles.stageColumn}
            >

              <div className={styles.stageCount}>
                {stage.count}
              </div>

              <div className={styles.barArea}>

                <div
                  className={styles.stageBar}
                  style={{
                    height: `${barHeight}px`
                  }}
                />

              </div>

              <div className={styles.stageLabel}>
                {stage.name}
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default CurrentStage;
