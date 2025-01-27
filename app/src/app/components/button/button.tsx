import React from 'react';
import styles from "./button.module.css";

interface ButtonProps {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  ref: React.Ref<HTMLButtonElement>;
}

export function Button({ title, type = "button", ref }: ButtonProps) {
  return (
    <button className={styles.primary} type={type} ref={ref}>
      {title}
    </button>
  );
}
