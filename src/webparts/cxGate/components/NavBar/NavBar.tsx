import * as React from 'react';
import { NavItem, INavItemProps } from  './NavItem/NavItem'; 
import styles from  './NavBar.module.scss';

export interface INavBarProps {
  logoUrl?: string;
  brandTitle?: string;
  navItems?: INavItemProps[];
}

export const NavBar: React.FC<INavBarProps> = ({
  logoUrl,
  brandTitle = 'Gate',
  navItems = [
    { label: 'Playbook', iconName: 'ReadingMode', url: '#playbook' },
    { label: 'Support & Contact', iconName: 'Chat', url: '#support' },
    { label: 'Governance', iconName: 'Shield', url: '#governance' }
  ]
}) => {
  return (
    <header className={styles.navBarContainer}>
      {/* Left side: Brand Logo & Title */}
      <div className={styles.brandContainer}>
        {logoUrl ? (
          <img src={logoUrl} alt="Logo" className={styles.logoImage} />
        ) : (
          <div className={styles.defaultLogoMark}>
            {/* Embedded SVG representation of the ribbon/infinity icon */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 10C5.79 10 4 11.79 4 14C4 16.21 5.79 18 8 18C10.5 18 13 14 16 14C19 14 21.5 18 24 18C26.21 18 28 16.21 28 14C28 11.79 26.21 10 24 10C21.5 10 19 14 16 14C13 14 10.5 10 8 10Z"
                fill="#0078D4"
              />
              <path
                d="M19 11L25 16L19 21"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        <span className={styles.brandTitle}>{brandTitle}</span>
      </div>

      {/* Right side: Navigation Links */}
      <nav className={styles.navLinks} aria-label="Main Navigation">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            iconName={item.iconName}
            url={item.url}
            onClick={item.onClick}
          />
        ))}
      </nav>
    </header>
  );
};

export default NavBar;