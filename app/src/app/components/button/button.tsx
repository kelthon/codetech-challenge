import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  title?: string;
  primary?: boolean;
  children?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  ref: React.Ref<HTMLButtonElement>;
}

export function Button({ children, title, type, primary, ref }: ButtonProps) {
  const buttonType = type ? type : 'button';
  const value = children ? (title ? title : '') : title ? title : buttonType;

  return (
    <button
      className={primary ? styles.btnPrimary : styles.btn}
      type={buttonType}
      ref={ref}
    >
      {children}
      {value}
    </button>
  );
}
