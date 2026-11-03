
import * as React from 'react';

import KpiCard from './KpiCard';
import styles from './KpiCards.module.scss';

const KpiCards: React.FC = () => {

  const kpiData = [
    {
      title: 'Total projects',
      value: 6,
      subtitle: 'Projects in the selected portfolio',
      iconName: 'Folder'
    },
    {
      title: 'Gated projects',
      value: 1,
      subtitle: '17% of filtered portfolio',
      iconName: 'CheckMark'
    },
    {
      title: 'In assessment',
      value: 3,
      subtitle: 'Customer impact / Validation assessment',
      iconName: 'ClipboardList'
    },
    {
      title: 'Self Check',
      value: 0,
      subtitle: 'Projects in Self Check checking',
      iconName: 'Completed'
    }
  ];

  return (
    <div className={styles.kpiGrid}>

      {kpiData.map((item) => (

        <KpiCard
          key={item.title}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          iconName={item.iconName}
        />

      ))}

    </div>
  );
};

export default KpiCards;
