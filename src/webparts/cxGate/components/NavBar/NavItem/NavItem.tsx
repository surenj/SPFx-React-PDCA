import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import styles from '../NavBar.module.scss';

export interface INavItemProps {
  label: string;
  iconName: string;
  url?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<INavItemProps> = ({
  label,
  iconName,
  onClick
}) => {
  return (
    <button
      type="button"
      className={styles.navItem}
      onClick={onClick}
    >
      <Icon iconName={iconName} className={styles.navIcon} />
      <span className={styles.navLabel}>{label}</span>
    </button>
  );
};

export default NavItem;