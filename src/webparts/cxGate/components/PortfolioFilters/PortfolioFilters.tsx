
import * as React from 'react';

import {
  Dropdown,
  IDropdownOption
} from '@fluentui/react/lib/Dropdown';

import { DefaultButton } from '@fluentui/react/lib/Button';

import styles from './PortfolioFilters.module.scss';

export interface IPortfolioFilters {
  region: string;
  businessArea: string;
  projectType: string;
}

export interface IPortfolioFiltersProps {
  onFiltersChange?: (filters: IPortfolioFilters) => void;
}

const regionOptions: IDropdownOption[] = [
  { key: 'All regions', text: 'All regions' },
  { key: 'North', text: 'North' },
  { key: 'South', text: 'South' },
  { key: 'East', text: 'East' },
  { key: 'West', text: 'West' }
];

const businessAreaOptions: IDropdownOption[] = [
  { key: 'All business areas', text: 'All business areas' },
  { key: 'Automotive', text: 'Automotive' },
  { key: 'Healthcare', text: 'Healthcare' },
  { key: 'Manufacturing', text: 'Manufacturing' },
  { key: 'Technology', text: 'Technology' }
];

const projectTypeOptions: IDropdownOption[] = [
  { key: 'All project types', text: 'All project types' },
  { key: 'New Development', text: 'New Development' },
  { key: 'Enhancement', text: 'Enhancement' },
  { key: 'Migration', text: 'Migration' },
  { key: 'Maintenance', text: 'Maintenance' }
];

const initialFilters: IPortfolioFilters = {
  region: 'All regions',
  businessArea: 'All business areas',
  projectType: 'All project types'
};

const PortfolioFilters: React.FC<IPortfolioFiltersProps> = ({
  onFiltersChange
}) => {

  const [filters, setFilters] =
    React.useState<IPortfolioFilters>(initialFilters);

  const updateFilter = (
    field: keyof IPortfolioFilters,
    value: string
  ): void => {

    const updatedFilters: IPortfolioFilters = {
      ...filters,
      [field]: value
    };

    setFilters(updatedFilters);

    if (onFiltersChange) {
      onFiltersChange(updatedFilters);
    }
  };

  const handleClearFilters = (): void => {

    setFilters(initialFilters);

    if (onFiltersChange) {
      onFiltersChange(initialFilters);
    }
  };

  return (
    <section className={styles.filtersContainer}>

      {/* Region */}
      <div className={styles.filterField}>
        <label>REGION</label>

        <Dropdown
          selectedKey={filters.region}
          options={regionOptions}
          onChange={(event, option) => {
            if (option) {
              updateFilter('region', option.key as string);
            }
          }}
          ariaLabel="Select region"
        />
      </div>

      {/* Business Area */}
      <div className={styles.filterField}>
        <label>BUSINESS AREA</label>

        <Dropdown
          selectedKey={filters.businessArea}
          options={businessAreaOptions}
          onChange={(event, option) => {
            if (option) {
              updateFilter('businessArea', option.key as string);
            }
          }}
          ariaLabel="Select business area"
        />
      </div>

      {/* Project Type */}
      <div className={styles.filterField}>
        <label>PROJECT TYPE</label>

        <Dropdown
          selectedKey={filters.projectType}
          options={projectTypeOptions}
          onChange={(event, option) => {
            if (option) {
              updateFilter('projectType', option.key as string);
            }
          }}
          ariaLabel="Select project type"
        />
      </div>

      {/* Clear Filters */}
      <div className={styles.clearButtonContainer}>
        <DefaultButton
          text="Clear filters"
          onClick={handleClearFilters}
          className={styles.clearButton}
        />
      </div>

    </section>
  );
};

export default PortfolioFilters;
