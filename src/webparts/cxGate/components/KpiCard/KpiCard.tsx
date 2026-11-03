
import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';

import styles from './KpiCards.module.scss';
import { IKpiCardProps } from './IKpiCardProps';

const KpiCard: React.FC<IKpiCardProps> = (props) => {

  return (
    <div className={styles.kpiCard}>

      <div className={styles.cardHeader}>

        <span className={styles.cardTitle}>
          {props.title}
        </span>

        <div className={styles.iconContainer}>
          <Icon
            iconName={props.iconName}
            className={styles.cardIcon}
          />
        </div>

      </div>

      <div className={styles.cardValue}>
        {props.value}
      </div>

      <div className={styles.cardSubtitle}>
        {props.subtitle}
      </div>

    </div>
  );
};

export default KpiCard;
