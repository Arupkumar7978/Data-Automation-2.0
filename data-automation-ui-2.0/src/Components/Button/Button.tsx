import React, { cloneElement } from 'react';
import './button.css';
import ButtonProps from './buttonTypes';
import clsx from 'clsx';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  backgroundColor = '',
  setIcon = {
    icon: null,
    alignment: 'left'
  },
  error = false,
  className,
  ...props
}: ButtonProps) => {
  const ICON =
    setIcon?.icon && cloneElement(setIcon?.icon, { className: '' });

  return (
    <button
      type="button"
      className={clsx(
        className,
        'fusion-button',
        `fusion-button--${size}`,
        `fusion-button--${variant}`,
        `fusion-button-icon-alignment-${setIcon.alignment}`,
        { [`fusion-error-state`]: error }
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {setIcon?.icon && (
        <span
          className={`fusion-button--icon--${setIcon?.alignment}`}
        >
          {ICON}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
