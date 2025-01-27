import styles from './section-header.module.css';
import { Button } from '../button/button';
import { useRef } from 'react';

interface SectionHeaderProps {
  sectionTitle: string;
  buttonTitle: string;
  ref: React.Ref<HTMLHeadingElement>;
}

export function SectionHeader({
  sectionTitle,
  buttonTitle,
  ref,
}: SectionHeaderProps) {
  const buttonRef = useRef(null);
  return (
    <h2 className={styles.sectionTitle} ref={ref}>
      <span>{sectionTitle}</span>
      <Button title={buttonTitle} ref={buttonRef} />
    </h2>
  );
}
