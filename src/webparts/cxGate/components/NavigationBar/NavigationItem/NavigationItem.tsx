
import * as React from 'react';
import { LucideIcon } from 'lucide-react';

export interface INavigationItemProps {
  label: string;
  url: string;
  icon: LucideIcon;
  className?: string;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
  label,
  url,
  icon: Icon,
  className
}) => {
  return (
    <a href={url} className={className}>
      <Icon
        size={13}
        strokeWidth={2}
        aria-hidden="true"
      />

      <span>{label}</span>
    </a>
  );
};