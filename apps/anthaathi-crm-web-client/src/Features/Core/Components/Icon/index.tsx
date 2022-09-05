import * as React from 'react';

export function Icon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  return (
    <span className={`fa fa-${icon} ${className || ''}`} aria-hidden="true" />
  );
}
