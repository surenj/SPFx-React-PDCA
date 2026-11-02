import * as React from 'react';

import {
  BookOpen,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

import { NavigationItem } from './NavigationItem/NavigationItem';

import styles from './NavigationBar.module.scss';

const navigationItems = [
  {
    label: 'Playbook',
    url: '#playbook',
    icon: BookOpen
  },
  {
    label: 'Support & Contact',
    url: '#support',
    icon: MessageCircle
  },
  {
    label: 'Governance',
    url: '#governance',
    icon: ShieldCheck
  }
];

export const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      {navigationItems.map(item => (
        <NavigationItem
          key={item.label}
          label={item.label}
          url={item.url}
          icon={item.icon}
          className={styles.navigationItem}
        />
      ))}
    </nav>
  );
};