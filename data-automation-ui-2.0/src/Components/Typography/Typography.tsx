import React from 'react';
import './Typography.css';
import clsx from 'clsx';

interface TypographyProps {
  variant?: 'display' | 'body' | 'heading' | 'link';
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
  className?: any;
  children: React.ReactNode;
  mandatory?: boolean;
  disabled?: boolean;
}

const Typography = ({
  variant = 'body',
  size = 'medium',
  children,
  mandatory = false,
  disabled = false,
  className,
  ...props
}: TypographyProps) => {
  return (
    <span
      className={clsx(
        className,
        [
          'typography',
          `typography--${variant}`,
          `typography--${size}`
        ].join(' '),
        { 'typography--disabled': disabled }
      )}
      {...props}
    >
      {children}
      {mandatory && (
        <span
          className={clsx('typography--mandatory', {
            'typography--disabled': disabled
          })}
        >
          *
        </span>
      )}
    </span>
  );
};

export default Typography;
