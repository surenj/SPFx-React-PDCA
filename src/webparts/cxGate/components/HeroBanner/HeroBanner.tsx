import * as React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import styles from './HeroBanner.module.scss';

export interface IHeroBannerProps {
  title?: string;
  subtitle?: string;
  subheading?: string;
  bgImageUrl?: string;
  onRegisterProject?: () => void;
  onOpenProject?: () => void;
}

export const HeroBanner: React.FC<IHeroBannerProps> = ({
  title = 'Make every project customer-ready.',
  subtitle = 'A single workspace to understand customer needs, design solutions, validate decisions and turn ideas into real impact.',
  subheading = 'FROM CUSTOMER INSIGHT TO SUSTAINABLE OPERATION.',
  bgImageUrl,
  onRegisterProject,
  onOpenProject
}) => {
  return (
    <section
      className={styles.heroContainer}
      style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : undefined}
    >
      <div className={styles.contentOverlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.headline}>
            {title.includes('customer-ready.') ? (
              <>
                Make every project <br />
                <span className={styles.highlightText}>customer-ready.</span>
              </>
            ) : (
              title
            )}
          </h1>

          <p className={styles.description}>{subtitle}</p>

          <div className={styles.subheadingWrapper}>
            <span className={styles.dividerLine} />
            <span className={styles.subheadingText}>{subheading}</span>
          </div>

          <div className={styles.actionRow}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={onRegisterProject}
            >
              <Icon iconName="Add" className={styles.btnIconLeft} />
              <span>Register a Project</span>
              <Icon iconName="Forward" className={styles.btnIconRight} />
            </button>

            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={onOpenProject}
            >
              <Icon iconName="FolderOpen" className={styles.btnIconLeft} />
              <span>Open a Project</span>
              <Icon iconName="Forward" className={styles.btnIconRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;