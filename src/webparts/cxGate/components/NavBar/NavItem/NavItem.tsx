import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import styles from '../NavBar.module.scss'

export interface INavItemProps {
  label: string;
  iconName: string;
  url?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<INavItemProps> = ({ label, iconName, url, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={url || '#'}
      className={styles.navItem}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <Icon iconName={iconName} className={styles.navIcon} />
      <span className={styles.navLabel}>{label}</span>
    </a>
  );
};