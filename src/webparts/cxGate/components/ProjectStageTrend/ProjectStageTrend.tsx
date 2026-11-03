
import * as React from 'react';
import {
  Dropdown,
  IDropdownOption
} from '@fluentui/react/lib/Dropdown';

import styles from './ProjectStageTrend.module.scss';

interface IYearData {
  year: string;
  count: number;
}

interface IStageTrend {
  [stage: string]: IYearData[];
}

const stageOptions: IDropdownOption[] = [
  { key: 'Registration', text: 'Registration' },
  { key: 'Customer Impact', text: 'Customer Impact' },
  { key: 'Customer Validation', text: 'Customer Validation' },
  { key: 'Gated', text: 'Gated' }
];

// Illustrative sample data
const trendData: IStageTrend = {
  'Registration': [
    { year: '2024', count: 0 },
    { year: '2025', count: 1 },
    { year: '2026', count: 0 }
  ],
  'Customer Impact': [
    { year: '2024', count: 0 },
    { year: '2025', count: 1 },
    { year: '2026', count: 0 }
  ],
  'Customer Validation': [
    { year: '2024', count: 0 },
    { year: '2025', count: 0 },
    { year: '2026', count: 1 }
  ],
  'Gated': [
    { year: '2024', count: 0 },
    { year: '2025', count: 1 },
    { year: '2026', count: 0 }
  ]
};

const ProjectStageTrend: React.FC = () => {

  const [selectedStage, setSelectedStage] =
    React.useState<string>('Registration');

  const selectedData = trendData[selectedStage] || [];

  const maxCount = Math.max(
    ...selectedData.map(item => item.count),
    1
  );

  const onStageChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ): void => {
    if (option) {
      setSelectedStage(option.key as string);
    }
  };

  return (
    <section className={styles.trendCard}>

      {/* Header */}
      <div className={styles.trendHeader}>

        <div>
          <h3>Project Stage Trend</h3>
          <p>
            Registration trend for projects currently in the selected stage
          </p>
        </div>

        <Dropdown
          selectedKey={selectedStage}
          options={stageOptions}
          onChange={onStageChange}
          className={styles.stageDropdown}
          ariaLabel="Select project stage"
        />

      </div>

      {/* Chart */}
      <div className={styles.trendChart}>

        <div className={styles.trendBars}>

          {selectedData.map(item => {

            const barHeight =
              (item.count / maxCount) * 100;

            return (
              <div
                key={item.year}
                className={styles.trendColumn}
              >

                <div className={styles.trendCount}>
                  {item.count > 0 ? item.count : ''}
                </div>

                <div className={styles.trendBarArea}>

                  <div
                    className={styles.trendBar}
                    style={{
                      height: `${barHeight}%`
                    }}
                  />

                </div>

                <div className={styles.trendYear}>
                  {item.year}
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ProjectStageTrend;
