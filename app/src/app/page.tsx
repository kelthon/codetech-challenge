'use client';

import { useRef } from 'react';
import { NavBar } from './components/navbar/navbar';
import { SectionHeader } from './components/section-header/section-header';
import { Table } from './components/table/table';

import styles from './page.module.css';

export default function Home() {
  const sectionTitleRef = useRef(null);

  return (
    <>
      <NavBar />
      <section className={styles.section}>
        <SectionHeader
          sectionTitle="Alunos"
          buttonTitle="Criar Registro"
          ref={sectionTitleRef}
        />
        <Table />
      </section>
    </>
  );
}
