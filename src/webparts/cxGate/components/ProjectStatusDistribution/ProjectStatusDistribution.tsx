
import * as React from 'react';
import styles from './ProjectStatusDistribution.module.scss';

interface IProjectStatus {
  id: number;
  name: string;
  count: number;
  color: string;
}

const projectStatuses: IProjectStatus[] = [
  {
    id: 1,
    name: 'Planning',
    count: 1,
    color: 'planning'
  },
  {
    id: 2,
    name: 'In course',
    count: 2,
    color: 'inCourse'
  },
  {
    id: 3,
    name: 'On hold',
    count: 1,
    color: 'onHold'
  },
  {
    id: 4,
    name: 'Stopped',
    count: 1,
    color: 'stopped'
  },
  {
    id: 5,
    name: 'Gated',
    count: 1,
    color: 'gated'
  },
  {
    id: 6,
    name: 'Not set',
    count: 0,
    color: 'notSet'
  }
];

const ProjectStatusDistribution: React.FC = () => {

  const maxCount = Math.max(
    ...projectStatuses.map(status => status.count),
    1
  );

  return (
    <section className={styles.statusCard}>

      {/* Header */}
      <div className={styles.statusHeader}>
        <div>
          <h3>Project Status Distribution</h3>
          <p>Distribution by registered project status</p>
        </div>

        <span className={styles.portfolioBadge}>
          PORTFOLIO
        </span>
      </div>

      {/* Chart */}
      <div className={styles.chartContainer}>

        {projectStatuses.map(status => {

          const barHeight =
            (status.count / maxCount) * 100;

          return (
            <div
              key={status.id}
              className={styles.statusColumn}
            >

              {/* Count */}
              <div className={styles.statusCount}>
                {status.count}
              </div>

              {/* Bar Area */}
              <div className={styles.barArea}>

                <div
                  className={`${styles.statusBar} ${styles[status.color]}`}
                  style={{
                    height: `${barHeight}%`
                  }}
                />

              </div>

              {/* Status Label */}
              <div className={styles.statusLabel}>
                {status.name}
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default ProjectStatusDistribution;
