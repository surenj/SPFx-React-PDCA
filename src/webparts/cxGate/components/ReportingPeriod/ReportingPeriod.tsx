
import * as React from 'react';

import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { DefaultButton } from '@fluentui/react/lib/Button';

import styles from './ReportingPeriod.module.scss';

export interface IReportingPeriodProps {
  onReportingPeriodChange?: (
    showBy: string,
    year: string
  ) => void;

  onAllDates?: () => void;
}

const showByOptions: IDropdownOption[] = [
  { key: 'Year', text: 'Year' },
  { key: 'Quarter', text: 'Quarter' },
  { key: 'Month', text: 'Month' }
];

const yearOptions: IDropdownOption[] = [
  { key: 'All years', text: 'All years' },
  { key: '2024', text: '2024' },
  { key: '2025', text: '2025' },
  { key: '2026', text: '2026' }
];

const ReportingPeriod: React.FC<IReportingPeriodProps> = ({
  onReportingPeriodChange,
  onAllDates
}) => {

  const [selectedShowBy, setSelectedShowBy] =
    React.useState<string>('Year');

  const [selectedYear, setSelectedYear] =
    React.useState<string>('All years');

  const notifyChange = (
    showBy: string,
    year: string
  ): void => {
    if (onReportingPeriodChange) {
      onReportingPeriodChange(showBy, year);
    }
  };

  const handleShowByChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ): void => {

    if (option) {
      const showBy = option.key as string;

      setSelectedShowBy(showBy);

      notifyChange(showBy, selectedYear);
    }
  };

  const handleYearChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ): void => {

    if (option) {
      const year = option.key as string;

      setSelectedYear(year);

      notifyChange(selectedShowBy, year);
    }
  };

  const handleAllDates = (): void => {

    setSelectedShowBy('Year');
    setSelectedYear('All years');

    notifyChange('Year', 'All years');

    if (onAllDates) {
      onAllDates();
    }
  };

  return (
    <section className={styles.reportingPeriod}>

      <div className={styles.periodLabel}>
        REPORTING PERIOD
      </div>

      <div className={styles.filterGroup}>

        <div className={styles.filterField}>
          <label>SHOW BY</label>

          <Dropdown
            selectedKey={selectedShowBy}
            options={showByOptions}
            onChange={handleShowByChange}
            className={styles.dropdown}
            ariaLabel="Show reporting period by"
          />
        </div>

        <div className={styles.filterField}>
          <label>YEAR</label>

          <Dropdown
            selectedKey={selectedYear}
            options={yearOptions}
            onChange={handleYearChange}
            className={styles.dropdown}
            ariaLabel="Select reporting year"
          />
        </div>

      </div>

      <div className={styles.actions}>
        <DefaultButton
          text="All dates"
          onClick={handleAllDates}
          className={styles.allDatesButton}
        />
      </div>

    </section>
  );
};

export default ReportingPeriod;
