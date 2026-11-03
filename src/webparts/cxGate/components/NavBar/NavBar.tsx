import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavItem, INavItemProps } from './NavItem/NavItem';
import styles from './NavBar.module.scss';


export interface INavBarProps {
  logoUrl?: string;
  brandTitle?: string;
  navItems?: INavItemProps[];
}

const navigate = useNavigate();

const handleNavigation = (item: INavItemProps): void => {
  if (item.url === '/governance') {
    navigate('/governance');
  } else if (item.onClick) {
    item.onClick();
  }
};

export const NavBar: React.FC<INavBarProps> = ({
  logoUrl,
  brandTitle = 'Gate',
    navItems = [
    { label: 'Playbook', iconName: 'ReadingMode', url: '#playbook' },
    { label: 'Support & Contact', iconName: 'Chat', url: '#support' },
    { label: 'Governance', iconName: 'Shield', url: '/governance' }
  ]
}) => {
  const navigate = useNavigate();

  const handleNavigation = (item: INavItemProps): void => {
    if (item.label === 'Governance') {
      navigate('/governance');
    } else if (item.onClick) {
      item.onClick();
    } else if (item.url?.startsWith('/')) {
      navigate(item.url);
    }
  };

  return (
    <header className={styles.navBarContainer}>
      <div className={styles.brandContainer}>
        {logoUrl ? (
          <img src={logoUrl} alt="Logo" className={styles.logoImage} />
        ) : (
          <div className={styles.defaultLogoMark}>
            {/* Keep your existing SVG here */}
          </div>
        )}
        <span className={styles.brandTitle}>{brandTitle}</span>
      </div>

      <nav className={styles.navLinks} aria-label="Main Navigation">
        {navItems.map((item, index) => (
          <NavItem
  key={index}
  label={item.label}
  iconName={item.iconName}
  url={item.url}
  onClick={() => handleNavigation(item)}
/>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;