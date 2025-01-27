import React, { useRef } from 'react';
import styles from './table.module.css';
import { RiDeleteBin7Line } from '@remixicon/react';
import { Button } from '../button/button';

export function Table() {
  const buttonRef = useRef(null);
  return (
    <div className={styles.table}>
      <div className={styles.thead}>nome</div>
      <div className={styles.thead}>idade</div>
      <div className={styles.thead}>turma</div>
      <div className={styles.thead}>delete</div>
      <div className={styles.row}>Gabriel</div>
      <div className={styles.row}>18</div>
      <div className={styles.row}>3B</div>
      <div className={styles.row}>
        <Button ref={buttonRef}>
          <RiDeleteBin7Line />
        </Button>
      </div>
    </div>
  );
}
